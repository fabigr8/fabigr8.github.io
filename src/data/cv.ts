// CV / profile content. Seeded from the current site; items marked TODO need
// real dates or details. Keep entries newest-first within each section.

export interface TimelineItem {
  period: string; // e.g. "2020 – present"
  title: string;
  org: string;
  detail?: string;
}

export interface ResearchProject {
  name: string;
  summary: string;
  funding?: string;
}

export const bio = [
  "I am an AI Research Engineer at Capgemini's Global AI Futures Lab in Munich, working at the intersection of applied machine learning research and real-world AI systems. My work spans Agentic AI and AI for R&D, Pharma, and Biotech, building on my recent role as a Senior Data Scientist delivering agentic AI systems for pharmaceutical partners including Roche and Bayer, and scalable computational drug discovery pipelines. In the Lab, I explore emerging research directions and frontier AI challenges through exploratory work and hands-on prototyping.",
  "I hold a doctoral degree in information systems from the University of Würzburg, with a research focus on robust and explainable AI, with applied work in anomaly detection and industrial process analysis. I have co-organized a Decision Support Systems reading group and an Information Systems Engineering group.",
  "Before my PhD, I worked as a Senior Consultant - supply chain management, gaining important industry experience, software development skills, and consulting expertise.",
];

export const researchInterests = [
  "Explainable AI (XAI)",
  "Decision Support Systems",
  "Deep Learning",
  "Graph Machine Learning",
  "Information Systems Engineering",
];

export const projects: ResearchProject[] = [
  {
    name: "DeepScan",
    summary:
      "Explainability of algorithms in anomaly detection — making detection models transparent and auditable.",
    funding: "BMBF (01IS18045A)",
  },
  {
    name: "PipeAI",
    summary:
      "Applying explainable AI to industrial processes to improve trust and interpretability in production settings.",
    funding: "Bayerisches StMWi (DIK0143/02)",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2019 – 2026",
    title: "Dissertation",
    org: "Julius-Maximilians-Universität Würzburg",
    detail:
      "Thesis: “Advances in Machine Learning Methods for Context-Aware Insight, Trustworthiness, and Robustness”.",
  },
  {
    period: "2012 – 2014",
    title: "M.Sc. Information Systems",
    org: "Julius-Maximilians-Universität Würzburg",
    // detail: "Grade: 2.0 — Thesis: 1.3",
  },
  {
    period: "2010 – 2012",
    title: "B.Sc. Information Systems",
    org: "Duale Hochschule Mosbach (DHBW)",
    // detail: "Grade: 2.0 — Thesis: 1.2",
  },
  {
    period: "2005 – 2008",
    title: "Abitur — Specialization: Information Technology",
    org: "Technisches Gymnasium Schwäbisch Hall",
  },
];

export const experience: TimelineItem[] = [
    {
    period: "04/2026 – present",
    title: "AI Research Engineer",
    org: "Capgemini - Global AI Futures Lab, Munich",
    detail:
      "Research and development of AI systems for industrial applications, including autonomous decision-making and optimization in complex environments.",
  },
  {
    period: "03/2024 – present",
    title: "Senior Data Scientist — Life-Sciences",
    org: "Capgemini Engineering, Munich",
    detail:
      "Delivered AI solutions for life-sciences customers, including agentic AI systems for Roche and Bayer, scalable computational drug discovery pipelines.",
  },
  {
    period: "2018 – 2023",
    title: "Research Assistant",
    org: "Julius-Maximilians-Universität Würzburg",
    detail:
      "Research in applied Machine Learning, Explainable AI (XAI), and Graph ML. Research projects: “DeepScan” (anomaly and outlier detection) and “PipeAI” (prediction of industrial processes through XAI).",
  },
  {
    period: "2021 – 2022",
    title: "Lecturer Operations Research (Part-time)",
    org: "DHBW Mosbach",
    detail: "Taught two OR courses, ~30 students each, 28 lectures and 28 tutorial sessions.",
  },
  {
    period: "2014 – 2018",
    title: "Senior Consultant SCM",
    org: "Consilio IT-Solutions GmbH, Munich",
    detail: "Optimization for Supply chain and manufacturing planning.",
  },
  {
    period: "Feb - Oct 2014",
    title: "Working Student (Part-time)",
    org: "FIS GmbH, Grafenrheinfeld",
    detail: "Application development for Earned-Value-Analysis, Masterthesis.",
  },
  {
    period: "2011 – 2014",
    title: "Software Developer (Part-time)",
    org: "Freelancer, Remote",
    detail: "Java web applications with Struts 2, Spring, EJB.",
  },
  {
    period: "2009 – 2012",
    title: "Dual Study Program",
    org: "T-Systems GmbH, Heidelberg/Darmstadt",
    detail: "ITSM Business Analyst and Application Development.",
  },
];

export interface ServiceItem {
  label: string;
  url?: string;
}

export const service: ServiceItem[] = [
  {
    label: "Co-organizer — Decision Support Systems reading group",
    url: "https://balsam-crocus-636.notion.site/DSSML-PRG-JMU-721103ee96da4476becf1fd0ae66c91d",
  },
  {
    label: "Co-organizer — Information Systems Engineering group",
    url: "https://jmu-iseg.github.io/",
  },
];
