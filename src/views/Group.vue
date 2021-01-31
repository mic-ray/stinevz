<template>
  <div class="flex-container">
    <div class="heading-container">
      <h2 class="heading">Your groups</h2>
      <input class="group-search" type="text" placeholder="Search..." />
    </div>
    <template v-for="group in groups">
      <div :key="group.title" class="group-container">
        <div class="row">
          <div class="column">
            <h1>{{ group.title }}</h1>
            {{ group.members }} members
          </div>
          <div
            v-on:click="
              group.messages > 0 ? handleGroupChat(group.title) : null
            "
            class="chat-icon"
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
      In Gruppen engagiert! <span class="bold">+5 Stinchen</span>
    </Toast>
  </div>
</template>

<script>
import Toast from "../components/Toast";
export default {
  components: {
    Toast,
  },
  methods: {
    handleGroupChat: function(groupTitle) {
      this.$store.commit("decrementGroupMessages", groupTitle);
      this.$store.commit("increaseScore", 5);
      this.$refs.toast.display();
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
.flex-container {
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
  padding: 20px 40px;
  margin: 20px 0;
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
