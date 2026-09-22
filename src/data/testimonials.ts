export interface Testimonial {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  quote: string;
  image: string;
  imageAlt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "aime-mugisha",
    name: "Aimé Mugisha",
    role: "Documentary Director & Wheelchair User",
    affiliation: "Kigali Independent Cinema",
    quote: "For years, the film industry in East Africa saw my wheelchair before my lens. MUSANABANDI gave me the platform to be judged solely on the cinematic brilliance and storytelling power of my work.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&h=256&q=80&fm=webp",
    imageAlt: "Portrait of Aimé Mugisha, an independent documentary filmmaker from Rwanda"
  },
  {
    id: "charlotte-uwera",
    name: "Charlotte Uwera",
    role: "Visual Artist & Deaf Cinema Advocate",
    affiliation: "Rwandan Sign Language Arts Guild",
    quote: "Seeing my story told on a giant screen with authentic Rwandan Sign Language and closed captions was unforgettable. Inclusion was not treated as an afterthought—it was celebrated as high art.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80&fm=webp",
    imageAlt: "Portrait of Charlotte Uwera, deaf cinema advocate and creative artist"
  },
  {
    id: "jean-paul-habimana",
    name: "Jean-Paul Habimana",
    role: "Cinematographer & Lighting Designer",
    affiliation: "Adaptive Film Collective Rwanda",
    quote: "The adaptive equipment workshops opened doors I never imagined possible. We are not asking for sympathy; we are claiming our rightful place as creative technicians and industry leaders.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80&fm=webp",
    imageAlt: "Portrait of Jean-Paul Habimana, Rwandan cinematographer and lighting technician"
  }
];
