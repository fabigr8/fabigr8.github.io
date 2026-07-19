// Central site + author metadata. Edit these first when personalizing.

export interface SocialLink {
  label: string;
  href: string;
  /** inline SVG path data (24x24 viewBox) rendered by SocialIcons. */
  icon: string;
}

export const site = {
  name: "Fabian Gwinner",
  title: "AI Research Engineer",
  affiliation: "Capgemini",
  /** One-line research tagline shown under the name in the hero. */
  tagline:
    "Building social cognitive computing systems with machine learning, deep learning, and explainable AI.",
  /** Longer intro paragraph used on the home page + CV. */
  intro:
    "I research how machine learning and explainable AI can support human decision-making — from process mining and anomaly detection to occupational fraud. My work sits at the intersection of information systems engineering and trustworthy, interpretable models.",
  url: "https://fabigr8.github.io",
  avatar: "/FG_profile.png",
  /** Optional CV download; drop a file at /public/cv.pdf to enable. */
  cvPdf: "/cv.pdf",
};

// NOTE: verify/replace these URLs — GitHub is known; the rest are best-guess
// placeholders based on the current site. Update hrefs as needed.
export const socials: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:fabian.gwinner@uni-wuerzburg.de", // TODO: confirm address
    icon: "M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.5 7.8 5.6L19.8 6H4.2ZM20 7.9l-7.4 5.3a1 1 0 0 1-1.2 0L4 7.9v9.6c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.9Z",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=REPLACE_ME", // TODO
    icon: "M12 2 1 8l11 6 9-4.9V17h2V8L12 2ZM4 12.6v3.2C4 18.1 7.6 20 12 20s8-1.9 8-4.2v-3.2l-8 4.4-8-4.4Z",
  },
  {
    label: "Semantic Scholar",
    href: "https://www.semanticscholar.org/author/F.-Gwinner/1834376387",
    icon: "M24 8.609c-.848.536-1.436.83-2.146 1.245-4.152 2.509-8.15 5.295-11.247 8.981l-1.488 1.817-4.568-7.268c1.021.814 3.564 3.098 4.603 3.599l3.356-2.526c2.336-1.644 8.946-5.226 11.49-5.848ZM8.046 15.201c.346.277.692.537.969.744.761-3.668.121-7.613-1.886-11.039 3.374-.052 6.731-.087 10.105-.139a14.794 14.794 0 0 1 1.298 5.295c.294-.156.588-.294.883-.433-.104-1.868-.641-3.91-1.662-6.263-4.602-.018-9.188-.018-13.79-.018 2.993 3.547 4.36 7.839 4.083 11.853Zm-.623-.484c.087.086.191.155.277.225-.138-3.409-1.419-6.887-3.824-9.881H1.73c3.098 2.855 4.984 6.299 5.693 9.656Zm-.744-.658c.104.087.208.173.329.277-.9-2.526-2.492-5.018-4.741-7.198H0c2.89 2.076 5.122 4.481 6.679 6.921Z",
  },
  {
    label: "DBLP",
    href: "https://dblp.org/pid/270/7717",
    icon: "M3.075.002c-.096.013-.154.092-.094.31L4.97 7.73 3.1 8.6s-.56.26-.4.85l2.45 9.159s.16.59.72.33l6.169-2.869 1.3-.61s.52-.24.42-.79l-.01-.06-1.13-4.22-.658-2.45-.672-2.49v-.04s-.16-.59-.84-1L3.5.141s-.265-.16-.425-.139zM18.324 5.03a.724.724 0 0 0-.193.06l-5.602 2.6.862 3.2 1.09 4.08.01.06c.05.47-.411.79-.411.79l-1.88.87.5 1.89.04.1c.07.17.28.6.81.91l6.95 4.269s.68.41.52-.17l-1.981-7.4 1.861-.86s.56-.26.4-.85L18.85 5.42s-.116-.452-.526-.39z",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Fabian-Gwinner", // TODO: confirm
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm2.6 13.7-1.9-2.9h-1.2v2.9H9.9V8.3h3c1.7 0 2.8.9 2.8 2.4 0 1.1-.6 1.8-1.5 2.1l2.1 2.9h-1.7Zm-1.8-6.1h-1.3v2.2h1.3c.9 0 1.4-.4 1.4-1.1s-.5-1.1-1.4-1.1Z",
  },
  {
    label: "GitHub",
    href: "https://github.com/fabigr8",
    icon: "M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fabian-gwinner", // TODO: confirm
    icon: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.97-1.8-2.97-1.8 0-2.08 1.4-2.08 2.87V21h-4V9Z",
  },
];
