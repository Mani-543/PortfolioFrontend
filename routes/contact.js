import express from 'express';
import { body } from 'express-validator';
import {
    submitContact,
    getContacts,
    updateContactStatus
} from '../controllers/contactController.js';

const router = express.Router();

// Validation middleware
const validateContact = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
];

// Routes
router.post('/submit', validateContact, submitContact);
router.get('/', getContacts);
router.patch('/:id/status', updateContactStatus);

export default router;
