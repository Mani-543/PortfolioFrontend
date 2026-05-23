import { motion } from 'framer-motion'

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-dark-800">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container-custom"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center border border-blue-500/20 overflow-hidden"
                    >
                        <img
                            src="images.png"
                            alt="About Me"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            I'm a passionate full-stack developer with expertise in building modern web applications.
                            With a strong foundation in the MERN stack, I create responsive, user-friendly solutions
                            that bridge the gap between design and functionality.
                        </p>

                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            My journey in web development started with a curiosity about how things work on the web.
                            Today, I leverage this knowledge to build scalable applications that solve real-world problems.
                        </p>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            When I'm not coding, you can find me exploring emerging technologies, contributing to open source,
                            or sharing knowledge with the developer community.
                        </p>

                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer"
                        >
                            <span>📥</span>
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}