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
const vidstatus = ref("Not done");
const showvid = ref(false);

function getStatus() {
  let url = "http://localhost:5000/data/nerf/" + video
  fetch(url, {
    method: 'GET',
    cache: 'no-cache'
  })
  .then(
    function(response) {
      response.blob().then(
        function(blob) {
          if(blob.type === 'video/mp4') {
            vidurl.value = URL.createObjectURL(blob);
            vidstatus.value = "Ready";
            showvid.value = true;
            clearInterval(intervalID);
          } else {
            blob.text().then(
              function(text) {
                vidstatus.value = text;
              }
            )
          }
        }
      )
    }
  )
  .catch(
    function(error) {
        vidstatus.value = "Connection error"
    }
  )
}

getStatus();
const intervalID = setInterval(getStatus, 30000);

onUnmounted(function() {clearInterval(intervalID); URL.revokeObjectURL(vidstatus.value);});
</script>

<template>
  <div class="about">
    <h1>Welcome to the waiting room, your video id is: <br> {{ video }}.</h1>
    <p>Copy the url to return to this page and get your video</p>
    <h4>Video status: {{vidstatus}}</h4>
    <p v-if='showvid'><a v-bind:href="vidurl">Download</a></p>
    
    <video v-if='showvid' width="640" height="480" controls>
    <source v-bind:src="vidurl" type="video/mp4">
    </video>
  </div>
</template>

<style>
div {
  text-align: center;
}
</style>

