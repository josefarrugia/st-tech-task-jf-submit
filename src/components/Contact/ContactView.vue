<script setup lang="ts">
import { ref } from 'vue';
import { useContactStore } from '@/stores/contact';

const storeContact = useContactStore();
const { addContact } = storeContact;

const firstName = ref('');
const lastName = ref('');
const telephoneNumber = ref('');

function handleAddContact() {
  const contact = {
    id: Math.floor(Math.random() * 100),
    firstName: firstName.value,
    lastName: lastName.value,
    telephoneNumber: telephoneNumber.value,
  };
  addContact(contact);
}
</script>

<template>
  <div>
    <div class="p-4">
      <div class="grid grid-cols-2 py-4">
        <label for="firstName">First Name: </label>
        <input type="text" v-model="firstName" class="border-red-600 border" placeholder="First Name" />
      </div>
      <div class="grid grid-cols-2 py-4">
        <label for="lastName">Last Name: </label>
        <input type="text" v-model="lastName" class="border-red-600 border" placeholder="Last Name" />
      </div>
      <div class="grid grid-cols-2 py-4">
        <label for="lastName">Telephone Number: </label>
        <input type="text" v-model="telephoneNumber" class="border-red-600 border" placeholder="Telephone Number" />
      </div>
    </div>
    <div class="flex justify-center py-4">
      <button class="bg-blue-600 text-white p-4" @click="handleAddContact">Add Contact</button>
    </div>
  </div>
</template>
