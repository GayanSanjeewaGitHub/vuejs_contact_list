<template>
    <div class="contact-list">
      <h1>Contact List</h1>
      <router-link to="/add">Add Contact</router-link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.id">
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td>
              <button @click="deleteContact(contact.id)">Delete</button>
              <button @click="editContact(contact)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
import contactService from '@/services/contactService'

export default {
  name: 'ContactList',
  data () {
    return {
      contacts: []
    }
  },
  created () {
    contactService.getContacts().then(response => {
      this.contacts = response.data
    })
  },
  methods: {
    deleteContact (id) {
      contactService.deleteContact(id).then(() => {
        this.contacts = this.contacts.filter(contact => contact.id !== id)
      })
    },
    editContact (contact) {
      // logic to open edit form and update contact
    }
  }
}
</script>

  <style>
  .contact-list table {
    width: 100%;
  }
  </style>
