<script setup>
import ListItem from "./ListItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  //inheritLocale: true,
  //useScope: 'local'
})
</script>

<template>
  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{t('about_page.What is NeRF?')}}</template>
    {{t('about_page.summary')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{t('about_page.How_to_use')}}</template>
    {{t('about_page.idk')}}
  </ListItem>
</template>
