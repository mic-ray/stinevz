import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
  },
  getters: {
    getScore: (state) => {
      return state.score;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
