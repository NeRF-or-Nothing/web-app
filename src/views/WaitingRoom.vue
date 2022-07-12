<script setup>
import Upload from '@/components/Upload.vue'
import {useRoute} from 'vue-router'

const props = defineProps({
  video: String
})

const route = useRoute();
const video = route.query.video;

function getStatus() {
  console.log("running")
  let url = "http://localhost:5000/video/" + video
  fetch(url, {
    method: 'GET',
    cache: 'no-cache'
  })
  .then(
    function(response) {
      response.text().then(
        function (text) {
          console.log(text);
        }
      );
    }
  )
  .catch(
    function(error) {
      console.log(error)
    }
  )
}


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
