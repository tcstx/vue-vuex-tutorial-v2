import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTrue: true
  },
  getters: {
    isTrue: function (state) {
      return state.isTrue
    }
  },
  mutations: {
    toggle: function (state) {
      state.isTrue = !state.isTrue
    }
  },
  actions: {
    toggle: function (context) {
      context.commit('toggle')
    }
  }
})
