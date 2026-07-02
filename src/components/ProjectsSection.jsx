import { motion } from 'framer-motion'
import taskImg from '../assets/task.png'
import ElectroImg from '../assets/Electro.png'
import movieImg from '../assets/movie.png'

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce App',
            category: 'Full-Stack E-Commerce',
            description: ' A MERN-based e-commerce platform with user authentication, product catalog, shopping cart, order management, and responsive UI.',
            technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
            image: ElectroImg,
            frontendRepo: 'https://github.com/Mani-543/EcommerceFE',
            backendRepo: 'https://github.com/Mani-543/EcommerceBE',
            liveUrl: 'https://ecommerceapo.netlify.app/'
        },
        {
            id: 2,
            title: 'Task Managment System',
            category: 'Productivity App',
            description: 'A full-stack task management application where users can register, log in securely, create, update, delete, and organize tasks with priorities and due dates.',
            technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CRUD APIs'],
            image: taskImg,
            frontendRepo: 'https://github.com/Mani-543/TaskManagerFE',
            backendRepo: 'https://github.com/Mani-543/TaskManagerBE',
            liveUrl: 'http://taskmanagementprojectt.netlify.app/',
        },
        {
            id: 3,
            title: 'Capstone: Smart Inventory Dashboard',
            category: 'Capstone Project',
            description: 'A complete capstone project featuring role-based access, inventory tracking, analytics views, and real-time reporting for small businesses and warehouse operations.',
            technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Admin Dashboard'],
            image: movieImg,
            frontendRepo: 'https://github.com/yourusername/inventory-dashboard-frontend',
            backendRepo: 'https://github.com/yourusername/inventory-dashboard-backend',
            liveUrl: 'https://inventory-dashboard-demo.netlify.app'
        }
    ]

    const certifications = [
        {
            name: 'IIT-M Pravartak Certified Full Stack Development Course with AI Tools',
            organization: 'GUVI',
            date: 'April 24, 2026',
            link: 'https://www.zenclass.in/certificateDownload/aEvUhTB4ekSiKMth?download=true'
        },
        {
            name: 'HTML, CSS, Tailwind CSS',
            organization: 'GUVI / Skill Development',
            date: 'April 24, 2026',
            link: 'https://www.zenclass.in/certificateDownload/lPZT5lHiqprodydU?download=true'
        },
        {
            name: 'JavaScript Basics',
            organization: 'GUVI',
            date: 'April 24, 2026',
            link: 'https://www.zenclass.in/certificateDownload/m4CDUKjTImePv5n1?download=true'
        },
        {
            name: 'Advanced JavaScript',
            organization: 'GUVI',
            date: 'April 24, 2026',
            link: 'https://www.zenclass.in/certificateDownload/wJmzKWB18kTFhqw0?download=true'
        },
        {
            name: 'ReactJS',
            organization: 'GUVI',
            date: 'April 24, 2026',
            link: 'https://www.zenclass.in/certificateDownload/exIJ7Lyi0zTj4Q6Y?download=true'
        },
        {
            name: 'Node.js',
            organization: 'GUVI',
            date: 'April 24, 2026',
            link: 'https://www.zenclass.in/certificateDownload/4U1GavUo2fIo1oJJ?download=true'
        },
        {
            name: 'Database',
            organization: 'GUVI',
            date: 'April 24, 2026',
            link: 'https://www.zenclass.in/certificateDownload/UeuOMUsf4jmZkTPm?download=true'
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
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">Featured MERN Projects</h2>
                <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
                    These projects highlight end-to-end development skills across frontend, backend, database design, authentication, and deployment.
                </p>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-dark-900/50 rounded-xl overflow-hidden border border-blue-500/30 hover:border-purple-500/60 transition h-full flex flex-col"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-300">{project.category}</div>
                                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={project.frontendRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-3 py-2 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500/20 transition"
                                    >
                                        Frontend Repo
                                    </a>
                                    <a
                                        href={project.backendRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-3 py-2 rounded-lg border border-purple-400/40 text-purple-300 hover:bg-purple-500/20 transition"
                                    >
                                        Backend Repo
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-bold mb-8 gradient-text text-center">Certifications</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-dark-900/60 border border-gray-700 rounded-xl p-6"
                            >
                                <div className="text-sm font-semibold text-yellow-400 mb-3">Certificate</div>
                                <h4 className="text-lg font-semibold text-white mb-3">{cert.name}</h4>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p><span className="text-blue-300">Certificate Name:</span> {cert.name}</p>
                                    <p><span className="text-blue-300">Issuing Organization:</span> {cert.organization}</p>
                                    <p><span className="text-blue-300">Date:</span> {cert.date}</p>
                                </div>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex mt-4 text-sm px-3 py-2 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500/20 transition"
                                >
                                    View Certificate
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

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
                        Let’s Build Something Great
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
