import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="container-custom grid md:grid-cols-2 gap-12 items-center"
            >
                {/* Left side - Text */}
                <div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-blue-400 mb-4"
                    >
                        Hi, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-6xl md:text-7xl font-bold mb-4"
                    >
                        <span className="text-white">N Manikanta</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                    >
                        I build scalable full-stack applications using React, Node.js, Express and MongoDB. I love clean code and fast UIs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex gap-6 flex-wrap"
                    >
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary text-white hover:shadow-lg hover:shadow-blue-600/50 cursor-pointer"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-secondary text-blue-400 border-blue-500 hover:bg-blue-500/10 cursor-pointer"
                        >
                            Let's Collaborate
                        </button>
                    </motion.div>
                </div>

                {/* Right side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden md:flex justify-center items-center"
                >
                    <div className="w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-500/50">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
