<template>
  <div class="toasts" v-show="isShow">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props: {
    //   message: {
    //     type: String,
    //     default() {
    //       return 'eeeee'
    //     }
    //   },
    //   isShow: {
    //     type: Boolean,
    //     default() {
    //       return false;
    //     }
    //   }
    // },
    data() {
      return {
        // isShow:true
        message: '',
        isShow: false
      }
    },
    methods: {
      showToast(character, interval = 1500) {
        this.message = character
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, interval)
      }
    }
  }
</script>

<style scoped>
  .toasts {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .5);
    z-index: 999;
    color: #eeeeee;
    padding: 4px 7px;
  }
</style>