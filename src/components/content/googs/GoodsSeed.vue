<template>
  <div class="goods-item" @click="goodsClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
<!--      <a :href="item.link">-->
        <p>{{item.title}}</p>
        <span class="price">{{item.orgPrice}}</span>
        <span class="collect">{{item.cfav}}</span>
<!--      </a>-->
    </div>

  </div>
</template>

<script>
  export default {
    name: "GoodsSeed",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('imageOnLoad')
        // console.log("eee")
      },
      //商品被点击时
      goodsClick(){
        // console.log(this.item.iid)
        this.$router.push('/details/'+ this.item.iid)
      }
    },
    computed:{
      showImage(){
        return this.item.image || this.item.show.img
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
  .goods-item img{
    width: 180px;
    height: 270px;
  }
</style>