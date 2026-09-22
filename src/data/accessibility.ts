export interface AccessibilityFeature {
  title: string;
  description: string;
  icon: string;
}

export const ACCESSIBILITY_FEATURES: AccessibilityFeature[] = [
  {
    title: "100% Step-Free Venues",
    description: "All screening halls, workshop spaces, dining areas, and restrooms feature gentle ramps, level thresholds, and wide automated doors.",
    icon: "wheelchair"
  },
  {
    title: "Rwandan Sign Language (RSL) Interpreters",
    description: "Certified RSL interpreters are stationed at all major screenings, keynotes, Q&A sessions, and info desks throughout the festival.",
    icon: "hands"
  },
  {
    title: "Open & Closed Captioning",
    description: "Every single film in the official selection is projected with high-contrast, synchronised captions for deaf and hard-of-hearing audiences.",
    icon: "captions"
  },
  {
    title: "Live Audio Description",
    description: "Wireless receiver headsets provide rich real-time audio description narrating visual actions, costumes, and scene transitions.",
    icon: "headphones"
  },
  {
    title: "Sensory-Friendly Quiet Lounges",
    description: "Dedicated calm spaces with soft lighting and reduced noise for neurodivergent guests or attendees needing sensory decompression.",
    icon: "heart"
  },
  {
    title: "Accessible Kigali Transit Coordination",
    description: "Partnership with accessible shuttle services connecting key Kigali transit points to the festival grounds.",
    icon: "car"
  }
];

export const VENUE_INFO = {
  mainVenue: "Kigali Cultural Village (KCV)",
  address: "KN 3 Ave, Kigali, Rwanda",
  parking: "Dedicated accessible parking directly adjacent to the main pavilion entrance",
  assistanceDesk: "Located immediately inside Gate 1 with tactile floor guides",
  emergencyContact: "+250 788 123 456"
};
