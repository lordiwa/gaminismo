<template>
  <div class="galaxy-layer">
    <div class="nebula"></div>
    <div class="spiral"></div>
    <div class="stars stars-1"></div>
    <div class="stars stars-2"></div>
    <div class="stars stars-3"></div>
  </div>
</template>

<style scoped>
.galaxy-layer {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.nebula {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 700px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background:
    radial-gradient(ellipse at 45% 48%, rgba(255, 0, 255, 0.1), transparent 55%),
    radial-gradient(ellipse at 55% 42%, rgba(0, 204, 255, 0.08), transparent 50%),
    radial-gradient(ellipse at 50% 55%, rgba(0, 255, 65, 0.05), transparent 45%),
    radial-gradient(ellipse at 38% 38%, rgba(255, 255, 0, 0.04), transparent 40%),
    radial-gradient(ellipse at 60% 58%, rgba(255, 0, 255, 0.06), transparent 50%);
  filter: blur(30px);
  opacity: 0.4;
  mix-blend-mode: screen;
}

.spiral {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  transform: translate(-50%, -50%) scaleX(1.4);
  border-radius: 50%;
  background: conic-gradient(
    from 0deg at 50% 50%,
    rgba(255, 0, 255, 0.08),
    transparent 30%,
    rgba(0, 204, 255, 0.06),
    transparent 60%,
    rgba(0, 255, 65, 0.05),
    transparent 90%
  );
  filter: blur(20px);
  opacity: 0.35;
  mix-blend-mode: screen;
  animation: spiral-rotate 120s linear infinite;
}

.stars {
  position: absolute;
  inset: 0;
  mix-blend-mode: screen;
}

.stars-1 {
  background:
    radial-gradient(1px 1px at 50% 45%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 48% 52%, #ffccff, transparent),
    radial-gradient(1px 1px at 52% 47%, #ccffff, transparent),
    radial-gradient(1.2px 1.2px at 46% 50%, #fff, transparent),
    radial-gradient(1px 1px at 54% 53%, #ffffcc, transparent),
    radial-gradient(1.5px 1.5px at 44% 44%, #fff, transparent),
    radial-gradient(1px 1px at 56% 48%, #ffccff, transparent),
    radial-gradient(1.2px 1.2px at 42% 56%, #ccffff, transparent);
  animation: twinkle-slow 8s ease-in-out infinite;
}

.stars-2 {
  background:
    radial-gradient(1.2px 1.2px at 47% 43%, #fff, transparent),
    radial-gradient(1px 1px at 53% 55%, #ccffcc, transparent),
    radial-gradient(1.5px 1.5px at 45% 51%, #ffccff, transparent),
    radial-gradient(1px 1px at 55% 46%, #fff, transparent),
    radial-gradient(1.2px 1.2px at 43% 53%, #ffffcc, transparent),
    radial-gradient(1px 1px at 57% 49%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 49% 57%, #ccffff, transparent);
  animation: twinkle-slow 10s ease-in-out infinite;
  animation-delay: 3s;
}

.stars-3 {
  background:
    radial-gradient(1px 1px at 51% 44%, #ffccff, transparent),
    radial-gradient(1.2px 1.2px at 46% 54%, #fff, transparent),
    radial-gradient(1px 1px at 54% 50%, #ccffcc, transparent),
    radial-gradient(1.5px 1.5px at 41% 47%, #fff, transparent),
    radial-gradient(1px 1px at 58% 52%, #ffffcc, transparent),
    radial-gradient(1.2px 1.2px at 50% 42%, #ccffff, transparent);
  animation: twinkle-slow 13s ease-in-out infinite;
  animation-delay: 7s;
}

@keyframes spiral-rotate {
  from { transform: translate(-50%, -50%) scaleX(1.4) rotate(0deg); }
  to { transform: translate(-50%, -50%) scaleX(1.4) rotate(360deg); }
}

@keyframes twinkle-slow {
  0%, 40% { opacity: 0.15; }
  45% { opacity: 0.9; }
  50% { opacity: 0.6; }
  55% { opacity: 0.85; }
  60%, 100% { opacity: 0.15; }
}
</style>
