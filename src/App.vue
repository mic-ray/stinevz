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
      <template v-for="entry in menuEntries">
        <div class="dropdown" :key="entry.text">
          <router-link
            tag="div"
            active-class="active-link"
            class="link"
            :to="entry.route"
            >{{ entry.text }}</router-link
          >
          <div class="dropdown-content">
            <router-link
              tag="a"
              v-for="dropdownEntry in entry.dropdownEntries"
              :key="dropdownEntry.text"
              :to="dropdownEntry.route"
              >{{ dropdownEntry.text }}</router-link
            >
          </div>
        </div>
      </template>
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
        text: "Profile",
        route: "/profile",
        dropdownEntries: [
          {
            text: "Friends",
            route: "/profile/friends",
          },
          {
            text: "Documents",
            route: "/profile/documents",
          },
        ],
      },
      {
        text: "Events",
        route: "/events",
        dropdownEntries: [
          {
            text: "Popular",
            route: "/events/popular",
          },
          {
            text: "Leisure",
            route: "/events/leisure",
          },
          {
            text: "Study",
            route: "/events/study",
          },
          {
            text: "Career",
            route: "/events/career",
          },
          {
            text: "Others",
            route: "/events/others",
          },
        ],
      },
      {
        text: "Groups",
        route: "/groups",
        dropdownEntries: [
          {
            text: "Popular",
            route: "/groups/popular",
          },
          {
            text: "Leisure",
            route: "/groups/leisure",
          },
          {
            text: "Study",
            route: "/groups/study",
          },
          {
            text: "Career",
            route: "/groups/career",
          },
          {
            text: "Others",
            route: "/groups/others",
          },
        ],
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
  position: fixed;
}
.title {
  margin-right: 50px;
}
.heading {
  color: #0271bb;
  font-weight: bold;
}
.bold {
  font-weight: bold;
}

.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0px 5px 10px 0px #0271bb50;
  min-width: 100px;
  z-index: 1;
}

.dropdown-content a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #e2001a;
}

.dropdown-content a:hover {
  background-color: rgba(0, 0, 0, 0.15);
}

.dropdown:hover .dropdown-content {
  display: block;
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
  margin: 30px auto;
}

.footer {
  display: flex;
  justify-content: space-evenly;
}
</style>
