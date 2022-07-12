<script setup>
import Upload from '@/components/Upload.vue'
import {useRoute} from 'vue-router'

const props = defineProps({
  video: String
})

const route = useRoute();
const video = route.query.video;
</script>

<template>
  <div class="about">
    <h1>Welcome to the waiting room, {{ video }}</h1>
  </div>
</template>
