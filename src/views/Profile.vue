<template>
  <div class="profile-container">
    <div class="info-container">
      <h2 class="heading">
        Your profile
      </h2>
      <v-dialog v-model="dialog" persistent max-width="350">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="text-capitalize edit-button"
            color="#0271bb"
            v-bind="attrs"
            v-on="on"
            text
            ><v-icon class="mr-2">mdi-account-edit</v-icon>Edit</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="heading">Edit your profile</span>
          </v-card-title>
          <v-card-text style="color:black; font-size:1rem;">
            <h3>Adjust the visibility:</h3>
            <div class="dialog-grid">
              <span class="bold">Semester:</span>
              <div>
                <v-switch
                  v-model="visibility.semester"
                  color="info"
                  :label="visibility.semester ? 'Visibile' : 'Not visible'"
                ></v-switch>
              </div>
              <span class="bold">
                Age:
              </span>
              <div>
                <v-switch
                  v-model="visibility.age"
                  color="info"
                  :label="visibility.age ? 'Visibile' : 'Not visible'"
                ></v-switch>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#0271bb" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="#0271bb" text @click="saveProfile">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <span class="bold">Avatar</span>
      <img src="../assets/profile-avatar.svg" alt="Avatar" class="avatar" />
      <template v-for="info in textInfo">
        <span v-if="info.visible" :key="info.field" class="bold">{{
          info.field
        }}</span>
        <span v-if="info.visible" :key="info.text">{{ info.text }}</span>
      </template>
      <span class="bold info-list">Hobbies &amp; Interests</span>
      <ul>
        <li :key="hobby" v-for="hobby in hobbies">{{ hobby }}</li>
      </ul>
      <span class="bold info-list">Socials</span>
      <ul>
        <li :key="social.title" v-for="social in socials">
          <a :href="social.text">{{ social.title }}</a>
        </li>
      </ul>
    </div>
    <div class="todo-container">
      <h2 class="heading todo-heading">
        What to do next?
      </h2>
      <template v-for="todo in todos">
        <span :key="todo.todo" class="bold">{{ todo.todo }}</span>
        <span :key="todo.todo + todo.points">+{{ todo.points }} Stinchen </span>
      </template>
    </div>
    <Toast ref="toast">
      Updated profile! <span class="bold">+3 Stinchen</span>
    </Toast>
  </div>
</template>
<script>
import Toast from "../components/Toast";
export default {
  name: "Profile",
  components: {
    Toast,
  },
  data: () => ({
    dialog: false,
    visibility: {
      semester: true,
      age: true,
    },
    todos: [
      {
        todo: "Complete your profile",
        points: "3",
      },
      {
        todo: "Join an event",
        points: "5",
      },
      {
        todo: "Say Hi to your fellow students",
        points: "5",
      },
    ],
  }),
  methods: {
    saveProfile: function() {
      this.dialog = false;
      this.$store.commit("updateVisibility", this.visibility);
      this.$store.commit("increaseScore", 3);
      this.$refs.toast.display();
    },
  },
  computed: {
    textInfo: function() {
      return this.$store.getters.getTextInfo;
    },
    socials: function() {
      return this.$store.getters.getSocials;
    },
    hobbies: function() {
      return this.$store.getters.getHobbies;
    },
  },
};
</script>
<style>
.profile-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
}

.info-container {
  display: grid;
  padding: 0;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  align-items: center;
}
.info-list {
  align-self: baseline;
}
.edit-button {
  justify-self: start;
}
.dialog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
}
.todo-container {
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: auto;
  row-gap: 10px;
  padding: 10px;
  height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}
.todo-heading {
  grid-column: 1 / span 2;
}
</style>
