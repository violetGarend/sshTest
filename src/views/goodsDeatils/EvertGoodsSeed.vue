<template>
<!--  <swiper class="details-swipers">-->
<!--    <swiper-item v-for="(item,index) in Nimg" :key="index" >-->
<!--      <img :src="item" alt="item">-->
<!--    </swiper-item>-->
<!--  </swiper>-->


  <el-carousel class="details-swipers" indicator-position="">
    <el-carousel-item v-for="(item,index) in Nimg" :key="index">
      <img :src="item" alt="item" class="details-img">
    </el-carousel-item>
  </el-carousel>


</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index.js"
  export default {
    name: "EvertGoodsSeed",
    components: {
      Swiper,
      SwiperItem,
    },
    props: {
      Nimg: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style>
  .details-swipers{
    text-align: center;
  }
  .details-img{
    width: 80%;
    height: 150%;
    border: 1px solid pink;
  }
  .el-carousel__button{
    color: red;
    width: 11px;
    height: 4px;
  }
</style>