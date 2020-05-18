<template>
  <div class="recommdend">
    <div v-for="(item,index) in recommdends" :key="index" class="recomdend-item">
      <label>
        <a :href="item.link" class="main-a">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </label>

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommdends",
    props: {
      recommdends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommdend {
    display: flex;
    /*width: 100%;*/
    text-align: center;
    padding: 10px 0 20px 0;
    border-bottom: #eeeeee 5px solid;
  }

  .recomdend-item {
    flex: 1;
  }

  .recomdend-item a img {
    height: 70px;
    width: 70px;
  }

  .recomdend-item div {
    margin-top: 10px;
    font-size: 15px;
  }
</style>