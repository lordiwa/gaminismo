<template>
  <div class="cartel" :class="{ visible }" :style="{ transitionDelay: `${delay}ms` }">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  visible: boolean
  delay: number
}>()
</script>

<style scoped>
.cartel {
  background: var(--bg-card);
  border-left: 5px solid var(--accent-border);
  padding: 14px;
  transform: translateX(-120px);
  opacity: 0;
  transition: var(--transition-speed);
}

.cartel.visible {
  transform: translateX(0);
  opacity: 1;
}
</style>
