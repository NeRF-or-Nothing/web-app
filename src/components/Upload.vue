
<!-- Change this script to setup! -->

<script setup>
import {ref} from 'vue'

const emits = defineEmits(["sendFile"])
const filename = ref("Drag or select video file")
const file =  ref(null)
function setFile() {
  console.log("what")
  var curfile = document.getElementById('input').files[0]
  file.value = curfile
  filename.value = curfile.name
}
</script>

<template>
    <input id="input" type="file" @input='setFile()'>
    <p>{{filename}}</p>
    <button type="submit" @click='$emit("sendFile", file)'></button>
</template>

<!-- TODO: Change this styling to be more generalized -->

<style scoped>
p{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 170px;
  pointer-events: none;
  border: 1px dashed var(--color-contrast);
}
input{
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}
button{
  top: 5px;
  background: var(--color-theme);
  border: none;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border-bottom: 4px solid var(--color-themebackgroundmix);
  color: var(--color-contrast);
  transition: all 0.5s ease;
  outline: none;
}
button:hover{
  background: var(--color-themebackgroundmix);
  color: var(--color-themecontrastmix);
}
button:active{
  border:0;
}
</style>
