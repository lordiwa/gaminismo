<template>
  <div class="poste-hands" data-testid="poste-hands">
    <div
      v-for="(hand, index) in hands"
      :key="index"
      class="hand"
      :class="{ visible }"
      :style="{ transitionDelay: `${index * 150}ms` }"
      data-testid="poste-hand"
    >
      <svg
        :viewBox="hand.viewBox"
        width="80"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g v-html="hand.path" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

const hands = [
  {
    viewBox: '0 0 120 60',
    path: `<rect x="0" y="22" width="50" height="16" rx="5" fill="#3a3a3a"/>
           <circle cx="62" cy="12" r="7" fill="#4a4a4a"/>
           <circle cx="74" cy="8" r="7" fill="#4a4a4a"/>
           <circle cx="86" cy="10" r="7" fill="#4a4a4a"/>
           <circle cx="96" cy="16" r="7" fill="#4a4a4a"/>
           <circle cx="70" cy="38" r="6" fill="#4a4a4a"/>
           <rect x="45" y="6" width="40" height="32" rx="8" fill="#4a4a4a"/>`,
  },
  {
    viewBox: '0 0 120 60',
    path: `<rect x="0" y="22" width="50" height="16" rx="5" fill="#3a3a3a"/>
           <rect x="45" y="10" width="35" height="40" rx="10" fill="#4a4a4a"/>
           <rect x="55" y="6" width="10" height="14" rx="4" fill="#4a4a4a"/>`,
  },
  {
    viewBox: '0 0 120 60',
    path: `<rect x="0" y="22" width="50" height="16" rx="5" fill="#3a3a3a"/>
           <rect x="45" y="14" width="35" height="32" rx="10" fill="#4a4a4a"/>
           <rect x="70" y="22" width="40" height="8" rx="4" fill="#4a4a4a"/>
           <polygon points="110,22 120,26 110,30" fill="#4a4a4a"/>`,
  },
  {
    viewBox: '0 0 120 60',
    path: `<rect x="0" y="22" width="50" height="16" rx="5" fill="#3a3a3a"/>
           <circle cx="72" cy="28" r="18" fill="none" stroke="#4a4a4a" stroke-width="10"/>
           <rect x="45" y="18" width="20" height="24" rx="6" fill="#4a4a4a"/>`,
  },
  {
    viewBox: '0 0 120 60',
    path: `<rect x="0" y="22" width="50" height="16" rx="5" fill="#3a3a3a"/>
           <rect x="45" y="14" width="35" height="32" rx="10" fill="#4a4a4a"/>
           <rect x="60" y="2" width="8" height="20" rx="3" fill="#4a4a4a" transform="rotate(-10 64 12)"/>
           <rect x="72" y="2" width="8" height="20" rx="3" fill="#4a4a4a" transform="rotate(10 76 12)"/>`,
  },
]
</script>

<style scoped>
.poste-hands {
  position: absolute;
  left: 19%;
  top: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 4;
}

.hand {
  opacity: 0;
  transform: translateX(-120px);
  transition: opacity var(--transition-speed, 0.8s) ease, transform var(--transition-speed, 0.8s) ease;
}

.hand.visible {
  opacity: 0.8;
  transform: translateX(0);
}
</style>
