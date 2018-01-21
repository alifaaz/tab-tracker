<template>
  <div id="app">

    <v-app>
    <app-header></app-header>
    <transition mode="in-out" transition="slide-y-reverse-transition">
          <router-view/>
      
      </transition>  
    </v-app>

  </div>
</template>

<script>
import header from "./components/templates/header.vue";
export default {
  name: 'app',
  components: {
    appHeader:header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
