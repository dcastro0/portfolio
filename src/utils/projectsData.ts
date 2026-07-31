export interface Project {
  id: number;
  title: string;
  category: string;
  shortDescriptionKey: string;
  fullDescriptionKey: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TCC Mobile App",
    category: "Mobile Application",
    shortDescriptionKey: "projects.tcc.short",
    fullDescriptionKey: "projects.tcc.full",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "TypeScript", "SQLite", "Expo", "Node.js"],
    githubUrl: "https://github.com/dcastro0/tcc-app",
  },
  {
    id: 2,
    title: "TCC Backend API",
    category: "Backend & Microservice",
    shortDescriptionKey: "projects.tcc_api.short",
    fullDescriptionKey: "projects.tcc_api.full",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    technologies: ["Go", "Gin", "MySQL", "REST API"],
    githubUrl: "https://github.com/dcastro0/tcc-api",
  },
  {
    id: 3,
    title: "Commercial Sales System",
    category: "Web Application",
    shortDescriptionKey: "projects.vendas.short",
    fullDescriptionKey: "projects.vendas.full",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/dcastro0/app_vendas",
  },
  {
    id: 4,
    title: "Dile Full Stack Platform",
    category: "Full Stack Platform",
    shortDescriptionKey: "projects.dile.short",
    fullDescriptionKey: "projects.dile.full",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    technologies: ["TypeScript", "Node.js", "React", "REST API"],
    githubUrl: "https://github.com/dcastro0/dile-app-full",
  },
  {
    id: 5,
    title: "Financial Interest Calculator",
    category: "Financial Tool",
    shortDescriptionKey: "projects.juros.short",
    fullDescriptionKey: "projects.juros.full",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/dcastro0/juros-app",
  },
  {
    id: 6,
    title: "Executive Developer Portfolio",
    category: "Web Platform",
    shortDescriptionKey: "projects.portfolio.short",
    fullDescriptionKey: "projects.portfolio.full",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "i18next"],
    githubUrl: "https://github.com/dcastro0/portfolio",
    liveUrl: "https://portfolio-five-ruddy-71.vercel.app/",
  },
  {
    id: 7,
    title: "Aether ERP",
    category: "Web Application",
    shortDescriptionKey: "projects.aether.short",
    fullDescriptionKey: "projects.aether.full",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/dcastro0/aether-erp",
  },
  {
    id: 8,
    title: "GoShortner",
    category: "Backend & API",
    shortDescriptionKey: "projects.goshortner.short",
    fullDescriptionKey: "projects.goshortner.full",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Go", "Docker", "REST API"],
    githubUrl: "https://github.com/dcastro0/goshortner",
  },
  {
    id: 9,
    title: "NetPulse",
    category: "System & Monitoring",
    shortDescriptionKey: "projects.netpulse.short",
    fullDescriptionKey: "projects.netpulse.full",
    imageUrl:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80",
    technologies: ["TypeScript", "Node.js", "React"],
    githubUrl: "https://github.com/dcastro0/netpulse",
  },
];
