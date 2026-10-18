export interface FestivalVideo {
  id: string;
  youtubeId: string;
  title: string;
  kinyarwandaTitle?: string;
  category: "Short Film" | "Documentary" | "Community Dialogue";
  directorOrCreator: string;
  description: string;
  durationBadge: string;
  youtubeUrl: string;
}

export const FESTIVAL_VIDEOS: FestivalVideo[] = [
  {
    id: "cesar",
    youtubeId: "7DOx8dCdejQ",
    title: "Cesar",
    category: "Short Film",
    directorOrCreator: "Directed by Habimana Fisca Jean Paul",
    description: "An inspiring Rwandan short film centering Cesar, championing resilience, creative agency, and dignity in our community. Featured in the international Focus on Ability Film Festival.",
    durationBadge: "Short Film",
    youtubeUrl: "https://www.youtube.com/watch?v=7DOx8dCdejQ"
  },
  {
    id: "mugisha",
    youtubeId: "-FpXj-Db1Tk",
    title: "Mugisha (Blessing)",
    category: "Short Film",
    directorOrCreator: "Directed by Habimana Fisca Jean Paul",
    description: "A touching narrative short film exploring lived experience, shared humanity, and hope for persons with disabilities in Rwanda. Featured in Focus on Ability Film Festival.",
    durationBadge: "Short Film",
    youtubeUrl: "https://www.youtube.com/watch?v=-FpXj-Db1Tk"
  },
  {
    id: "autism-awareness",
    youtubeId: "7VH5q85joFg",
    title: "Sobanukirwa Icyo Bita Autism",
    kinyarwandaTitle: "Understanding Autism & Neurodiversity",
    category: "Documentary",
    directorOrCreator: "Produced by Itara Films / TV",
    description: "A deep-dive awareness documentary examining childhood autism, family guidance, and societal inclusion for neurodivergent individuals in Rwanda.",
    durationBadge: "Documentary",
    youtubeUrl: "https://youtu.be/7VH5q85joFg"
  },
  {
    id: "determination-talkshow",
    youtubeId: "mftqZ-GCDcE",
    title: "People With Determination",
    kinyarwandaTitle: "Talk Show • Episode 1",
    category: "Community Dialogue",
    directorOrCreator: "Produced by Itara Films / TV",
    description: "A landmark dialogue and talk show spotlighting Rwandan leaders with disabilities, celebrating determination, equality, and cultural participation.",
    durationBadge: "Talk Show",
    youtubeUrl: "https://www.youtube.com/watch?v=mftqZ-GCDcE"
  }
];
