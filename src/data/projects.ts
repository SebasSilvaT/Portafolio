export type Project = {
    id: string;
    title: string;
    description: string;
    stack: string[];
    link?: string;
    repo?: string;
    colSpan?: 1 | 2; // For bento grid layout
};

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Sistema Enterprise Booking",
        description: "Plataforma de gestión de reservas empresariales. Arquitectura escalable y alta disponibilidad.",
        stack: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
        colSpan: 1,
    },
    {
        id: "project-2",
        title: "AI Analysis Dashboard",
        description: "Dashboard analítico potenciado por IA para análisis de datos predictivos en tiempo real.",
        stack: ["Python", "FastAPI", "React", "TypeScript"],
        colSpan: 1,
    },
    {
        id: "project-3",
        title: "Portal de Gestión Interna",
        description: "Solución integral para RRHH con flujos de aprobación y gestión de documentos.",
        stack: ["C#", ".NET Core", "Vue.js", "SQL Server"],
        colSpan: 1,
    },
    {
        id: "project-4",
        title: "Lista de Compras Pro",
        description: "Aplicación web para gestionar listas de compras inteligentes con funcionalidades de autenticación y exportación a PDF.",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
        repo: "https://listadecompraspro.xyz",
        link: "https://listadecompraspro.xyz",
        colSpan: 2,
    },
    {
        id: "project-5",
        title: "Simpsons App",
        description: "Aplicación web para buscar y ver información sobre los personajes de los Simpsons.",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
        repo: "https://github.com/SebasSilvaT/Front-Simpson",
        link: "https://front-simpson.vercel.app",
        colSpan: 1,
    }
];
