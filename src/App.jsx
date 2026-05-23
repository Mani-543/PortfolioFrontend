import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
    return (
        <div className="min-h-screen bg-dark-900">
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed w-full top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-gray-800"
            >
                <nav className="container-custom py-4 flex justify-between items-center">
                    <motion.h1
                        className="text-2xl font-bold gradient-text cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        MERN STACK DEVELOPER
                    </motion.h1>
                    <ul className="hidden md:flex gap-8 items-center">
                        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                        <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
                        <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                        <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                                Hire Me
                            </a>
                        </motion.li>
                    </ul>
                </nav>
            </motion.header>

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />

                <footer className="bg-dark-800 border-t border-gray-700 py-12">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold gradient-text mb-4">MERN Stack Developer</h3>
                                <p className="text-gray-400">Building scalable web applications with modern technologies.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="flex justify-end items-center gap-6"
                            >
                                <a href="#" className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition text-blue-400">
                                    f
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition text-blue-400">
                                    𝕏
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition text-blue-400">
                                    in
                                </a>
                            </motion.div>
                        </div>
                        <div className="border-t border-gray-700 pt-8 text-center">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-gray-400 mb-2"
                            >
                                &copy; 2024 MERN Stack Developer. All Rights Reserved
                            </motion.p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
