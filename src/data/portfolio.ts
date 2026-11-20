import {
  AppWindow,
  BellRing,
  Briefcase,
  Cloud,
  CodeXml,
  Database,
  Globe,
  Layers,
  Mail,
  MapPin,
  Phone,
  Server,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";
import { siDocker, siFastapi, siNextdotjs, siPostgresql, siPython, siRedis } from "simple-icons";

// All editable site content lives here.

export const profile = {
  firstName: "Anugrah",
  lastName: "M V",
  role: "Associate Full Stack Engineer",
  roleLines: ["Associate", "Full Stack", "Engineer"],
  signature: "Anugrah m v",
  bio: "At SnapShare.ai, I plan system architecture and build backend services with FastAPI, PostgreSQL and Redis, running on Docker and AWS.",
  email: "amvanugrah@gmail.com",
  phone: "+91 7356718496",
  location: "India",
  website: "github.com/Anugrxh",
  websiteUrl: "https://github.com/Anugrxh",
  linkedinUrl: "https://www.linkedin.com/in/anugrah-m-v-187203271",
  githubUrl: "https://github.com/Anugrxh",
};

export const topBar = {
  left: "Portfolio",
  right: "Available for freelance",
};

export const hero = {
  word: profile.firstName,
  disciplines: "Backend / Cloud",
  disciplineLabels: ["System Architecture", "Backend & APIs", "Cloud Infrastructure"],
  quote: "I plan and build backend systems that are reliable, efficient and built to scale.",
  badgeText: "ARCHITECTING • BUILDING • SCALING • ",
};

export type Stat = { icon: LucideIcon; value: string; label: [string, string] };

export const stats: Stat[] = [
  { icon: Briefcase, value: "1.5+", label: ["Years", "Experience"] },
  { icon: TrendingDown, value: "60%", label: ["Indexing", "Cost cut"] },
  { icon: Database, value: "50%", label: ["Database", "Cost cut"] },
];

export type TechCategory = { icon: LucideIcon; title: string; items: string[] };

export const techStack: TechCategory[] = [
  {
    icon: Server,
    title: "Backend",
    items: ["FastAPI", "Django", "Django REST Framework", "Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS ECS", "Docker", "CI/CD", "RunPod", "Cloudflare R2"],
  },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"] },
  { icon: AppWindow, title: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS"] },
  { icon: CodeXml, title: "Languages & Tools", items: ["Python", "JavaScript", "C++", "Git", "GitHub"] },
];

export type ExperienceGroup = { icon: LucideIcon; title: string; points: string[] };

export const experience = {
  company: "SnapShare.ai",
  role: "Associate Full Stack Engineer",
  period: "Nov 2025 – Present",
  location: "Remote, Bangalore",
  summary: "Building SnapShare.ai's backend services, cloud pipelines and internal platform.",
  stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AWS EC2", "AWS ECS", "RunPod", "Firebase", "Next.js", "React"],
  metrics: [
    { value: "60%", label: "Face indexing cost cut" },
    { value: "50%", label: "Video processing cost cut" },
    { value: "50%", label: "Database cost cut" },
    { value: "1.6s", label: "LCP, down from 6.8s" },
  ],
  groups: [
    {
      icon: Server,
      title: "Backend & Architecture",
      points: [
        "Workspace CRM backend: leads, jobs, contracts and quote revisions",
        "REST APIs and indexed PostgreSQL schemas, DB hits cut to 50K",
        "Per-user subdomains, one for every account",
        "Event Analytics Pipeline on FastAPI, PostgreSQL and Redis",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Pipelines",
      points: [
        "Face indexing pipeline as a RunPod worker, 60% cheaper",
        "HLS video conversion worker, 50% lower processing cost",
        "Docker services shipped through CI/CD to AWS EC2 and ECS",
        "Cloudflare R2 for media, page load under 2 s",
      ],
    },
    {
      icon: BellRing,
      title: "Notifications & Async",
      points: [
        "Firebase push and a scheduler-based notification service",
        "Background WhatsApp notification service",
        "Real-time notification indicator",
        "Crew management and a background server for async tasks",
      ],
    },
    {
      icon: Layers,
      title: "Platform & Product",
      points: [
        "AI Culling (Beta) desktop app, built from scratch",
        "Atlas: auth, users, coupons, custom plans and upgrades",
        "Next.js and FastAPI web app with themes and video uploads",
        "JS bundle cut from 6.4 MB to 2.3 MB",
      ],
    },
  ] satisfies ExperienceGroup[],
};

export type Project = {
  title: string;
  tagline: string;
  badge: string;
  image: string;
  points: string[];
  stack: string[];
  href?: string;
};

// Thumbnails are placeholders, swap in real screenshots (16:10) when you have them.
export const projects: Project[] = [
  {
    title: "PrepWise",
    tagline: "AI-powered interview training platform",
    badge: "Personal project",
    image: "/images/work/prepwise.svg",
    points: [
      "Mock interview platform with a React and Tailwind CSS frontend and a Node.js and Express backend",
      "Vapi AI voice agents for real-time, voice-based interviews, with speech-to-text and text-to-speech",
      "Real-time facial emotion analysis (FER2013) plus Gemini AI answer scoring and feedback",
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "Vapi AI", "Gemini AI"],
  },
  {
    title: "Exoplanet Hunter AI",
    tagline: "NASA Space Apps Hackathon, regional winner",
    badge: "Hackathon winner",
    image: "/images/work/exoplanet-hunter.svg",
    points: [
      "Machine learning model built in 48 hours to classify potential exoplanets",
      "Trained on NASA datasets using 12 planetary signatures",
      "Interactive 2D orbital visualization in React with habitability analysis",
    ],
    stack: ["Python", "Machine Learning", "React", "NASA datasets"],
  },
];

export const moreProjectsUrl = "https://github.com/Anugrxh";

export type EducationEntry = { degree: string; school: string; period: string; score: string; scoreLabel: string };

export const education: EducationEntry[] = [
  { degree: "Master of Computer Applications", school: "Kannur University", period: "2024 – 2026", score: "8.78", scoreLabel: "CGPA" },
  { degree: "Bachelor of Computer Applications", school: "Kannur University", period: "2020 – 2023", score: "7.36", scoreLabel: "CGPA" },
  { degree: "Higher Secondary (Science)", school: "IMNSGHSS Mayyil", period: "2020", score: "81%", scoreLabel: "Score" },
];

export const certifications = [
  "Python Django Full Stack Certification",
  "Python Certification, HackerRank",
  "Winner, NASA Space Apps Hackathon (Regional)",
];

export const about = {
  lead: "I'm an associate full stack engineer at SnapShare.ai. Most of my work is on the backend: planning system architecture, building services and APIs, and running them in the cloud.",
  paragraphs: [
    "I've built the CRM backend, the notification system, face indexing and video pipelines on RunPod, and an AI culling desktop app.",
    "I care about reliability and cost: database cost cut in half, face indexing 60% cheaper, page loads under 2 s. MCA graduate from Kannur University.",
  ],
  traits: ["Detail oriented", "Problem solver", "Performance minded", "Always learning"],
};

export type Tool = { name: string; path: string };

export const tools: Tool[] = [
  { name: "Python", path: siPython.path },
  { name: "FastAPI", path: siFastapi.path },
  { name: "PostgreSQL", path: siPostgresql.path },
  { name: "Redis", path: siRedis.path },
  { name: "Docker", path: siDocker.path },
  { name: "Next.js", path: siNextdotjs.path },
];

export const testimonial = {
  text: "What stands out about Anugrah is not just his technical skills as a software engineer, but the enthusiasm and genuine care he brings to everything he builds. He takes ownership of his work, pays attention to the details and truly cares about the quality of what gets delivered. That kind of passion and commitment makes a real difference to the team and the product.",
  author: "Midhun P K",
  role: "Product Owner, SnapShare.ai",
};

export const contact = {
  title: "Let's Collaborate",
  year: 2026,
  intro: "Have a project in mind or just want to say hi? I'd love to hear from you.",
};

export type ContactItem = { icon: LucideIcon; kind: string; label: string; href?: string };

export const contactItems: ContactItem[] = [
  { icon: Mail, kind: "Email", label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, kind: "Phone", label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, kind: "Location", label: profile.location },
  { icon: Globe, kind: "Website", label: profile.website, href: profile.websiteUrl },
];

export const qrCodes = [
  { label: "LinkedIn", url: profile.linkedinUrl, logo: "linkedin" },
  { label: "GitHub", url: profile.githubUrl, logo: "github" },
] as const;

export const closingLines = ["Engineering experiences.", "Building", "Connections."];
