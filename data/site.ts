import {
  Bot,
  Code2,
  Github,
  Linkedin,
  Mail,
  MessagesSquare,
  Waypoints
} from "lucide-react";

export const personalInfo = {
  name: "Daksh Yadav",
  firstName: "Daksh",
  title: "Full Stack Web Developer & AI Specialist",
  location: "Gurugram, India",
  email: "022dakshy@gmail.com",
  github: "https://github.com/emphor11",
  linkedin: "https://www.linkedin.com/in/daksh-yadav-04917730a/",
  heroIntro:
    "I build premium web products and AI-powered systems that solve difficult problems without enterprise-sized budgets.",
  about:
    "I'm Daksh Yadav, a 20-year-old CS student from Gurugram with 2 years of experience building full-stack and AI-powered applications. What drives me is simple — take a hard, expensive problem and solve it with pure skill. My project JuriSight does what enterprise legal software charges thousands for, built from scratch at zero cost. I work at the intersection of modern web development and AI integration. I don't just learn tech — I ship things with it. Currently open to internships, freelance work, and full-time roles."
};

export const services = [
  {
    title: "Custom Web Applications",
    description:
      "Full-stack apps built for performance, clarity, and product fit, from landing flows to secure dashboards.",
    icon: Code2
  },
  {
    title: "AI Integration",
    description:
      "LLM features, RAG workflows, and practical AI systems integrated into real products without hype-driven complexity.",
    icon: Bot
  },
  {
    title: "REST API Development",
    description:
      "Clean backend architecture and reliable APIs for product teams that need speed now and maintainability later.",
    icon: Waypoints
  },
  {
    title: "LLM-Powered Tools",
    description:
      "Internal tools, assistants, and automation products that reduce manual work and create measurable leverage.",
    icon: MessagesSquare
  }
];

export const socialLinks = [
  { name: "GitHub", href: personalInfo.github, icon: Github },
  { name: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  { name: "Email", href: `mailto:${personalInfo.email}`, icon: Mail }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];
