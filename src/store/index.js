import Vue from "vue";
import Vuex from "vuex";
import score from "./modules/score.module";
import group from "./modules/group.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { score, group },
});
