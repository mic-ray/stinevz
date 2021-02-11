<template>
  <div class="profile-container">
    <div class="info-container">
      <h2 class="heading">
        Your profile
      </h2>
      <v-dialog v-model="dialog" persistent max-width="550">
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
            <h3>
              Adjust the visibility *:
            </h3>
            <div
              class="mt-2"
              style="display:grid; grid-template-columns:100px 100px; column-gap:75px; justify-content:center;"
            >
              <div>
                <span class="bold">Semester:</span>
                <v-switch
                  v-model="visibility.semester"
                  color="info"
                  :label="visibility.semester ? 'Visible' : 'Not visible'"
                ></v-switch>
              </div>
              <div>
                <span class="bold">
                  Age:
                </span>
                <v-switch
                  v-model="visibility.age"
                  color="info"
                  :label="visibility.age ? 'Visible' : 'Not visible'"
                ></v-switch>
              </div>
            </div>
            <h3 class="mb-2">Adjust optional info:</h3>
            <div class="dialog-grid">
              <span class="bold mt-1" style="align-self:start;">Hobbies:</span>
              <div>
                <template v-for="(hobby, i) in dialogHobbies">
                  <div
                    v-if="!hobby.toBeDeleted"
                    :key="i"
                    class="dialog-input-container"
                  >
                    <input
                      type="text"
                      class="dialog-input"
                      v-model="hobby.name"
                    />
                    <v-btn icon @click="hobby.toBeDeleted = true"
                      ><v-icon>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </template>
                <div style="display:flex; justify-content:center;">
                  <v-btn class="text-capitalize" text @click="handleAddHobby"
                    ><v-icon>mdi-plus</v-icon>Add hobby</v-btn
                  >
                </div>
              </div>
              <span class="bold mt-1" style="align-self:start;">Socials:</span>
              <div>
                <template v-for="(social, i) in dialogSocials">
                  <div
                    v-if="!social.toBeDeleted"
                    :key="i"
                    class="dialog-input-container"
                  >
                    <input
                      type="text"
                      class="dialog-input"
                      style="width:90px;"
                      v-model="social.label"
                    />
                    <input
                      type="text"
                      class="dialog-input"
                      style="width:250px;"
                      v-model="social.text"
                    />
                    <v-btn icon @click="social.toBeDeleted = true"
                      ><v-icon>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </template>
                <div style="display:flex; justify-content:center;">
                  <v-btn class="text-capitalize" text @click="handleAddSocial">
                    <v-icon>mdi-plus</v-icon>Add Social</v-btn
                  >
                </div>
              </div>
            </div>
            <span style="color:grey;font-size:0.8rem;">
              * Please note: Your name and field of study cannot be hidden to
              prevent anonymous users who could potentially harm the
              platform</span
            >
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#0271bb" text @click="handleCancel">
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
      <span class="bold info-list">Hobbies</span>
      <ul>
        <li :key="hobby" v-for="hobby in hobbies">{{ hobby }}</li>
      </ul>
      <span class="bold info-list">Socials</span>
      <ul>
        <li :key="social.title" v-for="social in socials">
          <a :href="social.text">{{ social.label }}</a>
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
  mounted: function() {
    this.initState();
  },
  data: () => ({
    dialog: false,
    visibility: { semester: true, age: true },
    hobbies: [],
    dialogHobbies: [],
    socials: [],
    dialogSocials: [],
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
    initState() {
      Object.assign(this.visibility, this.$store.getters.getVisibility);
      this.hobbies = [...this.$store.getters.getHobbies];
      this.dialogHobbies = [...this.hobbies].map((x) => ({
        name: x,
        toBeDeleted: false,
      }));
      this.socials = [...this.$store.getters.getSocials];
      this.dialogSocials = JSON.parse(JSON.stringify(this.socials)).map((x) => {
        x.toBeDeleted = false;
        return x;
      });
    },
    saveProfile: function() {
      // Close dialog
      this.dialog = false;

      // Update visibility of text info
      this.$store.commit("updateVisibility", this.visibility);

      // Get not to be deleted updated hobbies
      let updateHobbies = [...this.dialogHobbies]
        .filter((x) => !x.toBeDeleted)
        .map((x) => x.name);
      // Update hobbies
      this.$store.commit("updateHobbies", updateHobbies);

      // Get not to be deleted updated hobbies
      let updateSocials = JSON.parse(JSON.stringify(this.dialogSocials))
        .filter((x) => !x.toBeDeleted)
        .map((x) => ({ label: x.label, text: x.text }));
      // Update hobbies
      this.$store.commit("updateSocials", updateSocials);

      this.$store.commit("increaseScore", 3);

      // Set updated Hobbies
      this.initState();
      this.$refs.toast.display();
    },
    handleAddHobby: function() {
      this.dialogHobbies.push({ name: "New Hobby", toBeDeleted: false });
    },
    handleAddSocial: function() {
      this.dialogSocials.push({
        label: "Label",
        text: "Social link",
        toBeDeleted: false,
      });
    },
    handleCancel: function() {
      this.dialog = false;
      this.initState();
    },
  },
  computed: {
    textInfo: function() {
      return this.$store.getters.getTextInfo;
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

.dialog-input-container {
  display: flex;
}

.dialog-input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
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
