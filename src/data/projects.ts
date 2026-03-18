export type Project = {
    id: string;
    title: { es: string; en: string };
    description: { es: string; en: string };
    stack: string[];
    link?: string;
    repo?: string;
    colSpan?: 1 | 2; // For bento grid layout
};

export const projects: Project[] = [
    {
        id: "project-1",
        title: {
            es: "Microservicios de Finanzas",
            en: "Finance Microservices"
        },
        description: {
            es: "Plataforma de gestión de microfinanzas. Arquitectura escalable y alta disponibilidad.",
            en: "Microfinance management platform with a scalable and highly available architecture."
        },
        stack: ["Java", "Spring Boot", "Angular", "MySQL"],
        repo: "https://github.com/Microfinanzas-Fullstack",
        link: "https://drive.google.com/drive/folders/1xFjcaXT6tyWn1aG3XayFfsA8u-RV-7yI?usp=sharing",
        colSpan: 1,
    },
    {
        id: "project-2",
        title: {
            es: "Plataforma de E-learning",
            en: "E-learning Platform"
        },
        description: {
            es: "Plataforma de e-learning con funcionalidades de autenticación y gestión de cursos.",
            en: "E-learning platform with authentication functionality and course management."
        },
        stack: ["Python", "FastAPI", "React", "TypeScript"],
        repo: "https://github.com/Plataforma-de-E-learning",
        link: "https://drive.google.com/drive/folders/1bYog0zBhLkMvuDmp5vTBy4DHnxKXellt?usp=sharing",
        colSpan: 1,
    },
    {
        id: "project-3",
        title: {
            es: "Sistema de Gestión de Gimnasio",
            en: "Gym Management System"
        },
        description: {
            es: "Solución integral para la gestión de gimnasios con funcionalidades de gestión de reservas y manejo de espacios.",
            en: "Comprehensive solution for gym management with booking and space management features."
        },
        stack: ["C#", ".NET Core", "Vue.js", "SQLite"],
        repo: "https://github.com/Sistema-Reserva-Gimnasio",
        link: "https://drive.google.com/drive/folders/112m7MNB-34wk7Xb23WSnI110vGB0Leu1?usp=sharing",
        colSpan: 1,
    },
    {
        id: "project-4",
        title: {
            es: "Lista de Compras Pro",
            en: "Shopping List Pro"
        },
        description: {
            es: "Aplicación web para gestionar listas de compras inteligentes con funcionalidades de autenticación y exportación a PDF.",
            en: "Web application for managing smart shopping lists with authentication and PDF export."
        },
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
        repo: "https://listadecompraspro.xyz",
        link: "https://listadecompraspro.xyz",
        colSpan: 2,
    },
    {
        id: "project-5",
        title: {
            es: "Simpsons App",
            en: "Simpsons App"
        },
        description: {
            es: "Aplicación web para buscar y ver información sobre los personajes de los Simpsons.",
            en: "Web application to search and view information about characters from The Simpsons."
        },
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
        repo: "https://github.com/SebasSilvaT/Front-Simpson",
        link: "https://front-simpson.vercel.app",
        colSpan: 1,
    }
];
