<script setup>
import Upload from '@/components/Upload.vue'

function post(file) {
  if(file != null && file.type !== '' && file.type !== 'unknown') {
    let formData = new FormData();
    formData.append("video", file);
    fetch("http://localhost:4000/video", {
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
  } else {
    console.log('File type unknown')
  }
}

function log(file) {
  console.log(file.name)
}
</script>


<template>
  <main>
    <h1>Upload a video and set it up yeah!</h1>
    <Upload @send-file='(file) => {post(file)}'/>
  </main>
</template>
