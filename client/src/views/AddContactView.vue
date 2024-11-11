<template>
    <div class="add-contact">
      <h1>Add Contact</h1>
      <form @submit.prevent="addContact">
        <input v-model="name" placeholder="Name" required />
        <input v-model="email" placeholder="Email" type="email" required />
        <input v-model="phone" placeholder="Phone" required />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  </template>

<script>
import contactService from '@/services/contactService'

export default {
  name: 'AddContact',
  data () {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    addContact () {
      const newContact = { name: this.name, email: this.email, phone: this.phone }
      contactService.addContact(newContact).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

  <style>
  .add-contact {
    display: flex;
    flex-direction: column;
  }
  </style>
