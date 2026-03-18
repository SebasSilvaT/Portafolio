'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const Navbar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#hero" onClick={handleScroll} className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <Terminal className="w-6 h-6 text-indigo-400" />
                    <span>Silva.dev</span>
                </a>
                <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
                    <a href="#proyectos" onClick={handleScroll} className="hover:text-white transition-colors">Proyectos</a>
                    <a href="#sobre-mi" onClick={handleScroll} className="hover:text-white transition-colors">Sobre Mí</a>
                    <a href="#skills" onClick={handleScroll} className="hover:text-white transition-colors">Skills</a>
                </div>
            </div>
        </motion.nav>
    );
};
