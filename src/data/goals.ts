export interface FestivalGoal {
  number: number;
  title: string;
  summary: string;
  category: "Advocacy" | "Empowerment" | "Industry" | "Community";
}

export const FESTIVAL_GOALS: FestivalGoal[] = [
  {
    number: 1,
    title: "Challenge Stigma and Stereotypes",
    summary: "Dismantle outdated perceptions surrounding disability through unapologetic, authentic, and dignified cinema narratives.",
    category: "Advocacy"
  },
  {
    number: 2,
    title: "Platform for Self-Told Stories",
    summary: "Ensure persons with disabilities speak for themselves, authoring and directing their lived truths without external filtering.",
    category: "Advocacy"
  },
  {
    number: 3,
    title: "Discover and Develop Creative Talent",
    summary: "Scout emerging talent across Rwanda and provide structured incubation in screenwriting, cinematography, acting, and directing.",
    category: "Empowerment"
  },
  {
    number: 4,
    title: "Career & Entrepreneurship Pathways",
    summary: "Build tangible employment pipelines connecting disabled creatives with production houses, broadcast networks, and international crews.",
    category: "Industry"
  },
  {
    number: 5,
    title: "Promote Truly Accessible Cinema",
    summary: "Establish standard-setting screening environments with closed captions, Rwandan Sign Language, audio description, and barrier-free venues.",
    category: "Industry"
  },
  {
    number: 6,
    title: "Foster Inclusive Community Dialogue",
    summary: "Curate high-impact panel discussions uniting policymakers, educators, families, and artists to shift cultural mindsets.",
    category: "Community"
  },
  {
    number: 7,
    title: "Celebrate Creative Achievements",
    summary: "Honor excellence through prestigious juried awards, recognizing pioneering contributions to disability-inclusive culture.",
    category: "Advocacy"
  },
  {
    number: 8,
    title: "Sustain an Annual Creative Institution",
    summary: "Build an enduring, globally connected Rwandan cultural platform that nurtures inclusive filmmaking year after year.",
    category: "Industry"
  }
];
