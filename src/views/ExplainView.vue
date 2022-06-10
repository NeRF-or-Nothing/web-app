<script setup>
import Explanation from '@/components/AboutNerf.vue'
</script>

<template>
  <div class="about">
    <h1>About Neural Radiance Fields</h1>
    <Explanation />
  </div>
</template>

<style>
@media {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
