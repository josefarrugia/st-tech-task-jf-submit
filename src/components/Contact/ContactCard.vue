<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useContactStore } from '@/stores/contact';

const storeContact = useContactStore();
const { updateContact, deleteContact } = storeContact;
const { getCurrentContact } = storeToRefs(storeContact);

const emit = defineEmits(['resetSearch']);

const firstName = ref(getCurrentContact.value ? getCurrentContact.value.firstName : '');
const lastName = ref(getCurrentContact.value ? getCurrentContact.value.lastName : '');
const telephoneNumber = ref(getCurrentContact.value ? getCurrentContact.value.telephoneNumber : '');

function handleUpdateContact() {
  updateContact({
    id: getCurrentContact.value.id,
    firstName: firstName.value,
    lastName: lastName.value,
    telephoneNumber: telephoneNumber.value,
  });

  if (
    firstName.value === getCurrentContact.value.firstName &&
    lastName.value === getCurrentContact.value.lastName &&
    telephoneNumber.value === getCurrentContact.value.telephoneNumber
  )
    return;

  firstName.value = '';
  lastName.value = '';
  telephoneNumber.value = '';

  emit('resetSearch');
}

function handleDeleteContact(id: number) {
  deleteContact(id);

  firstName.value = '';
  lastName.value = '';
  telephoneNumber.value = '';

  emit('resetSearch');
}
</script>

<template>
  <div v-if="getCurrentContact">
    <div>
      <div class="grid grid-cols-2 py-4">
        <label for="firstName">First Name: </label>
        <input type="text" v-model="firstName" class="border-blue-600 border p-4" placeholder="First Name" />
      </div>
      <div class="grid grid-cols-2 py-4">
        <label for="lastName">Last Name: </label>
        <input type="text" v-model="lastName" class="border-blue-600 border p-4" placeholder="Last Name" />
      </div>
      <div class="grid grid-cols-2 py-4">
        <label for="lastName">Telephone Number: </label>
        <input
          type="text"
          v-model="telephoneNumber"
          class="border-blue-600 border p-4"
          placeholder="Telephone Number"
        />
      </div>
    </div>
    <div class="flex justify-center py-4">
      <button class="bg-blue-600 text-white p-4 mr-8" @click="handleUpdateContact">Update Contact</button>
      <button class="bg-red-600 text-white p-4" @click="handleDeleteContact(getCurrentContact.id)">
        Delete Contact
      </button>
    </div>
  </div>
</template>
