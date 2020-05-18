<template>
  <div>
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(item,index) in banners" :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="homeBannerOnLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "HomeSeed",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: true
      }
    },
    methods: {
      //使用onload监听图片加载完，并发送给父组件【用于检测offetop】
      homeBannerOnLoad() {
        this.isLoad ? this.$emit('homeBannerOnLoad') : 0//只发送一次
        this.isLoad = false
      },
    },
    activated() {
      // console.log(this.$refs.swiper.startTimer);
      this.$refs.swiper && this.$refs.swiper.startTimer()
    },
    deactivated() {
      this.$refs.swiper.stopTimer()
      // console.log(this.$refs.swiper.stopTimer);
    }
  }
</script>

<style scoped>

</style>