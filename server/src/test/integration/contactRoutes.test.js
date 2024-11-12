const request = require('supertest');

import app from '../app';  // Ensure your Express app is exported from app.js
import Contact from '../models/contact';

jest.mock('../models/contact');  // Mock the database model

describe('Contact API - Integration Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();  // Reset mocks after each test
  });

  it('GET /api/contacts should return all contacts', async () => {
    const mockContacts = [{ id: 1, name: 'John Doe' }];
    Contact.findAll.mockResolvedValue(mockContacts);

    const response = await request(app).get('/api/contacts');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockContacts);
    expect(Contact.findAll).toHaveBeenCalledTimes(1);
  });

  it('POST /api/contacts should create a new contact', async () => {
    const newContact = { id: 2, name: 'Jane Doe' };
    Contact.create.mockResolvedValue(newContact);

    const response = await request(app)
      .post('/api/contacts')
      .send({ name: 'Jane Doe' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newContact);
    expect(Contact.create).toHaveBeenCalledWith({ name: 'Jane Doe' });
  });

  it('DELETE /api/contacts/:id should delete a contact', async () => {
    Contact.destroy.mockResolvedValue(1);

    const response = await request(app).delete('/api/contacts/1');

    expect(response.status).toBe(204);
    expect(Contact.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('PUT /api/contacts/:id should update an existing contact', async () => {
    const updatedContact = { id: 1, name: 'Updated Name' };
    Contact.findByPk.mockResolvedValue({
      update: jest.fn().mockResolvedValue(updatedContact),
    });

    const response = await request(app)
      .put('/api/contacts/1')
      .send({ name: 'Updated Name' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedContact);
    expect(Contact.findByPk).toHaveBeenCalledWith(1);
  });
});
