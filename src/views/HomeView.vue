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
      function(data) {
        let id = data.text();
        router.push({
          path: `waitingroom`,
          query: { video: id },
          props: true
        });
      }
    )
    .catch(
      function(error) {
        console.log(error)
      }
    )
  } else {
    console.log('File type unknown.')
  }
}

function log(file) {
  console.log(file.name)
}
</script>


<template>
  <main>
    <h1>Upload a video and send it to the server:</h1>
    <Upload @send-file='(file) => {post(file)}'/>
  </main>
</template>
