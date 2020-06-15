<template>
  <div id="app">
    <main-app></main-app>
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue"; */

export default {
  name: "App"
  /*  components: {
    HelloWorld
  } */
};
</script>

<style>
@import "/scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;  */
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  scroll-behavior: smooth;
}
</style>
