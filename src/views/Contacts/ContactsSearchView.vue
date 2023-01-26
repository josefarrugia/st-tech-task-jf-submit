<script setup lang="ts">
import { ref } from 'vue';
import ContactCard from '@/components/Contact/ContactCard.vue';

import { useContactStore } from '@/stores/contact';
import { storeToRefs } from 'pinia';

const storeContact = useContactStore();

const { getCurrentContact } = storeToRefs(storeContact);
const { filterContact } = storeContact;

const searchItem = ref('');
const showCard = ref(false);

function handleFilterContact() {
  filterContact(searchItem.value);

  if (getCurrentContact.value.id === 0) return;
  showCard.value = true;
}
</script>

<template>
  <div>
    <div class="mb-16">
      <input
        type="text"
        v-model="searchItem"
        class="border border-blue-600 p-4 mr-4 rounded-xl"
        placeholder="Last Name"
      />
      <button class="bg-blue-600 text-white p-4 px-8 mr-2 rounded-xl" @click="handleFilterContact">Search</button>
    </div>

    <ContactCard v-if="showCard" @reset-search="searchItem = ''" />
  </div>
</template>
