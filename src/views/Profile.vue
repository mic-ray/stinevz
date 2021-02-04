<template>
  <div class="profile-container">
    <div class="info-container">
      <h2 class="heading">
        Your profile
      </h2>
      <v-btn
        class="text-capitalize edit-button"
        color="#0271bb"
        v-on:click="editProfile"
        text
        ><v-icon class="mr-2">mdi-account-edit</v-icon>Edit</v-btn
      >
      <span class="bold">Avatar</span>
      <img src="../assets/profile-avatar.svg" alt="Avatar" class="avatar" />
      <template v-for="info in textInfo">
        <span :key="info.field" class="bold">{{ info.field }}</span>
        <span :key="info.text">{{ info.text }}</span>
      </template>
      <span class="bold">Hobbies &amp; Interests</span>
      <ul>
        <li>Cooking</li>
        <li>Volleyball</li>
        <li>Skiing, Snowboard</li>
      </ul>
      <span class="bold">Socials</span>
      <ul>
        <li>Mobile: 0185 4928763</li>
        <li>
          <a href="https://www.instagram.com/marco.polo95/">Instagram</a>
        </li>
        <li>
          <a href="http://ca.linkedin.com/in/linkedin/MarcoPolo">LinkedIn</a>
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
    textInfo: [
      {
        field: "Name",
        text: "Marco",
      },
      {
        field: "Field of Study",
        text: "IT-Management and -Consulting",
      },
      {
        field: "Semester",
        text: "3",
      },

      {
        field: "Age",
        text: "25",
      },
    ],
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
    editProfile: function() {
      this.$store.commit("increaseScore", 3);
      this.$refs.toast.display();
    },
  },
};
</script>
<style>
.profile-container {
  display: grid;
  grid-template-columns: 1.75fr 1fr;
}

.info-container {
  display: grid;
  padding: 0;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  align-items: center;
}
.edit-button {
  justify-self: start;
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
  border: 1px solid rgba(0, 0, 0, 0.25);
}
.todo-heading {
  grid-column: 1 / span 2;
}
</style>
