<template>
  <div class="contact">
    <div class="trash" data-testid="trash-icon" @click="showContact = !showContact">
      🗑
    </div>
    <div v-if="showContact" class="contact-box" data-testid="contact-box">
      <p>Email: {{ contact.email }}</p>
      <p>Instagram: {{ contact.instagram }}</p>
      <p>Github: {{ contact.github }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { contact } from '@/data/portfolio'

const showContact = ref(false)
</script>

<style scoped>
.contact {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--bg-contact);
}

.trash {
  font-size: 90px;
  cursor: pointer;
}

.contact-box {
  background: #1f1f1f;
  padding: 20px;
  margin-top: 20px;
}
</style>
