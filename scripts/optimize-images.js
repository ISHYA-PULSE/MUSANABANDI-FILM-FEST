import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function run() {
  const imagesDir = './public/images';
  const brandDir = './public/images/brand';

  let totalBefore = 0;
  let totalAfter = 0;

  async function optimizeFolder(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) continue;

      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

      totalBefore += stat.size;

      const inputBuffer = fs.readFileSync(fullPath);
      const metadata = await sharp(inputBuffer).metadata();

      let pipeline = sharp(inputBuffer);

      // Scale down max dimension for web display
      if (metadata.width && metadata.width > 1600) {
        pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
      }

      let optimizedBuffer;
      if (ext === '.png') {
        optimizedBuffer = await pipeline.png({ quality: 85, compressionLevel: 8 }).toBuffer();
      } else {
        optimizedBuffer = await pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toBuffer();
      }

      if (optimizedBuffer.length < stat.size) {
        fs.writeFileSync(fullPath, optimizedBuffer);
        totalAfter += optimizedBuffer.length;
        console.log(`Optimized ${file}: ${(stat.size / 1024 / 1024).toFixed(2)} MB -> ${(optimizedBuffer.length / 1024 / 1024).toFixed(2)} MB`);
      } else {
        totalAfter += stat.size;
        console.log(`Kept ${file}: ${(stat.size / 1024).toFixed(1)} KB`);
      }
    }
  }

  console.log('--- Optimizing public/images ---');
  await optimizeFolder(imagesDir);
  console.log('--- Optimizing public/images/brand ---');
  await optimizeFolder(brandDir);

  console.log('=================================');
  console.log(`TOTAL BEFORE: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`TOTAL AFTER:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`TOTAL SAVINGS: ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`);
}

run().catch(console.error);
