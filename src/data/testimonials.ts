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
    role: "Youth Director & Adaptive Storyteller",
    affiliation: "Kigali Inclusive Cinema Lab",
    quote: "Directing my first short film with an adaptive camera rig in Kigali was pure joy. MUSANABANDI showed me and my peers that our stories are powerful, vibrant, and deserve the biggest cinema screen.",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=300&h=300&q=80&fm=webp",
    imageAlt: "Portrait of Aimé Mugisha, a smiling young Black filmmaker from Kigali"
  },
  {
    id: "charlotte-uwera",
    name: "Charlotte Uwera",
    role: "Deaf Performing Artist & Screenwriter",
    affiliation: "Rwandan Sign Language Youth Arts",
    quote: "Seeing the audience light up as our film was projected with full Rwandan Sign Language and closed captions was pure magic. We are smiling because we are finally leading our own cultural narrative.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&h=300&q=80&fm=webp",
    imageAlt: "Portrait of Charlotte Uwera, a radiant smiling young Black woman artist and deaf advocate"
  },
  {
    id: "jean-paul-habimana",
    name: "Jean-Paul Habimana",
    role: "Cinematographer & Lighting Designer",
    affiliation: "Adaptive Film Collective Rwanda",
    quote: "The energy in the workshop was electric. We laughed, we filmed, and we broke every barrier in the room. This festival celebrates our creative joy, not our limitations.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80&fm=webp",
    imageAlt: "Portrait of Jean-Paul Habimana, a joyful young Black cinematographer"
  }
];
