<script setup>
import Upload from '@/components/Upload.vue'
import router from '@/router'


function post(file) {
  if(file != null && file.type !== '' && file.type !== 'unknown') {
    let formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:5000/video", {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      body: formData
    })
    .then(
      console.log("greetings"))
    .catch(
      console.log("fuck")
    )
    router.push({
      path: '/waitingroom'
    })
  } else {
    console.log('File type unknown')
  }
}

function log(file) {
  console.log(file.name)
}
</script>

<template>
  <div class="about">
    <h1>Welcome to the waiting room</h1>
  </div>
</template>
