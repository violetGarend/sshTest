import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    commodityMessage: [],
  },
  mutations: {

    // state.commodityMessage.push(seed)

    //   let oldP = state.commodityMessage.find(item=>{
    //     return seed.iid === item.iid
    // })
    //   if (oldP){
    //     oldP.count += 1
    //   }else {
    //     seed.count = 1
    //     state.commodityMessage.push(seed)
    //   }
    ccmAdd(state, oldp) {
      oldp.count++
    },
    ccmPush(state, seed) {
      state.commodityMessage.push(seed)
    }
  },
  actions: {
    changecommodityMessage(context, seed) {
      return new Promise(resolve => {
        let oldp = null
        for (let c of context.state.commodityMessage) {
          if (c.iid === seed.iid) {
            oldp = c
          }
        }
        if (oldp) {
          context.commit('ccmAdd',oldp)
          resolve('该商品数量+1')
        } else {
          seed.count = 1
          seed.checked = true
          context.commit('ccmPush',seed)
          resolve('添加到购物车')
        }
        // console.log(context.state.commodityMessage)
      })

    }
  },
  getters:{
    sscml(state){
      return state.commodityMessage.length
    }
  }
})

export default store