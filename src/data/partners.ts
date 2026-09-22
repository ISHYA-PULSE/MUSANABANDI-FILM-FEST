export interface PartnerTier {
  name: string;
  description: string;
  benefits: string[];
}

export const PARTNER_TIERS: PartnerTier[] = [
  {
    name: "Premier Cultural Patron",
    description: "Lead institutional or corporate backing anchoring the entire festival vision.",
    benefits: [
      "Top-tier naming rights for the Grand Awards Gala",
      "Keynote remarks at the Opening Ceremony",
      "Branding across all international press releases and film trailers",
      "20 VIP Festival Passes with reserved priority seating"
    ]
  },
  {
    name: "Creative Inclusion Partner",
    description: "Directly financing screenwriting labs, production grants, and accessible equipment.",
    benefits: [
      "Naming rights for one masterclass category or screening strand",
      "Prominent logo feature across venue banners and website",
      "10 VIP Festival Passes",
      "Dedicated social media highlight feature"
    ]
  },
  {
    name: "Community Ally",
    description: "Supporting community transport, sign language interpretation, and youth access.",
    benefits: [
      "Logo inclusion in the official festival guide and website footer",
      "4 Festival Passes",
      "Acknowledgment in the Opening and Closing ceremonies"
    ]
  }
];

export const PARTNER_LOGOS = [
  { name: "Rwanda Film Office", category: "Institutional" },
  { name: "National Council of Persons with Disabilities", category: "Institutional" },
  { name: "Ishya Pulse", category: "Founding Partner" },
  { name: "Kigali Creative Arts Alliance", category: "Creative" },
  { name: "Inclusive Cinema Network", category: "International" }
];
