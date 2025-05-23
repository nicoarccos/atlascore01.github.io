import { motion } from "framer-motion";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import { Services } from "../utils/data"

export default function Home() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log("Particles container loaded", container);
    }, []);

    return (
        <article className="min-h-screen bg-gradient-to-bl from-atlascorePrimario to-atlascoreSecundario">
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            opacity: 0
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#8BD990"
                            },
                            links: {
                                color: "#4B4BA1",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce"
                                },
                                random: false,
                                speed: 1,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 80
                            },
                            opacity: {
                                value: 0.5
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                value: { min: 1, max: 5 }
                            }
                        },
                        detectRetina: true
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-atlascoreDark via-atlascorePrimario/30 to-transparent opacity-80" />
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute w-72 h-72 bg-atlascorePrimario/10 rounded-full blur-3xl"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ top: '20%', left: '10%' }}
                    />
                    <motion.div
                        className="absolute w-96 h-96 bg-atlascoreSecundario/10 rounded-full blur-3xl"
                        animate={{
                            x: [0, -150, 0],
                            y: [0, 100, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ bottom: '10%', right: '15%' }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6 z-10"
                >
                    <img
                        src="logotipo-white.png"
                        alt="Logotipo"
                        className="w-3/5 max-w-xl hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>
            </section>

            {/* About Section */}
            <section className="relative w-full py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-atlascoreDark/90 to-atlascoreDark/40 backdrop-blur-sm" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="relative">
                            <h2 className="font-tech text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                                <span className="relative">
                                    <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-atlascorePrimario to-atlascoreSecundario opacity-30"></span>
                                    <span className="relative text-white">Transformamos el</span>
                                </span>
                                {" "}
                                <span className="relative">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-atlascorePrimario to-atlascoreSecundario font-extrabold">
                                        Futuro Digital
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <p className="font-tech text-gray-300 text-lg md:text-xl leading-relaxed">
                            Atlascore impulsa la evolución digital en organizaciones de diversas escalas e industrias,
                            combinando innovación tecnológica con estrategias personalizadas
                            para un crecimiento exponencial, escalable, sostenible y a medida de cada cliente según su necesidad.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="w-full py-24 px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-tech text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-white"
                >
                    Nuestras Soluciones
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {Services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <a href={`/services#${service.id}`} className="block h-full">
                                <div className="font-tech h-full p-8 rounded-2xl bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg 
                                        border border-atlascorePrimario/20 hover:border-atlascorePrimario/30 transition-all duration-300
                                        shadow-lg hover:shadow-2xl hover:-translate-y-1">
                                    <img
                                        src={service.icon}
                                        alt={`Icono ${service.title}`}
                                        className="w-12 h-14 object-contain"
                                    />
                                    <h3 className="font-tech text-2xl font-semibold mb-4 text-white group-hover:text-atlascorePrimario transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="font-tech text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16"
            >
                <h2 className="font-tech text-2xl md:text-3xl font-bold mb-8 text-center text-white">Stack Tecnológico</h2>
                <p className="text-lg text-gray-300 text-center mb-12">
                    Tecnologías y herramientas que utilizamos para desarrollar soluciones innovadoras
                </p>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: 'bg-atlascorePrimario',
                    }}
                    className="w-full"
                >
                    {[
                        {
                            name: "React",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                            description: "Biblioteca de JavaScript para crear interfaces de usuario interactivas"
                        },
                        {
                            name: "TypeScript",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                            description: "JavaScript tipado que mejora la calidad y mantenibilidad del código"
                        },
                        {
                            name: "Node.js",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                            description: "Entorno de ejecución de JavaScript en el servidor"
                        },
                        {
                            name: "Python",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                            description: "Lenguaje versátil para desarrollo backend y análisis de datos"
                        },
                        {
                            name: "Docker",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                            description: "Plataforma de contenedores para desarrollo y despliegue"
                        },
                        {
                            name: "AWS",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                            description: "Servicios en la nube para infraestructura y escalabilidad"
                        },
                        {
                            name: "Ansible",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
                            description: "Automatización de infraestructura y despliegue de aplicaciones"
                        },
                        {
                            name: "MongoDB",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                            description: "Base de datos NoSQL para aplicaciones modernas"
                        },
                        {
                            name: "PostgreSQL",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                            description: "Base de datos relacional robusta y confiable"
                        },
                        {
                            name: "Git",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                            description: "Control de versiones para desarrollo colaborativo"
                        },
                        {
                            name: "Kubernetes",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                            description: "Orquestación de contenedores para aplicaciones distribuidas"
                        },
                        {
                            name: "TensorFlow",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                            description: "Framework para desarrollo de modelos de machine learning"
                        },
                        {
                            name: "Jenkins",
                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
                            description: "Automatización de integración y despliegue continuo"
                        }
                    ].map((tech, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 * index }}
                                className="bg-gradient-to-br from-atlascorePrimario/5 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full"
                            >
                                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <h3 className="font-tech text-lg font-bold mb-2 text-white">{tech.name}</h3>
                                <p className="text-white text-sm">{tech.description}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.section>
        </article>
    );
} 