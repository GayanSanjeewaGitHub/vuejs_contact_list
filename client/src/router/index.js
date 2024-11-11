import Vue from 'vue'
import Router from 'vue-router'
import ContactListView from '../views/ContactListView.vue';  // Use relative path
import AddContactView from '../views/AddContactView.vue';  // Use relative path


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContactListView',
      component: ContactListView
    },
    {
      path: '/add',
      name: 'AddContactView',
      component: AddContactView
    }
  ]
})
