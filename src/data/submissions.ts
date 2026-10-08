export interface SubmissionTrack {
  id: string;
  number: string;
  title: string;
  kinyarwandaTitle: string;
  badge: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  formUrl: string;
  icon: string;
}

export interface FilmCategory {
  id: string;
  title: string;
  kinyarwanda: string;
  runtime: string;
  description: string;
}

export interface DeadlineItem {
  stage: string;
  date: string;
  fee: string;
  status: "active" | "upcoming" | "closed";
}

export const APPLICATION_FORMS = {
  film: "https://docs.google.com/forms/d/e/1FAIpQLSfutIxnepf0Vo5hpUH4DidkLtYaSqLG2WuK2w7CWMjlWxwKGg/viewform",
  photography: "https://docs.google.com/forms/d/e/1FAIpQLSdwvjW2QqzFZKQCN4Udlnwnb3K1A1fY_b5TxGixAfViTRqO0w/viewform",
  exhibition: "https://docs.google.com/forms/d/e/1FAIpQLSdphMtpCHPFx_MwnTnvjmQpKnHKSJTUuJ4v57DAF5DIuBn_Hw/viewform"
};

export const SUBMISSION_TRACKS: SubmissionTrack[] = [
  {
    id: "films",
    number: "01",
    title: "Submit Your Film",
    kinyarwandaTitle: "Ohereza Filime Yawe",
    badge: "Cinema Competition",
    description: "Accepting Short Films, Feature Films, and Documentary Films championing authentic disability representation and creative agency.",
    actionLabel: "Open Film Application Form",
    actionHref: APPLICATION_FORMS.film,
    formUrl: APPLICATION_FORMS.film,
    icon: "🎬"
  },
  {
    id: "exhibition",
    number: "02",
    title: "Apply for Exhibition",
    kinyarwandaTitle: "Saba Kumurika Ibikorwa",
    badge: "Visual & Cultural Arts",
    description: "A premier physical showcase for disabled visual artists, painters, sculptors, and multimedia exhibitors during the 3 festival days.",
    actionLabel: "Open Exhibition Form",
    actionHref: APPLICATION_FORMS.exhibition,
    formUrl: APPLICATION_FORMS.exhibition,
    icon: "🎨"
  },
  {
    id: "photography-workshop",
    number: "03",
    title: "Participate in Photography Workshop",
    kinyarwandaTitle: "Amahugurwa yo Gufotora",
    badge: "Capacity Building Lab",
    description: "Hands-on masterclass empowering Rwandan youth with disabilities with adaptive cameras, visual composition, and digital storytelling skills.",
    actionLabel: "Open Workshop Form",
    actionHref: APPLICATION_FORMS.photography,
    formUrl: APPLICATION_FORMS.photography,
    icon: "📷"
  }
];

export const FILM_CATEGORIES: FilmCategory[] = [
  {
    id: "short-film",
    title: "Short Film",
    kinyarwanda: "Filime Ngufi",
    runtime: "Up to 40 minutes",
    description: "Narrative fiction, live-action drama, comedy, and experimental shorts with authentic disability representation on or behind the camera."
  },
  {
    id: "feature-film",
    title: "Feature Film",
    kinyarwanda: "Filime Ndende",
    runtime: "Over 40 minutes",
    description: "Full-length cinematic fiction exploring deep character journeys, human dignity, romance, and societal transformation."
  },
  {
    id: "documentary-film",
    title: "Documentary Film",
    kinyarwanda: "Filime Mbarankuru",
    runtime: "Short & Feature Length",
    description: "Compelling non-fiction illuminating disability rights, cultural realities, everyday triumphs, and lived experiences in Rwanda and beyond."
  }
];

export const SUBMISSION_DEADLINES: DeadlineItem[] = [
  { stage: "Call for Applications Opens", date: "October 1, 2026", fee: "Free / Open", status: "active" },
  { stage: "Final Application Deadline (All 3 Tracks)", date: "November 20, 2026", fee: "100% Waived for PWDs", status: "active" },
  { stage: "Official Selection & Invites Announcement", date: "December 1, 2026", fee: "N/A", status: "upcoming" },
  { stage: "MUSANABANDI Festival Dates", date: "December 15 – 17, 2026", fee: "Kigali, Rwanda", status: "upcoming" }
];

export const SUBMISSION_REQUIREMENTS = [
  "All film submissions must include English or French subtitles/closed captions.",
  "Rwandan Sign Language (RSL) and Audio Description tracks are enthusiastically supported.",
  "Exhibition pieces must be ready for safe physical mounting at Kigali Cultural Village.",
  "Workshop applicants must be Rwandan youth interested in visual arts and disability advocacy.",
  "Submission and workshop fees are 100% waived for creators with disabilities."
];
