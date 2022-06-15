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
    <template #heading>Our Project Lead: Eric</template>
    Eric Nelson, CS major. I'm interested in the machine learning and computer
    vision aspects of this project as well as ensuring everyone's individual
    success.
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Amaan</template>
    Amaan Qureshi, RPI EE & Math dual who enjoys CS and reverse engineering in
    his free time and is working on the API for this project
  </ListItem>

  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Gray</template>
    Hao(Grey) Ding, CS & MATH dual major student, enjoy video games and movies,
    plan to clear Death Stranding by October, current struggling in Vue and Js
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Jackie</template>
    Jiawei (Jackie) Zhao. I am a RPI CS duo ECON student and working on the
    front end portion of this project. Learning vue.js framwork, HTML, CSS along
    the way.
  </ListItem>
</template>
