export interface Project {
  id: number;
  title: string;
  shortDescriptionKey: string; // Mudou de shortDescription para shortDescriptionKey
  fullDescriptionKey: string;  // Mudou de fullDescription para fullDescriptionKey
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "tcc-app",
    shortDescriptionKey: "projects.tcc.short",
    fullDescriptionKey: "projects.tcc.full",
    imageUrl: "https://placehold.co/600x400/1e3a8a/ffffff?text=TCC+App",
    technologies: ["TypeScript", "React Native", "SQLite", "Node.js", "Expo"],
    githubUrl: "https://github.com/dcastro0/tcc-app",
  },
  {
    id: 2,
    title: "tcc-api", 
    shortDescriptionKey: "projects.tcc_api.short",
    fullDescriptionKey: "projects.tcc_api.full",
    imageUrl: "https://placehold.co/600x400/3776AB/ffffff?text=Python+API", 
    technologies: ["Python", "Flask", "MySQL"], 
    githubUrl: "https://github.com/dcastro0/tcc-api", 
  },
  {
    id: 3,
    title: "app_vendas",
    shortDescriptionKey: "projects.vendas.short",
    fullDescriptionKey: "projects.vendas.full",
    imageUrl: "https://placehold.co/600x400/1e3a8a/ffffff?text=App+Vendas",
    technologies: ["TypeScript", "React"],
    githubUrl: "https://github.com/dcastro0/app_vendas",
  },
  {
    id: 4,
    title: "dile-app-full",
    shortDescriptionKey: "projects.dile.short",
    fullDescriptionKey: "projects.dile.full",
    imageUrl: "https://placehold.co/600x400/1e3a8a/ffffff?text=Dile+App+Full",
    technologies: ["TypeScript", "Node.js", "React"],
    githubUrl: "https://github.com/dcastro0/dile-app-full",
  },
  {
    id: 5,
    title: "juros-app",
    shortDescriptionKey: "projects.juros.short",
    fullDescriptionKey: "projects.juros.full",
    imageUrl: "https://placehold.co/600x400/1e3a8a/ffffff?text=Juros+App",
    technologies: ["TypeScript", "React"],
    githubUrl: "https://github.com/dcastro0/juros-app",
  },
  {id: 6,
    title: "portfolio",
    shortDescriptionKey: "projects.portfolio.short",
    fullDescriptionKey: "projects.portfolio.full",
    imageUrl: "https://placehold.co/600x400/1e3a8a/ffffff?text=Portfolio",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/dcastro0/portfolio",
  }
];