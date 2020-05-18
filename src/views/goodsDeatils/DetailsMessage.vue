<template>
  <div>
    <div class="dm-title">{{baseMessage.title}}</div>

    <div>
      <span class="dm-new-price">{{baseMessage.newPrice}}</span>
      <span class="dm-old-price">{{baseMessage.oldPrice}}</span>
      <span class="dm-discountdescs">
        <span class="dm-discountdesc">{{baseMessage.discountDesc}}</span>
      </span>
    </div>

    <div class="dm-columns-main" v-for="(item,index) in baseMessage.columns">
      <!--      <div class="dm-columns-seed">{{baseMessage.columns[0]}}</div>-->
      <!--      <div class="dm-columns-seed">{{baseMessage.columns[1]}}</div>-->
      <!--      <div class="dm-columns-seed">{{baseMessage.columns[2]}}</div>-->
      <div :class="'dm-columns-seed'+index">{{item}}</div>
    </div>
<p>.</p>
    <div  class="dm-services">
      <span class="dm-services-class" v-for="(item,index) in baseMessage.services" >
        <img :src="item.icon" alt="" class="dm-services-img">
        <span class="dm-services-name">{{item.name}}</span>
      </span>
    </div>
<div class="dm-services-buttom"></div>
  </div>
</template>

<script>
  export default {
    name: "DetailsMessage",
    props: {
      baseMessage: {
        type: Object
      }
    },
    created() {
      // console.log(this.baseMessage.services)
    }
  }
</script>

<style scoped>
  .dm-title {
    font-weight: bold;
    font-size: 115%;
    margin: 13px auto;
    color: rgb(48, 48, 46);
    padding-left: 5px;
  }

  .dm-new-price {
    color: rgb(255, 125, 133);
    font-size: 160%;
    padding-right: 5px;
    padding-left: 5px;
  }

  .dm-old-price {
    text-decoration: line-through;
    color: rgb(185,173,178);
    padding-right: 5px;

  }

  .dm-columns-main {
    /*display: flex;*/
    text-align: center;
    margin: 10px 10px 0 ;
    color: gainsboro;
  }

  .dm-columns-seed0{
    float: left;
  }

  .dm-columns-seed1{

    float: left;
    padding: 0 5%;
  }
  .dm-columns-seed2{
    float: left;
    margin-right: 1px;
  }

  .dm-discountdesc {
    font-size: 14px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -4px;
  }

  .dm-discountdescs {
    margin-bottom: 10px;
  }
  .dm-services img{
    width: 13px;
    height: 13px;

  }
  .dm-services{
    border-bottom: 2px solid rgba(100,100,100,.1);
    /*border-top: 2px solid rgba(100,100,100,.1);*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    line-height: 60px;
    background-color: red;
  }
  .dm-services-class{
    float: left;
    /*font-size: 13px;*/
    color: #333;
    padding: 0 0.5%;
  }
  .dm-services-buttom{
    border-bottom: 2px solid rgba(100,100,100,.1);

  }
</style>