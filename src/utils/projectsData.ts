export interface ProjectScreenshot {
  title: string;
  url: string;
}

export type FilterCategory = "all" | "web" | "mobile" | "backend" | "fullstack" | "financial";

export interface Project {
  id: number;
  code: string;
  title: string;
  category: string;
  filterCategory: FilterCategory;
  shortDescriptionKey: string;
  fullDescriptionKey: string;
  problemKey: string;
  architectureKey: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: ProjectScreenshot[];
}

export const projects: Project[] = [
  {
    id: 7,
    code: "ERP-01",
    title: "Aether ERP",
    category: "Enterprise Web System",
    filterCategory: "web",
    shortDescriptionKey: "projects.aether.short",
    fullDescriptionKey: "projects.aether.full",
    problemKey: "projects.aether.problem",
    architectureKey: "projects.aether.architecture",
    imageUrl: "/portfolio-screenshots/aether/01-dashboard.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/dcastro0/aether-erp",
    screenshots: [
      {
        title: "Dashboard & Visão Geral",
        url: "/portfolio-screenshots/aether/01-dashboard.png",
      },
      {
        title: "Ponto de Venda (PDV) & Vendas",
        url: "/portfolio-screenshots/aether/02-pdv-sales.png",
      },
      {
        title: "Gestão Financeira & Fluxo de Caixa",
        url: "/portfolio-screenshots/aether/03-financial-management.png",
      },
      {
        title: "Relatórios & Business Intelligence",
        url: "/portfolio-screenshots/aether/04-reports-bi.png",
      },
      {
        title: "Estoque & Catálogo de Produtos",
        url: "/portfolio-screenshots/aether/05-inventory-products.png",
      },
      {
        title: "Compras & Pedidos de Fornecedores",
        url: "/portfolio-screenshots/aether/06-purchases-orders.png",
      },
      {
        title: "Gestão de Clientes & CRM",
        url: "/portfolio-screenshots/aether/07-customers.png",
      },
      {
        title: "Configurações & Temas do Sistema",
        url: "/portfolio-screenshots/aether/08-settings.png",
      },
    ],
  },
  {
    id: 1,
    code: "MOB-02",
    title: "TCC Mobile App",
    category: "Mobile Application",
    filterCategory: "mobile",
    shortDescriptionKey: "projects.tcc.short",
    fullDescriptionKey: "projects.tcc.full",
    problemKey: "projects.tcc.problem",
    architectureKey: "projects.tcc.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "TypeScript", "SQLite", "Expo", "Node.js"],
    githubUrl: "https://github.com/dcastro0/tcc-app",
  },
  {
    id: 2,
    code: "API-03",
    title: "TCC Backend API",
    category: "Backend & Microservice",
    filterCategory: "backend",
    shortDescriptionKey: "projects.tcc_api.short",
    fullDescriptionKey: "projects.tcc_api.full",
    problemKey: "projects.tcc_api.problem",
    architectureKey: "projects.tcc_api.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    technologies: ["Go", "Gin", "MySQL", "REST API"],
    githubUrl: "https://github.com/dcastro0/tcc-api",
  },
  {
    id: 8,
    code: "SVC-04",
    title: "GoShortner",
    category: "Backend & API",
    filterCategory: "backend",
    shortDescriptionKey: "projects.goshortner.short",
    fullDescriptionKey: "projects.goshortner.full",
    problemKey: "projects.goshortner.problem",
    architectureKey: "projects.goshortner.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Go", "Docker", "REST API"],
    githubUrl: "https://github.com/dcastro0/goshortner",
  },
  {
    id: 9,
    code: "MON-05",
    title: "NetPulse",
    category: "System & Monitoring",
    filterCategory: "backend",
    shortDescriptionKey: "projects.netpulse.short",
    fullDescriptionKey: "projects.netpulse.full",
    problemKey: "projects.netpulse.problem",
    architectureKey: "projects.netpulse.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80",
    technologies: ["TypeScript", "Node.js", "React"],
    githubUrl: "https://github.com/dcastro0/netpulse",
  },
  {
    id: 4,
    code: "FSP-06",
    title: "Dile Full Stack Platform",
    category: "Full Stack Platform",
    filterCategory: "fullstack",
    shortDescriptionKey: "projects.dile.short",
    fullDescriptionKey: "projects.dile.full",
    problemKey: "projects.dile.problem",
    architectureKey: "projects.dile.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    technologies: ["TypeScript", "Node.js", "React", "REST API"],
    githubUrl: "https://github.com/dcastro0/dile-app-full",
  },
  {
    id: 3,
    code: "POS-07",
    title: "Commercial Sales System",
    category: "Web Application",
    filterCategory: "web",
    shortDescriptionKey: "projects.vendas.short",
    fullDescriptionKey: "projects.vendas.full",
    problemKey: "projects.vendas.problem",
    architectureKey: "projects.vendas.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/dcastro0/app_vendas",
  },
  {
    id: 5,
    code: "FIN-08",
    title: "Financial Interest Calculator",
    category: "Financial Tool",
    filterCategory: "financial",
    shortDescriptionKey: "projects.juros.short",
    fullDescriptionKey: "projects.juros.full",
    problemKey: "projects.juros.problem",
    architectureKey: "projects.juros.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/dcastro0/juros-app",
  },
  {
    id: 6,
    code: "WEB-09",
    title: "Developer Portfolio System",
    category: "Web Platform",
    filterCategory: "web",
    shortDescriptionKey: "projects.portfolio.short",
    fullDescriptionKey: "projects.portfolio.full",
    problemKey: "projects.portfolio.problem",
    architectureKey: "projects.portfolio.architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "i18next"],
    githubUrl: "https://github.com/dcastro0/portfolio",
    liveUrl: "https://portfolio-five-ruddy-71.vercel.app/",
  },
];
