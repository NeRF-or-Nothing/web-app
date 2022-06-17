<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>



<template>
    <input type="file" accept="video/*">
    <p>Drag or select video file</p>
    <button type="submit">Upload</button>
</template>

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
