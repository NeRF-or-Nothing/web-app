<script setup>
import { useI18n } from 'vue-i18n'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
const { t } = useI18n({
  //inheritLocale: true,
  //useScope: 'local'
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{t('general.homepage')}}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}
</style>
