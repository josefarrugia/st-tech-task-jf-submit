<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useContactStore } from '@/stores/contact';

const storeContact = useContactStore();
const { getContacts } = storeToRefs(storeContact);
</script>

<template>
  <div>
    <table class="w-full">
      <thead>
        <tr>
          <th class="text-left pb-8">First Name</th>
          <th class="text-left pb-8">Last Name</th>
          <th class="text-left pb-8">Telephone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-blue-100" v-for="contact in getContacts" :key="contact.id">
          <td class="py-4">{{ contact.firstName }}</td>
          <td class="py-4">{{ contact.lastName }}</td>
          <td class="py-4">{{ contact.telephoneNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
