import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temp: null,
  },
  mutations: {
    setTemp(state, newTemp) {
      state.temp = newTemp;
    },
  },
  actions: {
    setTemp(context, newTemp) {
      context.commit('setTemp', newTemp);
    }
  },
  modules: {},
  getters: {
    getTemp: (state) => {
      return state.temp;
    }
  }
})