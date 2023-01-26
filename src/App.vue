<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="container mx-auto py-8">
      <nav class="flex gap-4 bg-blue-200 p-4">
        <RouterLink to="/contacts" class="font-semibold">Contacts</RouterLink>
        <RouterLink to="/add" class="font-semibold">Add</RouterLink>
        <RouterLink to="/search" class="font-semibold">Search</RouterLink>
      </nav>
    </div>
  </header>
  <main class="container mx-auto">
    <RouterView />
  </main>
</template>
