<template>
  <div>
    <mains></mains>
<!--    <cart></cart>-->
  </div>
</template>

<script>
  import mains from "views/shoppingTrolley/stMain";
// import Cart from "views/cart/Cart";
  export default {
    name: "ShoppingCart",
    components: {
      mains,
      // Cart
    }
  }
</script>

<style scoped>

</style>