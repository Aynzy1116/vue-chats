import Vue from 'vue'
import Vuex from 'vuex'

import chat from './modules/chat'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
