<template>
  <div id="app">
<!--    <Home></Home>-->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

  import MainTabBar from "components/content/tabbar/MainTabBar";
  // import Home from "@/views/home/Home";

  export default {
    name: 'App',
    components: {
      MainTabBar,
      // Home
    }
  }
</script>

<style>
  @import url('assets/css/base.css');
</style>
