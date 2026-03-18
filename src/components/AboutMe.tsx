'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

export const AboutMe = () => {
    const { t } = useLanguage();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <section id="sobre-mi" className="w-full py-24 px-6 md:px-12 bg-neutral-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative aspect-[9/16] max-w-sm rounded-[2rem] overflow-hidden border border-neutral-800 bg-neutral-900 group"
                    >
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                        >
                            <source src={`${basePath}/Video Portafolio Subtitulos.mp4`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('aboutme.title')}</h2>

                        <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                            <p>
                                {t('aboutme.p1')}
                            </p>

                            <p>
                                {t('aboutme.p2')}
                            </p>

                            <p>
                                {t('aboutme.p3')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
