import { motion } from 'framer-motion'

export default function ServicesSection() {
    const services = [
        {
            icon: '💼',
            title: 'Full Stack Web Development',
            description: 'End-to-end web applications using React, Node.js, and MongoDB'
        },
        {
            icon: '🎨',
            title: 'Frontend Development',
            description: 'Interactive UI with React, Tailwind CSS, and Framer Motion'
        },
        {
            icon: '⚙️',
            title: 'Backend API Development',
            description: 'Robust REST APIs with Express.js and database integration'
        },
        {
            icon: '💾',
            title: 'Database Design',
            description: 'MongoDB schema design and optimization for scalability'
        },
        {
            icon: '🔐',
            title: 'Authentication & Authorization',
            description: 'Secure login systems and role-based access control'
        },
        {
            icon: '🎯',
            title: 'Performance Optimization',
            description: 'Code optimization and database query performance tuning'
        },
        {
            icon: '📈',
            title: 'E-Commerce Development',
            description: 'Complete e-commerce solutions with payment integration'
        },
        {
            icon: '🚀',
            title: 'Deployment & Hoisting Support',
            description: 'Deploying full-stack applications and providing hosting, server configuration, and production support.'
        }
    ]

    return (
        <section id="services" className="py-20 bg-dark-900">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container-custom"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Services I Provide</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Comprehensive web development solutions tailored to your business needs
                </p>

                <div className="grid md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-dark-800/50 p-6 rounded-lg border-2 border-blue-500/40 hover:border-blue-400/70 transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-lg font-bold mb-3 text-blue-400">{service.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
