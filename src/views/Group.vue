<template>
  <div class="groups-container">
    <div class="heading-container">
      <h2 class="heading">Your groups</h2>
      <div style="display: flex; align-content:baseline;">
        <input class="group-search mr-2" type="text" placeholder="Search..." />

        <v-dialog v-model="dialog" persistent max-width="550">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="white--text text-capitalize"
              height="40"
              elevation="0"
              color="#0271bb"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon>Create group</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="heading">Create a new group</span>
            </v-card-title>
            <v-card-text style="color:black; font-size:1rem;">
              <div
                class="event-dialog-container"
                :key="i"
                v-for="(field, i) in dialogFields"
              >
                <span :key="field.label + 'span'" class="bold"
                  >{{ field.label }}:</span
                >
                <input
                  v-if="field.label !== 'Group Description'"
                  class="dialog-input"
                  type="text"
                  v-model="field.model"
                />
                <textarea
                  :key="field.label + 'text'"
                  v-else
                  class="dialog-input "
                  rows="3"
                  v-model="field.model"
                ></textarea>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#0271bb" text @click="resetDialog">
                Close
              </v-btn>
              <v-btn color="#0271bb" text @click="saveGroup">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <template v-for="(group, i) in groups">
      <div :key="group.title" class="group-container">
        <div class="row">
          <router-link
            tag="div"
            class="column"
            style="cursor:pointer;"
            :to="{ path: '/groups/' + i, params: { group: group } }"
          >
            <h1>{{ group.title }}</h1>
            {{ group.members }} members
          </router-link>
          <div
            class="chat-icon"
            style="cursor:pointer;"
            @click="group.messages > 0 ? handleGroupChat(group.title) : null"
          >
            <v-icon size="50">mdi-forum</v-icon>
            <span v-if="group.messages > 0" class="chat-badge">{{
              group.messages
            }}</span>
          </div>
        </div>
      </div>
    </template>
    <Toast ref="toast">
      Engaged in groups! <span class="bold">+5 Stinchen</span>
    </Toast>
  </div>
</template>

<script>
import Toast from "../components/Toast";
export default {
  components: {
    Toast,
  },
  data: () => ({
    dialog: false,
    dialogFields: {
      title: {
        label: "Group Title",
        model: "A great new group",
      },
      description: {
        label: "Group Description",
        model: "Description of a great new group",
      },
    },
  }),
  methods: {
    handleGroupChat: function(groupTitle) {
      this.$store.commit("decrementGroupMessages", groupTitle);
      this.$store.commit("increaseScore", 5);
      this.$refs.toast.display();
    },
    resetDialog: function() {
      this.dialog = false;
      this.dialogFields.title.model = "A great new group";
      this.dialogFields.description.model = "Description of a great new group";
    },
    saveGroup: function() {
      this.$store.commit("addGroup", this.dialogFields.title.model);
      this.resetDialog();
    },
  },
  computed: {
    groups: function() {
      return this.$store.getters.getGroups;
    },
  },
};
</script>

<style>
.groups-container {
  display: flex;
  flex-direction: column;
  column-gap: 100;
}
.heading-container {
  display: flex;
  justify-content: space-between;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
}

.group-search {
  padding: 5px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
}

.group-container {
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 20px 30px;
  margin: 10px 0;
}

.chat-icon {
  position: relative;
}

.chat-badge {
  background-color: #e2001a;
  border-radius: 2px;
  padding: 0px 4px;
  font-size: 15px;
  font-weight: bold;
  color: white;

  position: absolute;
  top: -10px;
  right: -5px;
}
</style>
