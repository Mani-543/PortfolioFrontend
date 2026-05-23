import Contact from '../models/Contact.js';
import { validationResult } from 'express-validator';

export const submitContact = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, subject, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        });

        await newContact.save();

        res.status(201).json({
            message: 'Message sent successfully',
            data: newContact
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ message: 'Error submitting contact form' });
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({
            total: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({ message: 'Error fetching contacts' });
    }
};

export const updateContactStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json({
            message: 'Contact status updated',
            data: contact
        });
    } catch (error) {
        console.error('Update contact error:', error);
        res.status(500).json({ message: 'Error updating contact' });
    }
};
