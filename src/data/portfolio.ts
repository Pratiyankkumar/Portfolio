export const portfolio = {
  name: "Pratiyank",
  age: 18,
  tagline: "Shipping code, figuring it out.",
  about:
    "18, self-taught, and already shipping. I picked up everything from first principles — no CS degree, no bootcamp. I build full-stack products, contribute to open source, and I'm always looking for the next problem to solve.",
  links: {
    github: "https://github.com/Pratiyankkumar",
    linkedin: "https://www.linkedin.com/in/pratiyank/",
    x: "https://x.com/pratiyank",
    resume:
      "https://docs.google.com/document/d/1SekTYka2ZZ8yFwD1VQaOsPNonYWoQrac/edit",
  },
  projects: [
    {
      name: "Frontend Forge",
      description:
        "A platform inspired by greatfrontend where devs can practice their frontend skills.",
      live: "https://frontend-forge-web.vercel.app",
      github: "https://github.com/Frontend-Forge",
    },
    {
      name: "Create Express App",
      description:
        "A boilerplate for quickly setting up an Express.js backend, making backend development smoother.",
      live: "https://npmjs.com/package/@pratiyank/create-express-app",
      github: "https://github.com/Pratiyankkumar/create-express-app",
    },
    {
      name: "AI Educational Video Generator",
      description:
        "A tool that generates educational videos from text prompts using AI.",
      live: "https://testing-theta-eosin.vercel.app/",
    },
  ],
  experience: [
    {
      company: "VideoTutor",
      url: "https://videotutor.io",
      role: "Software Engineer Intern",
      period: "April 2025 - Present",
    },
    {
      company: "Nspira",
      url: "https://www.nspira.in/",
      role: "Backend Developer",
      period: "August 2025 - March 2026 (7 Months)",
    },
  ],
  contributions: [
    { name: "OpenCut", url: "https://github.com/OpenCut-app/OpenCut" },
    { name: "Better Auth", url: "https://github.com/better-auth/better-auth" },
    { name: "Supermemory", url: "https://github.com/supermemoryai/supermemory" },
    { name: "Zero", url: "https://github.com/Mail-0/Zero" },
    { name: "Magic UI", url: "https://github.com/magicuidesign/magicui" },
  ],
  tech: {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: [
      "React.js",
      "Next.js",
      "Express.js",
      "FastAPI",
      "Node.js",
      "Jest",
    ],
    tools: ["GitHub", "Docker", "VS Code", "Postman", "Supabase"],
    ui: ["Tailwind CSS", "Shadcn UI"],
    databases: ["MongoDB", "PostgreSQL"],
    orms: ["Mongoose", "Prisma"],
    deployment: ["Vercel", "Render", "Modal"],
    other: ["NumPy", "Manim"],
  },
} as const;
