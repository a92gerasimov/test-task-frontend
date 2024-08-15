import Vue from 'vue'
import Vuex from 'vuex'

import itemsToChoose from './modules/itemsToChoose'
import userItems from './modules/userItems'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    itemsToChoose,
    userItems
  }
})
