<template>
  <div>
    <router-view v-if="this.$router.currentRoute.name === 'Final'" />
    <v-app v-if="!(this.$router.currentRoute.name === 'Final')">
      <div class="top-background"></div>
      <div class="line"></div>
      <v-app-bar
        flat
        color="rgba(210, 210, 210, 1)"
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
                to="/notfound"
                >{{ dropdownEntry.text }}</router-link
              >
            </div>
          </div>
        </template>
        <v-spacer />
        <div class="chat-icon mr-7">
          <div @click="toggleChat">
            <v-icon size="30">mdi-chat</v-icon
            ><span class="chat-notification">4</span>
          </div>
          <router-link
            to="/final"
            tag="div"
            id="chat-dropdown"
            class="chat-dropdown"
          >
            <img
              src="@/assets/sarah-avatar.svg"
              alt="Avatar"
              class="chat-avatar mr-2"
            />
            <div style="display:flex; flex-direction:column;">
              <div><span class="bold">Sarah</span> - 10:43</div>
              Check this out!
            </div>
          </router-link>
        </div>
        <v-icon size="25">mdi-trophy</v-icon>
        <span class="ml-2"> {{ score }}</span>
      </v-app-bar>
      <v-main>
        <v-container class="view-container">
          <router-view />
        </v-container>
      </v-main>
      <div
        v-if="!(this.$router.currentRoute.name === 'Login')"
        class="chat-container"
      >
        <v-icon color="white">mdi-chat</v-icon> Chat
      </div>
      <v-footer height="50" color="primary" class="footer white--text">
        <span>© 2021 <strong>STiNE VZ</strong></span>
        <span>Privacy Policy | Terms of Service</span>
      </v-footer>
    </v-app>
  </div>
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
  methods: {
    toggleChat: function() {
      const chatDropdown = document.getElementById("chat-dropdown");
      const display = (window.getComputedStyle
        ? getComputedStyle(chatDropdown, null)
        : chatDropdown.currentStyle
      ).display;
      if (display == "none") chatDropdown.style.display = "flex";
      else chatDropdown.style.display = "none";
    },
  },
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
  /* height: 100%;
  max-height: 100%;
  overflow-y: hidden; */
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
.top-background {
  background-color: white;
  width: 100%;
  height: 10px;
  position: fixed;
  z-index: 1;
}
.line {
  background-color: #e2001a;
  width: 100%;
  height: 10px;
  margin-top: 10px;
  position: fixed;
  z-index: 1;
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

.chat-dropdown {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0px 5px 10px 0px #0271bb50;
  min-width: 200px;
  height: 75px;
  padding: 10px;
  z-index: 1;
  top: 40px;
  right: -5px;
  align-items: center;
  justify-content: center;
}

.chat-avatar {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
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

.link:hover {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.87);
}

.active-link {
  background-color: #e2001a;
  color: white;
}

.view-container {
  margin-top: 30px;
}

.chat-container {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 1.5rem;
  background-color: #3b515b;
  color: white;
  width: 150px;
  margin-left: 75vw;
  z-index: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.chat-notification {
  background-color: #e2001a;
  border-radius: 2px;
  padding: 0px 3px;
  font-size: 12px;
  font-weight: bold;
  color: white;

  position: absolute;
  top: -5px;
  right: -7px;
}

.footer {
  display: flex;
  justify-content: space-evenly;
}
</style>
