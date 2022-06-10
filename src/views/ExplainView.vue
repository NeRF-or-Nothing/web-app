<script setup>
import ListItem from '@/components/ListItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
</script>

<template>
  <div class="about">
    <h1>About Neural Radiance Fields</h1>
    <ListItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>What is NeRF?</template>
      Neural Radiance Fields are a something something something neural network machines what
    </ListItem>

    <ListItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>How do I use this website?</template>
      IDK dude
    </ListItem>
  </div>
</template>
