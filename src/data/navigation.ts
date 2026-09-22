export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Submit Film", href: "/submit", badge: "Open" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Partners", href: "/partner" }
];

export const SOCIAL_LINKS = [
  { name: "Twitter / X", href: "https://x.com/musanabandifest", icon: "twitter" },
  { name: "Instagram", href: "https://instagram.com/musanabandifilmfest", icon: "instagram" },
  { name: "YouTube", href: "https://youtube.com/@musanabandifilmfest", icon: "youtube" },
  { name: "LinkedIn", href: "https://linkedin.com/company/musanabandi-film-festival", icon: "linkedin" }
];
