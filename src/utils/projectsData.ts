export interface ProjectScreenshot {
  title: string;
  url: string;
}

export type FilterCategory = "all" | "web" | "backend" | "fullstack";

export interface Project {
  id: number;
  title: string;
  category: string;
  filterCategory: FilterCategory;
  shortDescriptionKey: string;
  fullDescriptionKey: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  repositoryPrivate?: boolean;
  screenshots?: ProjectScreenshot[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Diabetes Care",
    category: "Mobile & Backend Platform",
    filterCategory: "fullstack",
    shortDescriptionKey: "projects.tcc.short",
    fullDescriptionKey: "projects.tcc.full",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Expo", "Go", "Chi", "PostgreSQL", "SQLite"],
    githubUrl: "https://github.com/dcastro0/diabetes-care",
  },
  {
    id: 2,
    title: "Aether ERP",
    category: "ERP Full Stack",
    filterCategory: "fullstack",
    shortDescriptionKey: "projects.aether.short",
    fullDescriptionKey: "projects.aether.full",
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
    id: 3,
    title: "GoShortener",
    category: "Backend & Web Platform",
    filterCategory: "backend",
    shortDescriptionKey: "projects.goshortner.short",
    fullDescriptionKey: "projects.goshortner.full",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Go", "Echo", "PostgreSQL", "React", "TypeScript", "Docker"],
    repositoryPrivate: true,
  },
  {
    id: 4,
    title: "Developer Portfolio",
    category: "Web Platform",
    filterCategory: "web",
    shortDescriptionKey: "projects.portfolio.short",
    fullDescriptionKey: "projects.portfolio.full",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "i18next"],
    githubUrl: "https://github.com/dcastro0/portfolio",
    liveUrl: "https://portfolio-five-ruddy-71.vercel.app/",
  },
];
