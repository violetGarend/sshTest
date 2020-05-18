<template>
  <div>
    <!--    导航-->
    <navigation class="st-nav">
      <div slot="center">购物车({{$store.getters.sscml}})</div>
    </navigation>


    <scroll class="st-scroll" ref="scrolls">
      <show-shop class="st-shows" v-for="(item,index) in ssc" :key="index" :item="item"></show-shop>
    </scroll>
<!--    总算框-->
    <bottom-st :items="ssc"></bottom-st>

  </div>
</template>

<script>
  import Navigation from "components/common/navigation/Navigation";
  import Scroll from "../../components/common/scroll/Scroll";
  import ShowShop from "./stSeed/ShowShop";
  import BottomSt from "./stSeed/BottomSt";

  export default {
    name: "stMain",
    components: {
      Navigation,
      Scroll,
      ShowShop,
      BottomSt,
    },
    computed: {
      sscml() {
        return this.$store.state.commodityMessage.length
      },
      ssc(){
        return this.$store.state.commodityMessage
      }
    },
    activated() {
      this.$refs.scrolls.refreshs()
    }
  }
</script>

<style scoped>
  .st-nav {
    color: white;
    background-color: rgb(255, 129, 152);
  }

  .st-scroll {
    height: calc(100vh - 44px - 49px - 48px);
    /*background-color: #ff538d;*/
    overflow: hidden;
  }

  /*.st-shows {*/
  /*  height: 100%;*/
  /*  overflow: hidden;*/
  /*}*/
</style>