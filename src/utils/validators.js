// Validation utility functions
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const validateForm = (formData) => {
    const errors = {}

    if (!formData.name || formData.name.trim().length === 0) {
        errors.name = 'Name is required'
    }

    if (!formData.email || formData.email.trim().length === 0) {
        errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email'
    }

    if (!formData.message || formData.message.trim().length === 0) {
        errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

// Formatting utility functions
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
}
