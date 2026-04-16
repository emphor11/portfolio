export type ProjectCategory = "All" | "Web" | "AI";

export type Project = {
  name: string;
  slug: string;
  description: string;
  learnings: string;
  impact: string;
  techStack: string[];
  github: string;
  liveUrl: string;
  category: Exclude<ProjectCategory, "All">;
  image: string;
  imageClassName?: string;
};

export const projectFilters: ProjectCategory[] = ["All", "Web", "AI"];

export const projects: Project[] = [
  {
    name: "Jurisight",
    slug: "jurisight",
    description:
      "Built an AI-powered contract review and verification platform that analyzes legal agreements, extracts clauses, identifies risks and missing protections, and supports deeper local verification for higher-confidence review.",
    learnings:
      "Learned document parsing and chunking, retrieval-augmented legal analysis, hybrid search design, local and hosted AI workflow separation, evaluation-driven review scoring, and building a production-style full-stack legal intelligence system.",
    impact:
      "Delivered a two-stage legal AI review platform that combines fast hosted contract analysis with deeper local verification, demonstrating strong skills in full-stack product design, AI pipeline architecture, retrieval systems, and legal-tech workflow engineering.",
    techStack: [
      "React",
      "JavaScript",
      "FastAPI",
      "Python",
      "Groq",
      "Ollama",
      "BM25",
      "Qdrant",
      "Supabase",
      "Render",
      "Vercel"
    ],
    github: "https://github.com/emphor11/RagForge",
    liveUrl: "https://rag-forge-ntv9y7zpc-emphor11s-projects.vercel.app/",
    category: "AI",
    image: "/images/projects/jurisight.png",
    imageClassName: "object-left-top"
  },
  {
    name: "Teen Talks",
    slug: "teen-talks",
    description:
      "Built a minimal, interaction-focused social media app with posts, chat, and user profiles, emphasizing scalable UI and clean state management.",
    learnings:
      "Learned centralized state handling, production edge-case management, UI/UX impact on engagement, and cloud vs local debugging.",
    impact:
      "Delivered a production-ready full-stack app, improved architecture and deployment skills, and solved real-world production issues.",
    techStack: [
      "React",
      "Tailwind",
      "Context API",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Cloudinary",
      "Render",
      "Vercel"
    ],
    github: "https://github.com/emphor11/Teen_Talks",
    liveUrl: "https://teen-talks-4e5ig2sgm-emphor11s-projects.vercel.app/",
    category: "Web",
    image: "/images/projects/teen-talks.png",
    imageClassName: "object-top"
  },
  {
    name: "E-Commerce",
    slug: "e-commerce",
    description:
      "Built a full-stack e-commerce platform with a responsive, intuitive UI, focusing on fast product discovery, filtering, and scalable frontend architecture.",
    learnings:
      "Learned frontend performance optimization, efficient product filtering, React component reusability, and full-stack API-database integration.",
    impact:
      "Delivered a scalable, production-ready e-commerce app, strengthening skills in architecture, performance, and maintainable UI design.",
    techStack: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    github: "https://github.com/emphor11/E-Commerce",
    liveUrl: "https://e-commerce-frontend-omega-pied.vercel.app/",
    category: "Web",
    image: "/images/projects/e-commerce.png",
    imageClassName: "object-center-top"
  }
];
