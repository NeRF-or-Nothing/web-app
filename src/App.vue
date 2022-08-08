<!-- TODO: Check for duplicate user ids by querying the server -->
<!-- neeed to change the format and update the home page, add the video/demo to home -->

<script setup>
import { RouterLink, RouterView } from "vue-router";
import cookies from "vue-cookies";
import MainPage from "@/components/Header.vue";
</script>

<template>
  <header>
    <div id="app" class = "center-me">
      <img alt = "Nerf logo" class = "logo" src="./assets/logo.png" width="200" height="200" />
    </div>
    <div class="nerf_main">
      <MainPage class="nerf_title" msg="NeRF or Nothing!" />
      <nav>
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/explain">About NeRF</RouterLink>
        <RouterLink to="/upload">Upload video</RouterLink>
        <RouterLink to="/contact">Our team</RouterLink>
        <RouterLink to="/waitingroom">Waiting room</RouterLink>
     
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


.green {
  text-decoration: none;
  color: var(green);
  transition: 0.4s;
}

.darkgreen {
  color: hsla(160, 100%, 37%, 1);
}

.nerf_title{
  margin-bottom: 1px;
    font-size: 6vw;
    margin-top: 0;
    font-family: 'Varela Round',sans-serif;
    color: #4d4d4d;
    line-height: 65px;
    font-weight: 700;
    letter-spacing: 4px;
}


.nerf_main{
    padding-top: 0;
    background-color: #fff;
    padding-bottom: 2px;
    font-family: Arial,'Helvetica Neue',Helvetica,sans-serif;
    color: #333;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
     left: -120px;

}




@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {

  text-align: center;
  margin-top: 2rem;
 
  right: auto;
  position: relative;
  float: left;  
  left: -85px;
    background-color: rgb(227, 251, 227);

  font-style: "color: black";


}

nav a.router-link-exact-active {
  color: var(--color-text);
   font-size: 22px;
 font-style: "color: black";

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  font-family: Arial,'Helvetica Neue',Helvetica,sans-serif;
  font-style: "color: black";
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 20px;
  text-decoration: none;
  font-style: "color: black";

}

nav a:first-of-type {
  border: 0;
}

body {
  display: block;
}

header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {

  position: absolute;
  top: -111px;
  left: -150px;


}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}




</style>
