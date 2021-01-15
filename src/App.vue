<template>
  <v-app>
    <v-app-bar v-if="!isLoginPage" app>
      {{ title }}
    </v-app-bar>
    <v-main>
      <v-container>
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
    title: "Stine VZ",
  }),
  computed: {
    isLoginPage() {
      return this.$router.currentRoute.name === "Login";
    },
  },
};
</script>
<style>
.footer {
  display: flex;
  justify-content: space-evenly;
}
</style>
