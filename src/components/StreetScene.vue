<template>
  <div class="street">
    <LampPost />
    <InfoPosters />
    <UrbanProps />
    <FaceBuilder />
    <ContactTrash />
    <ImageCarousel :images="carouselImages" />
  </div>
</template>

<script setup lang="ts">
import LampPost from './LampPost.vue'
import InfoPosters from './InfoPosters.vue'
import UrbanProps from './UrbanProps.vue'
import FaceBuilder from './FaceBuilder.vue'
import ContactTrash from './ContactTrash.vue'
import ImageCarousel from './ImageCarousel.vue'

const carouselImages: string[] = [
  '/carrusel/1.png',
  '/carrusel/2.png',
  '/carrusel/3.png',
  '/carrusel/Captura.JPG',
  '/carrusel/Captura2.JPG',
  '/carrusel/render_1.png',
  '/carrusel/trob.png',
  '/carrusel/viejo.png',
  '/carrusel/viejo2.png',
]
</script>

<style scoped>
.street {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 30px;
  border: 4px ridge var(--neon-pink);
  box-shadow: inset 0 0 60px rgba(0, 0, 50, 0.8);
}
</style>
