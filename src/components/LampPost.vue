<template>
  <div class="poste">
    <svg width="40" height="420" viewBox="0 0 40 420" class="poste-svg">
      <rect x="16" y="60" width="8" height="360" fill="#555" />
      <ellipse cx="20" cy="50" rx="18" ry="10" fill="#777" />
      <circle cx="20" cy="40" r="8" fill="#ffeb8a" opacity="0.9" />
    </svg>
  </div>
  <div class="light-glow"></div>
</template>

<style scoped>
.poste {
  position: absolute;
  left: 6%;
  top: 18%;
  z-index: 3;
}

.poste-svg {
  height: 420px;
}

.light-glow {
  position: absolute;
  left: 4%;
  top: 12%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--glow-color, rgba(255, 255, 180, 0.25)), transparent);
  filter: blur(var(--glow-blur, 20px));
}
</style>
