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
    <template #heading>  {{t('member_page.Eric_general')}}</template>
    {{t('member_page.Eric_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{t('member_page.Anthony_general')}}</template>
    {{t('member_page.Anthony_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{t('member_page.Amaan_general')}}</template>
    {{t('member_page.Amaan_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{t('member_page.Dylan_general')}}</template>
    {{t('member_page.Dylan_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{t('member_page.Sam_general')}}</template>
    {{t('member_page.Sam_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{t('member_page.Yuk_Ting_general')}}</template>
   {{t('member_page.Yuk_Ting_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{t('member_page.Annie_general')}}</template>
    {{t('member_page.Annie_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{t('member_page.Keqian_general')}}</template>
    {{t('member_page.Keqian_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{t('member_page.Grey_general')}}</template>
    {{t('member_page.Grey_detail')}}
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{t('member_page.Jackie_general')}}</template>
    {{t('member_page.Jackie_detail')}}
  </ListItem>
</template>
