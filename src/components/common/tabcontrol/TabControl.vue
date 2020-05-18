<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in controlArray" :key="index" :class="{active:index===controlIndex}" @click="changeIndex(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      controlArray:{
        type:Array,
        default() {
          return [];
        }
      }
    },
    data(){
      return{
        controlIndex:0
      }
    },
    methods:{
      changeIndex(index){
        this.controlIndex = index;
        this.$emit('activeIndex',index)
      }
    }
  }
</script>

<style scoped>
  .tabcontrol{
    display: flex;
    text-align: center;
    /*width: 20px;*/
    height: 45px;
    padding-top: 7px;
    font-size: 16px;
    border-top: #eeeeee 3px solid;
    background-color: white;
  }
  .tabcontrol div{
    flex: 1;
  }
  .tabcontrol div span{
    padding: 6px;
  }
  .active{
    color: #ff538d;
  }
  .active span{
    border-bottom: #ff538d 3px solid;
  }
</style>