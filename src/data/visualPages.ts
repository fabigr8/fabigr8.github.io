// Visual Pages — standalone scrollytelling / data-viz pieces. These are
// usually hosted as separate GitHub Pages sites and linked from here.
// Add real entries with status: "live" as pieces get published; the
// scaffold to build one on is at src/pages/scrolly.astro.

export interface VisualPage {
  title: string;
  description: string;
  url: string;
  tag: string;
  status: "live" | "coming-soon";
  date?: string; // e.g. "12 Jul 2026"
  thumbnail?: string; // path under /public
}

export const visualPages: VisualPage[] = [
  {
    title: "Explanation Similarity Analysis",
    description: "A scrollytelling piece showing how to analyze and compare explanations of machine learning models.",
    url: "",
    tag: "scrollytelling",
    status: "live",
    date: "19 Jul 2026",   
    thumbnail: "/images/ST-thumb1.png",
  },
  {
    title: "Coming soon",
    description: "A scrollytelling piece is in the works — check back here once it's live.",
    url: "",
    tag: "visualization",
    status: "coming-soon",
  },
  {
    title: "Coming soon",
    description: "More interactive research pieces are on the way.",
    url: "",
    tag: "data story",
    status: "coming-soon",
  },
];
