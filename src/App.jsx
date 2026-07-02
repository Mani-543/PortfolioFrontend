import { motion } from 'framer-motion'
import { useState } from 'react'

import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-dark-900 overflow-x-hidden">

            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed w-full top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-gray-800"
            >
                <nav className="container-custom py-4 flex justify-between items-center">

                    <motion.h1
                        className="text-lg sm:text-2xl font-bold gradient-text cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        MERN STACK DEVELOPER
                    </motion.h1>

                    {/* Desktop Menu */}
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
                            <a
                                href="#contact"
                                className="px-6 py-2 border-2 border-yellow-400 rounded-full hover:bg-yellow-400/40 hover:border-yellow-300 transition-all duration-300"
                            >
                                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-bold">
                                    Hire Me
                                </span>
                            </a>
                        </motion.li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-3xl text-white"
                        onClick={() => setMenuOpen(true)}
                    >
                        ☰
                    </button>
                </nav>
            </motion.header>

            {/* Sidebar Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: menuOpen ? 0 : '100%' }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-72 bg-dark-900 border-l border-gray-800 z-50 md:hidden shadow-2xl"
            >

                {/* Close Button */}
                <div className="flex justify-end p-5">
                    <button
                        className="text-3xl text-white"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-8 px-8 mt-10 text-lg">

                    <li>
                        <a
                            href="#home"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-400 transition"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-400 transition"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-400 transition"
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#services"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-400 transition"
                        >
                            Services
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-400 transition"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-400 transition"
                        >
                            Contact
                        </a>
                    </li>

                    <li className="pt-4">
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-3 border-2 border-yellow-800 rounded-full block text-center hover:bg-yellow-200/40 hover:border-yellow-100 transition-all"
                        >
                            <span className="bg-gradient-to-r from-yellow-200 to-red-300 bg-clip-text text-transparent font-bold">
                                Hire Me
                            </span>
                        </a>
                    </li>

                </ul>
            </motion.div>

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />

                {/* Footer */}
                <footer className="bg-dark-800 border-t border-gray-700 py-12">
                    <div className="container-custom">

                        <div className="grid md:grid-cols-2 gap-8 mb-8">

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold gradient-text mb-4">
                                    MERN Stack Developer
                                </h3>

                                <p className="text-gray-400">
                                    Building scalable web applications with modern technologies.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="flex md:justify-end items-center gap-6"
                            >
                                <a
                                    href="https://www.linkedin.com/in/n-manikanta-b133ma114/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition text-blue-400"
                                >
                                    in
                                </a>

                                <a
                                    href="https://www.naukri.com/mnjuser/profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition text-blue-400"
                                >
                                    🔎
                                </a>

                                 <a
                                    href="https://github.com/Mani-543"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition text-blue-400"
                                >
                                    💼
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
                                &copy; 2026 MERN Stack Developer. All Rights Reserved
                            </motion.p>
                        </div>

                    </div>
                </footer>
            </main>
        </div>
    )
}