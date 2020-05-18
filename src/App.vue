<template>
  <div id="app">
    <!--    <Home></Home>-->
    <keep-alive exclude="EveryGoods">
      <router-view></router-view>
    </keep-alive>
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
