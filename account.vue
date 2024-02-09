<script setup>
import Explanation from '@/components/createacc.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  //inheritLocale: true,
  //useScope: 'local'
})
</script>

<template>
    <form>
        <h1> Sign Up Today!</h1>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm Password">
        <button> Sign Up</button>
    </form>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
}

body {
    align-items: center;
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: rgb(29, 30, 34);
    background-size: cover;
}

form {
    margin-top: 50px;
    text-align: center;
}

input {
    border: none;
    outline: none;
    display: block;
    width: 350px;
    height: 40px;
    margin: 20px;
    font-size: 20px;
    background: transparent;
    border-bottom: 1px solid black;
    color: white;
}

button {
    margin-top: 20px;
    width: 350px;
    height: 40px;
    font-size: 20px;
    border: none;
    background-color: grey;
    color: white;

}

form h1 {
    margin-bottom: 20px;
    color: rgb(221, 202, 126);
}
</style>