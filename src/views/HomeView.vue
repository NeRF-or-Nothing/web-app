<script setup>
import Upload from '@/components/Upload.vue'

function log(file) {
  console.log(file.name)
}
</script>


<template>
  <main>
    <h1>Upload a video and set it up yeah!</h1>
    <Upload @send-file='(file) => {log(file)}'/>
  </main>
</template>
