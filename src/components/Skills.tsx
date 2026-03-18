'use client';

import { motion } from 'framer-motion';
import { Database, Layout, Zap, BarChart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const skillCategories = [
    {
        title: "Enterprise Ecosystem",
        icon: <Database className="w-6 h-6 text-indigo-400" />,
        skills: ["Java", "Spring Boot", "C#", ".NET Core", "SQL Server", "PostgreSQL", "MySQL", "Docker"]
    },
    {
        title: "Modern Web",
        icon: <Layout className="w-6 h-6 text-cyan-400" />,
        skills: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "Performance & Architecture",
        icon: <Zap className="w-6 h-6 text-amber-400" />,
        skills: ["Microservicios", "API REST", "GraphQL", "CI/CD", "Testing (Jest/JUnit)", "Redis"]
    },
    {
        title: "Data & Automation",
        icon: <BarChart className="w-6 h-6 text-emerald-400" />,
        skills: ["Python", "Pandas / NumPy", "SQL (T-SQL)", "Power BI", "Bash / PowerShell", "Selenium", "Ansible", "ETL Pipelines"]
    }
];

export const Skills = () => {
    const { t } = useLanguage();

    return (
        <section id="skills" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    {t('skills.desc')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                    >
                        <div className="w-12 h-12 bg-neutral-950 rounded-2xl flex items-center justify-center mb-6">
                            {cat.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-6">{cat.title}</h3>

                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
