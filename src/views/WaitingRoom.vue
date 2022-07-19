<script setup>
import Upload from '@/components/Upload.vue'
import {useRoute} from 'vue-router'
import { onUnmounted, ref } from 'vue'

const props = defineProps({
  video: String
})

const route = useRoute();
const video = route.query.video;

const vidurl = ref("");

function getStatus() {
  let url = "http://localhost:5000/video/" + video
  fetch(url, {
    method: 'GET',
    cache: 'no-cache'
  })
  .then(
    function(response) {
      response.blob().then(
        function(blob) {
          vidurl.value = URL.createObjectURL(blob);
        }
      )
    }
  )
  .catch(
    function(error) {
      console.log(error)
    }
  )
}

getStatus()
const intervalID = setInterval(getStatus, 30000)

onUnmounted(() => clearInterval(intervalID))
</script>

<template>
  <div class="about">
    <h1>Welcome to the waiting room, your video is {{ video }}.</h1>
    <p>Copy the url to return to this page and get your video.</p>
    <p>Video status: <a v-bind:href="vidurl">Download</a></p>
  </div>
</template>
