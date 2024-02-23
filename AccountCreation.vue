<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  //inheritLocale: true,
  //useScope: 'local'
})

const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const signUp = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
}

// const endpoint = THE API ENDPOINT NEED TO ADD EVENTUALLY

const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  };

try {
    const response = await fetch (endpoint, requestOptions);
    const data = await response.json();

    if (response.ok) {
      console.log(data);
    } else {
      console.error(data);
    }
  } catch (error) {
    console.error(error);
  }
</script>

<template>
    <form>
        <h1> Sign Up Today!</h1>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm Password">
        <button> Join</button>
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
    width:50%;
}

form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    border-bottom: 1px solid white;
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
    color: #9f9f9f;
}
</style>