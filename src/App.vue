<template>
  <v-app>
    <div class="line"></div>
    <v-app-bar
      flat
      color="rgba(200, 200, 200, 0.7)"
      class="mt-5"
      height="50"
      v-if="!(this.$router.currentRoute.name === 'Login')"
      app
    >
      <div class="title">{{ title }}</div>
      <router-link
        tag="div"
        active-class="active-link"
        class="link"
        v-for="entry in menuEntries"
        :key="entry.text"
        :to="entry.route"
        >{{ entry.text }}</router-link
      >
      <v-spacer />
      <v-icon>mdi-trophy</v-icon>
      <span class="ml-2"> {{ score }}</span>
    </v-app-bar>
    <v-main>
      <v-container class="view-container">
        <router-view />
      </v-container>
    </v-main>
    <v-footer height="50" color="primary" class="footer white--text">
      <span>© 2021 <strong>STiNE VZ</strong></span>
      <span>Privacy Policy | Terms of Service</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    title: "STiNE VZ",
    menuEntries: [
      {
        text: "My Profile",
        route: "/profile",
      },
      {
        text: "Events",
        route: "/events",
      },
      {
        text: "Groups",
        route: "/groups",
      },
    ],
  }),
  computed: {
    score() {
      return this.$store.getters.getScore;
    },
  },
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.line {
  background-color: #e2001a;
  width: 100%;
  height: 10px;
  margin-top: 10px;
}
.title {
  margin-right: 50px;
}
.heading {
  color: #0271bb;
  font-weight: bold;
}
.link {
  padding: 13px;
  width: 100px;
  text-align: center;
}

.active-link {
  background-color: #e2001a;
  color: white;
}

.view-container {
  margin: 50px auto;
}

.footer {
  display: flex;
  justify-content: space-evenly;
}
</style>
