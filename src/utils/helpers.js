// Error handling utility
export const handleError = (error) => {
    console.error('Error:', error)

    if (error.response) {
        // Server responded with error status
        return {
            message: error.response.data?.message || 'Server error occurred',
            status: error.response.status
        }
    } else if (error.request) {
        // Request made but no response
        return {
            message: 'No response from server. Please check your connection.',
            status: 0
        }
    } else {
        // Other errors
        return {
            message: error.message || 'An unexpected error occurred',
            status: -1
        }
    }
}

// Success notification helper
export const showSuccess = (message) => {
    console.log('Success:', message)
    return {
        type: 'success',
        message
    }
}

// Local storage helpers
export const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('Storage error:', error)
        }
    },

    get: (key) => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : null
        } catch (error) {
            console.error('Storage error:', error)
            return null
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error('Storage error:', error)
        }
    },

    clear: () => {
        try {
            localStorage.clear()
        } catch (error) {
            console.error('Storage error:', error)
        }
    }
}
