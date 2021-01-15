import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // Colors taken from corporate manual
        primary: "#e2001a",
        secondary: "#3b515b",
        accent: "#000000",
        info: "#0271bb",
      },
    },
  },
});
