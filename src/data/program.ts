export interface ProgramEvent {
  id: string;
  time: string;
  day: string;
  title: string;
  category: "Screening" | "Masterclass" | "Panel" | "Gala";
  venue: string;
  speakerOrDirector?: string;
  description: string;
  accessibilityBadges: string[];
}

export const FESTIVAL_DAYS = [
  { id: "day-1", label: "Day 1 - Nov 19", theme: "Opening Night & Vernissage" },
  { id: "day-2", label: "Day 2 - Nov 20", theme: "Voices of Resilience & Labs" },
  { id: "day-3", label: "Day 3 - Nov 21", theme: "Documentary & Dialogue" },
  { id: "day-4", label: "Day 4 - Nov 22", theme: "Awards Gala & Closing" }
];

export const PROGRAM_EVENTS: ProgramEvent[] = [
  {
    id: "evt-1",
    day: "day-1",
    time: "17:30 - 21:00",
    title: "Opening Red Carpet & Premiere Screening",
    category: "Gala",
    venue: "Main Cinema Hall - Kigali Cultural Village",
    speakerOrDirector: "Opening Remarks by Festival Patrons",
    description: "Inaugural red carpet welcoming filmmakers, community delegates, and premiering the opening Rwandan narrative centerpiece.",
    accessibilityBadges: ["♿ Wheelchair Access", "🧏 Sign Language", "💬 Captions", "🎧 Audio Description"]
  },
  {
    id: "evt-2",
    day: "day-2",
    time: "09:30 - 12:00",
    title: "Masterclass: Accessible Cinematography & Sound Design",
    category: "Masterclass",
    venue: "Creative Arts Studio B",
    speakerOrDirector: "Led by Acclaimed East African Directors",
    description: "Hands-on workshop exploring tactile focus-pulling techniques, adaptive camera rigs, and immersive soundscapes.",
    accessibilityBadges: ["♿ Step-Free Access", "🧏 Live Sign Interpreter", "🧘 Quiet Space Nearby"]
  },
  {
    id: "evt-3",
    day: "day-2",
    time: "14:00 - 17:00",
    title: "International Short Films Showcase: Beyond the Lens",
    category: "Screening",
    venue: "Amphitheater 1",
    speakerOrDirector: "Curated Global Selection",
    description: "A showcase of 6 award-winning short films from Rwanda, Kenya, South Africa, and the global diaspora.",
    accessibilityBadges: ["💬 Multi-language Captions", "🧏 Sign Language", "🎧 Audio Described"]
  },
  {
    id: "evt-4",
    day: "day-3",
    time: "10:00 - 12:30",
    title: "Public Forum: Economic Inclusion in the Creative Industries",
    category: "Panel",
    venue: "Conference Pavilion",
    speakerOrDirector: "Panelists from MINUBUMWE, NCPD & Production Houses",
    description: "High-level dialogue on breaking hiring biases, tax incentives for accessible studios, and funding disabled creators.",
    accessibilityBadges: ["♿ Wheelchair Access", "🧏 Dual Sign Interpreters", "📝 Real-time Transcription"]
  },
  {
    id: "evt-5",
    day: "day-4",
    time: "18:00 - 22:00",
    title: "The Musanabandi Awards Gala & Celebration",
    category: "Gala",
    venue: "Grand Ballroom, Kigali",
    speakerOrDirector: "Jury & Distinguished Guests",
    description: "Bestowing the Golden Frame awards across 7 categories, honoring trailblazers in disability-inclusive cinema.",
    accessibilityBadges: ["♿ Full Accessibility", "🧏 Stage Sign Interpretation", "💬 Live Screen Captions"]
  }
];
