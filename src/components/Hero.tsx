'use client';

import { motion } from 'framer-motion';
import { ArrowBigUp, ArrowRight, Download } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="w-full min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950 to-neutral-950 -z-10" />

            <div className="max-w-4xl max-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium tracking-wide mb-6">
                        {t('hero.badge')}
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {t('hero.title')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        {t('hero.span')}
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {t('hero.desc')}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="#proyectos" className="px-8 py-4 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-all flex items-center gap-2">
                        {t('hero.btn.projects')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/cv.pdf" download="Sebastian Valentino Silva Tirado.pdf" className="px-8 py-4 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-all flex items-center gap-2">
                        {t('hero.btn.cv')}
                        <Download className="w-4 h-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/sebastian-silva-t/" target="_blank" rel="noreferrer noopener" className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                        LinkedIn
                        <ArrowBigUp className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/SebasSilvaT" target="_blank" rel="noreferrer noopener" className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                        GitHub
                        <ArrowBigUp className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
