'use client';

import React, { createContext, useState, useContext } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const translations = {
    es: {
        "nav.proyectos": "Proyectos",
        "nav.sobreMi": "Sobre Mí",
        "nav.skills": "Skills",
        "hero.badge": "Disponible para nuevas oportunidades",
        "hero.title": "Transformando ideas en",
        "hero.span": "Arquitecturas de Software",
        "hero.desc": "Desarrollador Fullstack apasionado por crear aplicaciones empresariales escalables y soluciones web modernas de alto rendimiento.",
        "hero.btn.projects": "Ver Proyectos",
        "hero.btn.cv": "Descargar CV",
        "aboutme.title": "Un resumen sobre mi",
        "aboutme.p1": "Soy estudiante de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC), actualmente en el noveno ciclo y dentro del décimo superior de mi promoción. Me apasiona el desarrollo de software y la creación de soluciones tecnológicas que generen impacto real.",
        "aboutme.p2": "Tengo experiencia en desarrollo de aplicaciones web, trabajando tanto en frontend como en backend básico, implementando funcionalidades, consumiendo APIs y colaborando en equipos bajo metodologías ágiles como Scrum. Disfruto construir soluciones claras, mantenibles y orientadas a resolver problemas reales.",
        "aboutme.p3": "Actualmente estoy enfocado en seguir creciendo como desarrollador, fortaleciendo mis habilidades en backend, automatización de procesos, análisis de datos y el uso de inteligencia artificial para mejorar la eficiencia de los sistemas y los equipos de trabajo.",
        "bento.title": "Trabajo Destacado",
        "bento.desc": "Explorando la intersección entre el rendimiento empresarial y el diseño impactante. Aquí hay una selección de mis proyectos más recientes.",
        "skills.title": "Habilidades Técnicas",
        "skills.desc": "Dominio en el espectro completo del desarrollo web, abarcando desde integraciones corporativas complejas hasta interfaces modernas y ligeras."
    },
    en: {
        "nav.proyectos": "Projects",
        "nav.sobreMi": "About Me",
        "nav.skills": "Skills",
        "hero.badge": "Available for new opportunities",
        "hero.title": "Transforming ideas into",
        "hero.span": "Software Architectures",
        "hero.desc": "Fullstack Developer passionate about creating scalable enterprise applications and high-performance modern web solutions.",
        "hero.btn.projects": "View Projects",
        "hero.btn.cv": "Download CV",
        "aboutme.title": "A brief summary about me",
        "aboutme.p1": "I am a Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC), currently in my ninth cycle and in the top tenth of my class. I am passionate about software development and creating technological solutions that generate real impact.",
        "aboutme.p2": "I have experience in web application development, working on both frontend and basic backend, implementing features, consuming APIs, and collaborating in teams under agile methodologies like Scrum. I enjoy building clear, maintainable solutions oriented to solving real problems.",
        "aboutme.p3": "Currently, I am focused on continuing to grow as a developer, strengthening my skills in backend, process automation, data analysis, and using artificial intelligence to improve the efficiency of systems and work teams.",
        "bento.title": "Featured Work",
        "bento.desc": "Exploring the intersection between enterprise performance and impactful design. Here is a selection of my most recent projects.",
        "skills.title": "Technical Skills",
        "skills.desc": "Proficiency in the full spectrum of web development, ranging from complex corporate integrations to modern and lightweight interfaces."
    }
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'es',
    toggleLanguage: () => { },
    t: () => ''
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('es');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    const t = (key: string): string => {
        return (translations[language] as Record<string, string>)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
