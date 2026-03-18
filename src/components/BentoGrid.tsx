'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useLanguage } from '@/context/LanguageContext';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export const BentoGrid = () => {
    const { language, t } = useLanguage();

    return (
        <section id="proyectos" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('bento.title')}</h2>
                <p className="text-neutral-400 max-w-2xl">
                    {t('bento.desc')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors",
                            project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
                        )}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-4">
                                    <a href={project.repo || '#'} className="text-neutral-500 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.link || '#'} className="text-neutral-500 hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                                {project.title[language]}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                {project.description[language]}
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                            {project.stack.map(tech => (
                                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800/50 text-neutral-300 border border-neutral-700/50">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
