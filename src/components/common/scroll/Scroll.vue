<template>
  <div class="wrapper" ref="wrapper">
    <div class="context">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      proberTypes: {
        type: Number,
        default: 0
      },
      pullUpLoads:{
        type:Boolean,
        default: false
      }
    },
    mounted() {
      //创建BScroll实例
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType:this.proberTypes,
        pullUpLoad: this.pullUpLoads
      })
      //监听滚动位置
      this.scroll.on('scroll', position => {
        // console.log(position)
        this.$emit('scrollPostiton',position)
      })

      //监听是否有上拉到底部的操作
      this.scroll.on('pullingUp',()=>{
        // console.log("eeee")
        this.$emit('isPullingUp')
      })
    },
    methods: {
      backTop(x, y, time = 1000) {//回顶方法
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUps(){//使“底部”不是底部，重定义底部的位置
        this.scroll.finishPullUp()
      },
      refreshs(){//重新计算可拖动的高度，不会出现卡顿等，
        this.scroll && this.scroll.refresh()
        // console.log("eee")
      },
      getY(){
         return this.scroll ? this.scroll.y : 0
      }
    },
  }
</script>

<style scoped>

</style>