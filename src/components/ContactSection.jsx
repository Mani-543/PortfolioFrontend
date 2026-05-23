import { motion } from 'framer-motion'
import { useState } from 'react'
import { contactAPI } from '../utils/api'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        try {
            await contactAPI.submitForm(formData)
            setStatus({ type: 'success', message: 'Message sent successfully!' })
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'Failed to send message' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-dark-900">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container-custom max-w-2xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Get In Touch</h2>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-dark-800/50 p-8 rounded-lg border border-blue-500/20"
                >
                    <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                            placeholder="Subject"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                            placeholder="Your message..."
                        ></textarea>
                    </div>

                    {status && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-lg ${status.type === 'success'
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                }`}
                        >
                            {status.message}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-12 grid md:grid-cols-3 gap-8"
                >
                    {[
                        { label: 'Email', value: 'nmanikanta543@gmail.com', icon: '✉️' },
                        { label: 'Phone', value: '+91 7619200661', icon: '📱' },
                        { label: 'Location', value: 'Bengaluru, India', icon: '📍' }
                    ].map((contact, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl mb-3">{contact.icon}</div>
                            <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                            <p className="text-white font-medium">{contact.value}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
