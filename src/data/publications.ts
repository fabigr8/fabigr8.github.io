// Publication list. Set `featured: true` on exactly one entry to make it the
// spotlight/hero on the home page. Author name is bolded automatically.

export interface PubLink {
  label: string; // e.g. "PDF", "DOI", "URL"
  url: string;
}

export interface Publication {
  title: string;
  authors: string[];
  year: number;
  venue: string;
  links: PubLink[];
  featured?: boolean;
}

/** Rendered in bold wherever it appears in an author list. */
export const AUTHOR_NAME = "Fabian Gwinner";

export const publications: Publication[] = [
  {
    title:
      "Context-Based Subvariant Discovery for Process Mining via Machine Learning",
    authors: ["Fabian Gwinner", "Myriam Schaschek", "Axel Winkelmann"],
    year: 2025,
    venue: "Business & Information Systems Engineering (BISE)",
    featured: true,
    links: [
      {
        label: "PDF",
        url: "https://link.springer.com/content/pdf/10.1007/s12599-025-00946-2.pdf",
      },
      { label: "DOI", url: "https://doi.org/10.1007/s12599-025-00946-2" },
    ],
  },
  {
    title:
      "A Taxonomy of Artificial Intelligence for Process Mining Enhancement",
    authors: ["Nicolas Neis", "Fabian Gwinner", "Carolin Haueisen"],
    year: 2024,
    venue: "PACIS 2024 Proceedings",
    links: [
      {
        label: "URL",
        url: "https://aisel.aisnet.org/pacis2024/track09_digittrans/track09_digittrans/10/",
      },
    ],
  },
  {
    title:
      "Comparing Expert Systems and Their Explainability Through Similarity",
    authors: ["Fabian Gwinner", "Christoph Tomitza", "Axel Winkelmann"],
    year: 2024,
    venue: "Decision Support Systems",
    links: [
      {
        label: "PDF",
        url: "https://www.sciencedirect.com/science/article/pii/S0167923624000812/pdfft?md5=26e3bab8943b94c29831fea4d22af788&pid=1-s2.0-S0167923624000812-main.pdf",
      },
      { label: "DOI", url: "https://doi.org/10.1016/j.dss.2024.114248" },
    ],
  },
  {
    title:
      "From Black Box to Glass Box: Evaluating Faithfulness of Process Predictions with GCNNs",
    authors: [
      "Myriam Schaschek",
      "Fabian Gwinner",
      "Benedikt Hein",
      "Axel Winkelmann",
    ],
    year: 2023,
    venue:
      "Machine Learning and Principles and Practice of Knowledge Discovery in Databases. ECML PKDD 2023.\nCommunications in Computer and Information Science, vol 2135. Springer, Cham.",
    links: [
      { label: "PDF", url: "http://xkdd2023.isti.cnr.it/papers/425.pdf" },
      { label: "URL", url: "https://link.springer.com/chapter/10.1007/978-3-031-74633-8_15" }
    ],
  },
  {
    title: "Towards Explainable Occupational Fraud Detection",
    authors: [
      "Julian Tritscher",
      "Daniel Schlör",
      "Fabian Gwinner",
      "Anna Krause",
      "Andreas Hotho",
    ],
    year: 2023,
    venue:
      "Machine Learning and Principles and Practice of Knowledge Discovery in Databases. ECML PKDD 2022.\n Communications in Computer and Information Science, vol 1753. Springer, Cham.",
    links: [{ label: "DOI", url: "https://doi.org/10.1007/978-3-031-23633-4_7" }],
  },
  {
    title: "Open ERP System Data For Occupational Fraud Detection",
    authors: [
      "Julian Tritscher",
      "Fabian Gwinner",
      "Daniel Schlör",
      "Anna Krause",
      "Andreas Hotho",
    ],
    year: 2022,
    venue: "arXiv preprint",
    links: [
      { label: "DOI", url: "https://doi.org/10.48550/arXiv.2206.04460" },
      { label: "URL", url: "http://arxiv.org/abs/2206.04460" },
    ],
  },
  {
    title:
      "Security Implications of Consortium Blockchains: The Case of Ethereum Networks",
    authors: [
      "Adrian Hofmann",
      "Fabian Gwinner",
      "Axel Winkelmann",
      "Christian Janiesch",
    ],
    year: 2021,
    venue: "JIPITEC",
    links: [
      { label: "URL", url: "https://www.jipitec.eu/issues/jipitec-12-4-2021/5453" },
    ],
  },
  {
    title: "A Financial Game with Opportunities for Fraud",
    authors: [
      "Julian Tritscher",
      "Anna Krause",
      "Daniel Schlör",
      "Fabian Gwinner",
      "Sebastian Von Mammen",
      "Andreas Hotho",
    ],
    year: 2021,
    venue: "2021 IEEE Conference on Games (CoG)",
    links: [{ label: "DOI", url: "https://doi.org/10.1109/CoG52621.2021.9619070" }],
  },
  {
    title: "A Meta-Model for Real-Time Fraud Detection in ERP Systems",
    authors: ["Anna Fuchs", "Kevin Fuchs", "Fabian Gwinner", "Axel Winkelmann"],
    year: 2021,
    venue: "Hawaii International Conference on System Sciences (HICSS-54)",
    links: [
      {
        label: "URL",
        url: "https://aisel.aisnet.org/hicss-54/st/cyber_threat_intelligence/2",
      },
    ],
  },
  {
    title:
      "An Industry-Agnostic Approach for the Prediction of Return Shipments",
    authors: ["Adrian Hofmann", "Fabian Gwinner", "Kevin Fuchs", "Axel Winkelmann"],
    year: 2020,
    venue: "AMCIS 2020 Proceedings",
    links: [
      {
        label: "URL",
        url: "https://aisel.aisnet.org/amcis2020/data_science_analytics_for_decision_support/data_science_analytics_for_decision_support/32",
      },
    ],
  },
];
