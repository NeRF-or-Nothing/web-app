<script setup>
import Upload from '@/components/Upload.vue'
import {useRoute} from 'vue-router'

const props = defineProps({
  video: String
})

function getStatus() {
  console.log("Put in code to get video")
}

const route = useRoute();
const video = route.query.video;

getStatus()
const intervalID = setInterval(getStatus, 10000)
</script>

<template>
  <div class="about">
    <h1>Welcome to the waiting room, your video is {{ video }}.</h1>
    <p>Copy the url to return to this page and get your video.</p>
    <p>Video status: </p>
  </div>
</template>
