import express from 'express';
import { getAllContacts, createContact, deleteContact, updateContact } from '../controllers/contactController.js';

const router = express.Router();

router.get('/contacts', getAllContacts);
router.post('/contacts', createContact);
router.delete('/contacts/:id', deleteContact);
router.put('/contacts/:id', updateContact);

export default router;
