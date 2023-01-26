import { defineStore } from 'pinia';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  telephoneNumber: string;
}

export const useContactStore = defineStore('contact', {
  state: () => ({
    entries: [] as Contact[],
    currentContact: {
      id: 0,
      firstName: '',
      lastName: '',
      telephoneNumber: '',
    } as Contact,
  }),

  getters: {
    getCurrentContact: (state) => state.currentContact,
    getContacts: (state) => state.entries,
  },

  actions: {
    setCurrentContact(contact: Contact) {
      this.currentContact = {
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        telephoneNumber: contact.telephoneNumber,
      };
    },

    addContact(contact: Contact) {
      this.entries.push(contact);
    },

    updateContact(contact: Contact) {
      const index = this.entries.findIndex((entry) => entry.id === contact.id);
      this.entries[index] = contact;
    },

    deleteContact(id: number) {
      const index = this.entries.findIndex((entry) => entry.id === id);
      this.entries.splice(index, 1);

      // reset current contact
      this.currentContact = {
        id: 0,
        firstName: '',
        lastName: '',
        telephoneNumber: '',
      };
    },

    filterContact(lastName: string) {
      const index = this.entries.findIndex((entry) => entry.lastName === lastName);

      // if entry does not exist, exit
      if (index === -1) return;

      this.currentContact = this.entries[index];
    },
  },
});

export default useContactStore;
