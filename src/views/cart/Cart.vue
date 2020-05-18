<template>
  <div>
    <Navigation class="nav-bar"><div slot="center">购物车({{sscml}})</div></Navigation>
    <cart-list :cart-list="ssc"/>
<!--    <cart-bottom-bar/>-->
  </div>
</template>

<script>
  // import NavBar from 'components/common/navbar/NavBar'
  import Navigation from "../../components/common/navigation/Navigation";
  import CartList from './childComps/CartList'
  export default {
    name: "Cart",
    components: {
      Navigation,
      CartList,
    },
    computed: {
      sscml() {
        return this.$store.state.commodityMessage.length
      },
      ssc(){
        return this.$store.state.commodityMessage
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
