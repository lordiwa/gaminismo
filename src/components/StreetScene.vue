<template>
  <div class="street">
    <LampPost />
    <InfoPosters />
    <UrbanProps />
    <FaceBuilder />
  </div>
</template>

<script setup lang="ts">
import LampPost from './LampPost.vue'
import InfoPosters from './InfoPosters.vue'
import UrbanProps from './UrbanProps.vue'
import FaceBuilder from './FaceBuilder.vue'
</script>

<style scoped>
.street {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
