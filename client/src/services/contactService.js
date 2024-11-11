import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getContacts() {
    return apiClient.get('/contacts');
  },
  addContact(contact) {
    return apiClient.post('/contacts', contact);
  },
  deleteContact(id) {
    return apiClient.delete(`/contacts/${id}`);
  },
  updateContact(id, contact) {
    return apiClient.put(`/contacts/${id}`, contact);
  },
};
