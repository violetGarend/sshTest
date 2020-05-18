<template>
  <div>
    <navigation>
      <!--      返回箭头-->
      <div slot="left" class="left-details">
        <img src="~assets/img/common/back.svg" alt="" @click="backHome" class="left-details-img">
      </div>
      <!--      中间的选项们-->
      <div class="main-details" slot="center">
        <div v-for="(item,index) in centerArray" class="center-details" @click="centerOnClick(index)" :class="{centerisclick:index==centerIsOnClickIndex}">{{item}}</div>
      </div>
    </navigation>
  </div>

</template>

<script>
  //导入navigation组件
  import Navigation from "components/common/navigation/Navigation";
  export default {
    name: "DeatilsNav",
    components:{
      Navigation
    },
    props:{
      centerArray:Array
    },
    data(){
      return{
        //每个商品的ID
        id: 0,
        //用于监视哪一个选项背点击中
        centerIsOnClickIndex:0,
      }
    },
    methods:{
      //当被点击时，使其样式为true（激活）
      centerOnClick(index){
        this.centerIsOnClickIndex = index
        this.$emit('onClicks',index)
      },
      //返回按钮设置back
      backHome(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .main-details {
    display: flex;
    margin-left: 20px;
  }

  .center-details {
    flex: 1;
  }
  /*被点击时的样式*/
  .centerisclick{
    color: red;
  }
  /*调整返回按钮的样式*/
  .left-details{
    padding: 5px 15px 0;
  }
</style>