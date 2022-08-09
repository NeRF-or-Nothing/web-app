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
      cache: 'no-cache',
      body: formData
    })
    .then(
      function(response) {
        response.text().then(
          function (text) {
            console.log(text);
            router.push({
              path: `waitingroom`,
              query: { video: text },
              props: true
            })
          }
        );
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
</script>


<template>
  <main>
    <h1>{{t('main_page.drag')}}</h1>
    <Upload @send-file='(file) => {post(file)}'/>
  </main>
</template>
