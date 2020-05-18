<template>
  <div class="st-bottom-main">
    <div class="st-imgd" @click="sumClick">
      <img src="~/assets/img/cart/tick.svg" alt="" :class="{'st-imgd-active':isChecked}">
      <span >全选</span>
    </div>

    <!--    总计-->
    <div class="st-sum">
      <div>总计：￥{{sums}}</div>
    </div>

    <!--    结算-->
    <div class="st-close" @click="closeAA">
      <div>去结算:（{{close}}）</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BottomSt",
    data() {
      return {
        results: this.isChecked
      }
    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      sums() {
        let sum = 0
        for (let item of this.items) {
          if (item.checked) {
            sum += item.count * item.price
          }
        }
        return sum.toFixed(2)
      },
      close() {
        let sum = 0
        for (let item of this.items) {
          if (item.checked) {
            sum += item.count
          }
        }
        return sum
      },
      isChecked(){
        for (let item of this.items){
          if (!item.checked){
            return false
          }
        }
        return true
      }
    },
    methods: {
      sumClick() {
        // let sum = 0;
        // for (let item of this.items) {
        //   if (item.checked) {
        //     sum++
        //   }
        // }
        // let result = sum === this.items.length
        // this.results = result
        // console.log(result)
        if (this.isChecked){
          for (let item of this.items){
            item.checked = false
          }
          this.results = false
        }else {
          for (let item of this.items){
            item.checked = true
          }
          this.results = true
        }
      },
      closeAA(){
        if (this.items.length===0) this.$toast.showToast('当前没有商品')
      }
    },
    created() {
      // console.log(true+false)
    }
  }
</script>

<style scoped>
  .st-bottom-main {
    background-color: ghostwhite;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 48px;
    height: 48px;
  }

  .st-imgd {
    line-height: 48px;
    /*display: flex;*/
    margin-left: 20px;
    margin-top: 2px;
  }

  .st-imgd img {
    flex: 1;
    border: black 0.5px solid;

  }

  .st-imgd span {
    margin-left: 2px;
    font-size: 16px;
    position: relative;
    top: -3px;
  }

  .st-imgd-active {
    background-color: #ff538d;
  }

  .st-sum {
    position: absolute;
    bottom: 16px;
    left: 30%;
  }

  .st-close {
    height: 100%;
    background-color: pink;
    position: relative;
    bottom: 100%;
    width: 30%;
    right: -70%;
    line-height: 300%;
    text-align: center;
  }
</style>