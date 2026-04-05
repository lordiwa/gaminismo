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
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  z-index: 5;
}

.trash {
  font-size: 90px;
  cursor: pointer;
  filter: drop-shadow(0 0 12px rgba(255, 0, 255, 0.6));
  transition: transform 0.3s ease;
}

.trash:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 20px rgba(0, 255, 65, 0.8));
}

.contact-box {
  background: #0a0028;
  padding: 16px 20px;
  margin-bottom: 12px;
  border: 3px ridge var(--neon-cyan, #00ccff);
  box-shadow: 0 0 15px rgba(0, 204, 255, 0.3);
  font-family: 'Courier New', monospace;
}

.contact-box p {
  color: var(--neon-green, #00ff41);
  text-shadow: 0 0 4px rgba(0, 255, 65, 0.3);
  font-size: 0.9rem;
  margin-bottom: 4px;
}
</style>
