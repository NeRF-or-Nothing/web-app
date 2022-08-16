<script setup>
import Upload from '@/components/Upload.vue'
import router from '@/router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  //inheritLocale: true,
  //useScope: 'local'
})

function post(file) {
  if (file != null && file.type !== "" && file.type !== "unknown") {
    let formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:5000/video", {
      method: "POST",
      cache: "no-cache",
      body: formData,
    })
      .then(function (response) {
        response.text().then(function (text) {
          console.log(text);
          router.push({
            path: `waitingroom`,
            query: { video: text },
            props: true,
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log("File type unknown.");
  }
}
</script>

<template>
  <main>

<!--    <h1>{{t('main_page.drag')}}</h1>-->
    <Upload @send-file='(file) => {post(file)}'/>
  </main>

  <ListItem>
    <h1>Some guide lines for the input videos</h1>

    <h2>
      1. Videos should be taken looking inward at a subject while orbiting
      around the subject
    </h2>

    <h2>
      2. Video should cover all the phases of the subject for the optimal
      result.
    </h2>

    <h2>
      3. The capture of the video should be slow and steady for both the best
      result and highest definition possible of the object
    </h2>
  </ListItem>
</template>



