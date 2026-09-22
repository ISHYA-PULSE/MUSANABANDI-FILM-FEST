export interface SubmissionCategory {
  id: string;
  title: string;
  runtime: string;
  description: string;
  eligibility: string;
}

export interface DeadlineItem {
  stage: string;
  date: string;
  fee: string;
  status: "active" | "upcoming" | "closed";
}

export const SUBMISSION_CATEGORIES: SubmissionCategory[] = [
  {
    id: "documentary",
    title: "Documentary Feature & Short",
    runtime: "Shorts: < 40 mins | Features: > 40 mins",
    description: "Compelling non-fiction illuminating disability rights, cultural realities, resilience, and personal triumphs.",
    eligibility: "Produced or directed by, or deeply centering persons with disabilities."
  },
  {
    id: "narrative",
    title: "Narrative Fiction",
    runtime: "Shorts: < 30 mins | Features: > 60 mins",
    description: "Creative storytelling spanning drama, comedy, sci-fi, or romance with authentic disability representation.",
    eligibility: "Key cast or creative department lead must identify as a person with a disability."
  },
  {
    id: "animation",
    title: "Animation & Experimental",
    runtime: "Up to 25 mins",
    description: "Visual artworks, 2D/3D animation, stop-motion, and avant-garde cinematic expressions.",
    eligibility: "Open to international and Rwandan creators exploring themes of perception and ability."
  },
  {
    id: "rwandan-emerging",
    title: "Rwandan Emerging Filmmakers",
    runtime: "Under 20 mins",
    description: "Dedicated competitive strand for first- and second-time Rwandan creators with disabilities.",
    eligibility: "Exclusively for Rwandan nationals or residents."
  }
];

export const SUBMISSION_DEADLINES: DeadlineItem[] = [
  { stage: "Early Bird Deadline", date: "May 30, 2026", fee: "Free / Waived", status: "active" },
  { stage: "Regular Deadline", date: "July 31, 2026", fee: "Free for PWDs", status: "upcoming" },
  { stage: "Late Deadline", date: "September 15, 2026", fee: "Free for PWDs", status: "upcoming" },
  { stage: "Official Selection Announced", date: "October 10, 2026", fee: "N/A", status: "upcoming" }
];

export const SUBMISSION_REQUIREMENTS = [
  "All entries must include English or French subtitles/closed captions.",
  "Descriptive audio tracks and Rwandan Sign Language (RSL) versions are enthusiastically welcomed.",
  "Films completed after January 1, 2024 are eligible.",
  "Submission fees are 100% waived for creators who identify as persons with disabilities."
];
