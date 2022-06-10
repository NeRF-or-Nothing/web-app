<script setup>
import ListItem from "./ListItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>What is NeRF?</template>
    In the last two years there has been an explosion of research surrounding
    NeRFs, or Neural Radiance Fields, as a new way to render 3D scenes from a
    set of 2D images. This technology is rapidly developing, and it may be the
    best path forwards to photorealistic rendering of viewpoints never before
    seen before by a camera. Many large research labs like Facebook AI and
    Google research are pursuing this technology in order to render realistic
    simulations for self-driving cars and to improve the usability of 3D scans.
    Our project, NeRF or Nothing, will be a web application based on this
    technology that allows people to input videos or collections of photos and
    render novel realistic views of the scene they captured. This will include
    the ability for users to create “flythroughs” or move virtual cameras
    through scene’s they have captured to create videos from unseen
    perspectives.
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>How do I use this website?</template>
    IDK dude
  </ListItem>
</template>
