<template>
  <div class="props">
    <span
      v-for="prop in urbanProps"
      :key="prop.className"
      class="prop"
      :class="prop.className"
    >
      {{ prop.emoji }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { urbanProps } from '@/data/portfolio'
</script>

<style scoped>
.props {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.prop {
  position: absolute;
  font-size: 28px;
  opacity: 0.6;
  filter: drop-shadow(0 0 6px rgba(255, 0, 255, 0.4));
  animation: star-twinkle 2s ease-in-out infinite;
}

.prop:nth-child(2n) {
  animation-delay: 0.7s;
}

.prop:nth-child(3n) {
  animation-delay: 1.4s;
}

@keyframes star-twinkle {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.9; }
}

.p1 { top: 10%; left: 40%; }
.p2 { top: 20%; right: 10%; }
.p3 { top: 60%; left: 8%; }
.p4 { bottom: 20%; right: 25%; }
.p5 { bottom: 10%; left: 35%; }
.p6 { top: 40%; right: 40%; }
</style>
