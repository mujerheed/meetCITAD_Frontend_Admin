<template>
  <v-app class="style">

    <NavigationBar />
    
    <v-main>
        <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import NavigationBar from './views/NavigationBar.vue';

export default {
  name: 'App',

  components: {
    NavigationBar,
  },

  
};
</script>

<style>
 .style {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: rgb(52, 52, 211);
    color: white;
  }
</style>