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
    image: "/images/voices-speaker-dignity.jpg",
    imageAlt: "Portrait of Aimé Mugisha, a smiling Rwandan advocate and storyteller in Kigali"
  },
  {
    id: "charlotte-uwera",
    name: "Charlotte Uwera",
    role: "Deaf Performing Artist & Screenwriter",
    affiliation: "Rwandan Sign Language Youth Arts",
    quote: "Seeing the audience light up as our film was projected with full Rwandan Sign Language and closed captions was pure magic. We are smiling because we are finally leading our own cultural narrative.",
    image: "/images/about-joyful-audience.jpg",
    imageAlt: "Portrait of Charlotte Uwera, a radiant smiling young Rwandan woman artist and advocate"
  },
  {
    id: "jean-paul-habimana",
    name: "Jean-Paul Habimana",
    role: "Cinematographer & Lighting Designer",
    affiliation: "Adaptive Film Collective Rwanda",
    quote: "The energy in the workshop was electric. We laughed, we filmed, and we broke every barrier in the room. This festival celebrates our creative joy, not our limitations.",
    image: "/images/hero-cinematographer-interview.jpg",
    imageAlt: "Portrait of Jean-Paul Habimana, a joyful Rwandan cinematographer operating a cinema camera"
  }
];
