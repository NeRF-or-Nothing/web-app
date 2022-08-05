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
    <template #heading
      >Front-end Structure and Framwork -- Vue.js with i18n plugin</template
    >
    For the website portion of this project, we chose to use the java script
    framework called Vue to host all the components for the website. Compare to
    other popular frameworks, Vue is a lot more popular, and relatively easy to
    get started for beginners, also, it support a wide range of javascript
    libraries that could be useful for the project. The i18n plugin as mentioned
    is to let the website have multi-language support, as that can let more
    users around the world have a taste of what Nerf technology is all about.
    <br />
    <br />
    The purpose of the Frontend is to create a user interface that first can
    display information about the technology, more importantly, it servers as an
    input source for users to input the videos that he/she wants to create 3d
    object for. Therefore, it’s crucial for the website to have the ability to
    take videos from user input, and send it to the backend for processing via
    the web server.
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading
      >Back-end Structure and Framwork -- Neural Radiance Field Technology via
      Colmap.
    </template>
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading
      >Webserver Structure and Framwork -- Flask with Mongdb and
      Rabbitmq</template
    >
  </ListItem>
</template>
