import { createRouter, createWebHistory } from 'vue-router';

import ContactsListView from '@/views/Contacts/ContactsListView.vue';
import ContactsAddView from '@/views/Contacts/ContactsAddView.vue';
import ContactsSearchView from '@/views/Contacts/ContactsSearchView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContactsAddView,
    },
    {
      path: '/contacts',
      name: 'Contact List',
      component: ContactsListView,
    },
    {
      path: '/add',
      name: 'Contact Add',
      component: ContactsAddView,
    },
    {
      path: '/search',
      name: 'Contact Search',
      component: ContactsSearchView,
    },
  ],
});

export default router;
