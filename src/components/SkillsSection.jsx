import { motion } from 'framer-motion'

export default function SkillsSection() {
    const skills = [
        {
            icon: '🎨',
            title: 'Tailwind CSS',
            description: 'Creating responsive, modern, and clean layouts quickly using utility-first styling'
        },
        {
            icon: '⚡',
            title: 'JavaScript',
            description: 'Writing efficient, modern, and optimized code for both frontend and backend logic'
        },
        {
            icon: '⚛️',
            title: 'React',
            description: 'Building fast, interactive, and component-based UIs with clean state management'
        },
        {
            icon: '🔧',
            title: 'Node.js',
            description: 'Developing scalable backend services with async patterns and proper error handling'
        },
        {
            icon: '📦',
            title: 'MongoDB',
            description: 'Creating efficient database schemas and building scalable data architectures'
        },
        {
            icon: '📄',
            title: 'HTML',
            description: 'Writing semantic, accessible markup for improved SEO and user experiences'
        }
    ]

    return (
        <section id="skills" className="py-20 bg-dark-800">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container-custom"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Skills & Technologies</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    I work with modern tools and technologies to build fast, scalable web applications.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group bg-dark-900/50 p-8 rounded-2xl border-2 border-gradient-to-r from-pink-500/40 to-purple-500/40 hover:from-pink-500/70 hover:to-purple-500/70 transition-all duration-300 cursor-pointer relative overflow-hidden"
                        >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="text-7xl mb-6 bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text"
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-4 text-white text-center group-hover:text-blue-400 transition">{skill.title}</h3>
                                <p className="text-gray-300 text-center text-sm leading-relaxed">{skill.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
