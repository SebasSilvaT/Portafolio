'use client';

import { motion } from 'framer-motion';

export const AboutMe = () => {
    return (
        <section id="sobre-mi" className="w-full py-24 px-6 md:px-12 bg-neutral-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="aspect-square relative rounded-[2rem] overflow-hidden border border-neutral-800 bg-neutral-900 group"
                    >
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                        >
                            <source src="/Video Portafolio Subtitulos.mp4" type="video/mp4" />
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Un resumen sobre mi</h2>

                        <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                            <p>
                                Soy estudiante de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC),
                                actualmente en el noveno ciclo y dentro del décimo superior de mi promoción.
                                Me apasiona el desarrollo de software y la creación de soluciones tecnológicas que generen impacto real.
                            </p>

                            <p>
                                Tengo experiencia en desarrollo de aplicaciones web, trabajando tanto en frontend como en backend básico,
                                implementando funcionalidades, consumiendo APIs y colaborando en equipos bajo metodologías ágiles como Scrum.
                                Disfruto construir soluciones claras, mantenibles y orientadas a resolver problemas reales.
                            </p>

                            <p>
                                Actualmente estoy enfocado en seguir creciendo como desarrollador, fortaleciendo mis habilidades en backend,
                                automatización de procesos, análisis de datos y el uso de inteligencia artificial para mejorar la eficiencia
                                de los sistemas y los equipos de trabajo.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
