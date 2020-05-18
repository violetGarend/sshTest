<template>
  <div class="goods">
      <goods-seed v-for="(item,index) in goodsData" :item="item" :key="index"></goods-seed>
  </div>
</template>

<script>
  import GoodsSeed from "./GoodsSeed";
  // import BScroll from 'better-scroll'

  export default {
    name: "GoodsMain",
    components: {
      GoodsSeed
    },
    props: {
      goodsData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    // mounted() {
    //   new BScroll('.goods', {})
    // }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>