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
    <template #heading>Project Lead: Eric</template>
    Eric Nelson, CS major. I'm interested in the machine learning and computer
    vision aspects of this project as well as ensuring everyone's individual
    success.
  </ListItem>

  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Anthony</template>
    Anthony DiGiovanna, CS major. I'm fascinated by machine learning and
    artificial intelligence. Working with structure from motion and NeRFs on the
    backend.
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
      <ToolingIcon />
    </template>
    <template #heading>Dylan</template>
    Dylan Taylor, CS major. I enjoy how computation is used to solve everyday
    problems, and I'm working more on the services and managing containers area
    of the project.
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Sam</template>
    I'm Sam DeMarrais, a computer science and computational biology major. I'm
    working on the front end, and I hope to learn more about how machine
    learning, web servers, and websites function by working on this project.
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Yuk Ting</template>
    Yuk Ting Kong, CS major, building python web server with flask.
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Annie</template>
    Annie Xu, CSE dual CS major at RPI. I am currently working on back end of
    the project with a focus on structure for motion. I looove snacking and
    badminton.
  </ListItem>

  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Keqian</template>
    Keqian Wang, CS major, working on accepting video from front end with flask
    in python
  </ListItem>

  <ListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Grey</template>
    Hao(Grey) Ding, CS & MATH dual major student, enjoy video games and movies,
    plan to clear Death Stranding by October, current struggling in Vue and Js
  </ListItem>

  <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Jackie</template>
    Jiawei (Jackie) Zhao. I am a RPI CS dual ECON student and working on the
    front end portion of this project. Learning vue.js framwork, HTML, CSS along
    the way.
  </ListItem>

   <ListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Jane</template>
    Jialin(Jane) Zou, CS major at RPI. I am currently working on the front-end portion
    of this project. But, I'm willing to work on the back-end too. I love foods and
    swimming.
  </ListItem>
</template>
