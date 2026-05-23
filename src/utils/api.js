import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const contactAPI = {
    submitForm: async (formData) => {
        try {
            const response = await apiClient.post('/contact/submit', formData)
            return response.data
        } catch (error) {
            throw error.response?.data || { message: 'Error submitting form' }
        }
    },

    getContacts: async () => {
        try {
            const response = await apiClient.get('/contact')
            return response.data
        } catch (error) {
            throw error.response?.data || { message: 'Error fetching contacts' }
        }
    },

    updateContactStatus: async (id, status) => {
        try {
            const response = await apiClient.patch(`/contact/${id}/status`, { status })
            return response.data
        } catch (error) {
            throw error.response?.data || { message: 'Error updating contact' }
        }
    }
}

export default apiClient
