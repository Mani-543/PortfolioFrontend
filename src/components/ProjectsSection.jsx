import { motion } from 'framer-motion'

export default function ProjectsSection() {
    const projects = [
        
        {
            id: 1,
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates and team collaboration features.',
            technologies: ['React', 'Tailwind CSS','Express', 'MongoDB', 'Socket.io'],
            link: '#'
        },
        {
            id: 2,
            title: 'Dictionary Application',
            description: 'Interactive dictionary application to search word meanings, synonyms, antonyms, and pronunciation details.',
            technologies: ['HTML', 'Tailwind CSS', 'Dictionary API', 'JavaScript'],
            link: '#'
        },
        {
            id: 3,
            title: 'Movie Review Application',
            description: 'Movie review platform where users can explore movies, read reviews, ratings, and search for trending films.',
            technologies: ['React', 'Tailwind CSS','Node.js', 'Express.js', 'MongoDB'],
            link: '#'
        }
        
    ]

return (
    <section id="projects" className="py-20 bg-dark-800">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container-custom"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Recent Projects</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="bg-dark-900/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition h-full flex flex-col"
                    >
                        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <p className="text-gray-400 text-center">Project {project.id} Image</p>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                className="text-blue-400 hover:text-blue-300 transition font-semibold inline-flex items-center"
                            >
                                View Project →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <a
                    href="#contact"
                    className="btn-primary inline-block text-white"
                >
                    View More Projects
                </a>
            </motion.div>
        </motion.div>
    </section>
)
}
