export interface FestivalMeta {
  name: string;
  tagline: string;
  pillars: string[];
  edition: string;
  dates: string;
  venue: string;
  city: string;
  country: string;
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  vision: string;
  mission: string;
  overallGoal: string;
  belief: string;
  motto: string;
}

export const FESTIVAL_INFO: FestivalMeta = {
  name: "MUSANABANDI Film Festival",
  tagline: "Stories Without Barriers",
  pillars: ["Film", "Inclusion", "Dignity", "Ability"],
  edition: "Inaugural Edition 2026",
  dates: "November 19 – 22, 2026",
  venue: "Kigali Cultural Village & Select Screen Hubs",
  city: "Kigali",
  country: "Rwanda",
  email: "info@musanabandifilmfest.rw",
  whatsapp: "+250 788 000 000",
  whatsappUrl: "https://wa.me/250788000000?text=Hello%20MUSANABANDI%20Film%20Festival",
  vision: "A Rwanda where persons with disabilities are fully represented, respected and empowered to participate in the film, creative and cultural industries.",
  mission: "To use film and creative storytelling to promote dignity, inclusion and equal opportunities for persons with disabilities while creating platforms for their voices, talents, stories and creative careers.",
  overallGoal: "To build a more inclusive society by using film and creative arts to change perceptions of disability, celebrate abilities and create meaningful opportunities for persons with disabilities in Rwanda.",
  belief: "Disability should never be a barrier to creativity, dignity, participation or opportunity. MUSANABANDI believes that every person has a story, every story deserves to be heard, and every ability has the power to contribute to society.",
  motto: "Stories Without Barriers"
};

export interface PillarItem {
  id: string;
  title: string;
  kinyarwanda: string;
  description: string;
  icon: string;
}

export const PILLARS: PillarItem[] = [
  {
    id: "film",
    title: "Film",
    kinyarwanda: "Sinema",
    description: "Screening thought-provoking cinema that centers disability experiences, authored and led by diverse voices.",
    icon: "film"
  },
  {
    id: "inclusion",
    title: "Inclusion",
    kinyarwanda: "Uruhare rwa Bose",
    description: "Dismantling physical, technological, and attitudinal barriers in cinema production and audience participation.",
    icon: "users"
  },
  {
    id: "dignity",
    title: "Dignity",
    kinyarwanda: "Agaciro",
    description: "Replacing charity and stereotypes with cultural respect, creative agency, and authentic human dignity.",
    icon: "shield-check"
  },
  {
    id: "ability",
    title: "Ability",
    kinyarwanda: "Ubushobozi",
    description: "Spotlighting extraordinary artistic craftsmanship, technical mastery, and storytelling prowess.",
    icon: "sparkles"
  }
];
