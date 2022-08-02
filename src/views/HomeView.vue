<script setup>
import Upload from '@/components/Upload.vue'
import router from '@/router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  //inheritLocale: true,
  //useScope: 'local'
})

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
      data =>
      router.push({
        path: '/waitingroom',
        params: { id: 'testid' },
        props: true
      }))
    .catch(
      console.log("Error")
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
    <h1>{{t('main_page.drag')}}</h1>
    <Upload @send-file='(file) => {post(file)}'/>
  </main>
</template>
