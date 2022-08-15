<script setup>
import Explanation from '@/components/AboutNerf.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  //inheritLocale: true,
  //useScope: 'local'
})
</script>

<template>
  <div class="about">
    <h1> {{t('about_page.about_NeRF_detail')}}</h1>
    <Explanation />
  </div>
</template>
