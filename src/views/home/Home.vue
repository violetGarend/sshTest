<template>
  <div id="home">
    <Navigation class="home-nav">
      <div slot="center">购物街</div>
    </Navigation>
    <home-banners :banners="banners"></home-banners>
    <home-recommdends :recommdends="recommdends"></home-recommdends>
    <home-feature></home-feature>
    <tab-control :controlArray="['流行','新款','精选']" class="tab-control"></tab-control>
    <ul>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
      <li>占位</li>
    </ul>
  </div>
</template>

<script>
  import Navigation from "@/components/common/navigation/Navigation";

  import HomeBanners from "./HomeSeed/HomeBanners";
  import HomeRecommdends from "./HomeSeed/HomeRecommdends";
  import HomeFeature from "./HomeSeed/HomeFeature";

  import TabControl from "components/common/tabcontrol/TabControl";



  import {getHomeMultidata} from "@/network/home";//axios

  export default {
    name: "Home",
    components: {
      Navigation,
      HomeBanners,
      HomeRecommdends,
      HomeFeature,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommdends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommdends = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  #home{
    padding-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>