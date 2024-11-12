const { getAllContacts, createContact, deleteContact, updateContact } = require('../controllers/contactController');
const request = require('supertest');

import Contact from '../models/contact';

jest.mock('../models/contact');  // Mock the Contact model

describe('Contact Controller - Unit Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();  // Reset mocks after each test
  });

  it('should get all contacts', async () => {
    const mockContacts = [{ id: 1, name: 'John Doe' }];
    Contact.findAll.mockResolvedValue(mockContacts);  // Mock findAll response

    const req = {};
    const res = { json: jest.fn() };

    await getAllContacts(req, res);

    expect(res.json).toHaveBeenCalledWith(mockContacts);
    expect(Contact.findAll).toHaveBeenCalledTimes(1);
  });

  it('should create a new contact', async () => {
    const newContact = { id: 2, name: 'Jane Doe' };
    Contact.create.mockResolvedValue(newContact);  // Mock create response

    const req = { body: { name: 'Jane Doe' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await createContact(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(newContact);
    expect(Contact.create).toHaveBeenCalledWith(req.body);
  });

  it('should delete a contact', async () => {
    Contact.destroy.mockResolvedValue(1);  // Mock destroy response

    const req = { params: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await deleteContact(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
    expect(Contact.destroy).toHaveBeenCalledWith({ where: { id: req.params.id } });
  });

  it('should return 404 if contact not found during update', async () => {
    Contact.findByPk.mockResolvedValue(null);  // Mock no contact found

    const req = { params: { id: 999 }, body: { name: 'New Name' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await updateContact(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Contact not found' });
  });
});
