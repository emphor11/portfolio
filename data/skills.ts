import {
  Blocks,
  Bot,
  Braces,
  BrainCircuit,
  Database,
  FileCode2,
  GitBranch,
  LayoutDashboard,
  ServerCog,
  Sparkles
} from "lucide-react";

export const rotatingTaglines = [
  "I build web apps",
  "I integrate AI into products",
  "I turn ideas into reality"
];

export const skillGroups = [
  {
    title: "Web Development",
    description: "Modern frontend and backend engineering for fast, resilient products.",
    skills: [
      { name: "React.js", icon: LayoutDashboard },
      { name: "Next.js", icon: FileCode2 },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Node.js", icon: ServerCog },
      { name: "Express.js", icon: Database },
      { name: "FastAPI", icon: Sparkles },
      { name: "REST API Design", icon: GitBranch }
    ]
  },
  {
    title: "AI / ML",
    description: "Production-focused AI systems that turn models into useful software.",
    skills: [
      { name: "RAG Pipelines", icon: Bot },
      { name: "OpenAI API Integration", icon: Sparkles },
      { name: "Chatbot Development", icon: BrainCircuit },
      { name: "Prompt Engineering", icon: Braces },
      { name: "Machine Learning (Python)", icon: Database },
      { name: "Vector Retrieval", icon: Blocks }
    ]
  }
] as const;

export const toolsAndPlatforms = ["Git & GitHub", "Vercel", "Render"];
