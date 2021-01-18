<template>
  <div class="profile-view">
    <div class="grid-container">
      <div class="info-container">
        <h2 class="heading">
          Your profile
        </h2>
        <v-btn class="text-capitalize edit-button" v-on:click="edit" text
          >Edit<v-icon>mdi-account-edit</v-icon></v-btn
        >

        <span class="field">Avatar</span>
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="Avatar"
          class="avatar"
        />
        <span
          v-for="(info, i) in textInfo"
          :key="i"
          v-bind:class="{ field: info.field }"
        >
          {{ info.field ? info.field : info.text }}
        </span>
        <span class="field">Hobbies &amp; Interests</span>
        <ul>
          <li>Cooking</li>
          <li>Volleyball</li>
          <li>Skiing, Snowboard</li>
        </ul>
        <span class="field">Socials</span>
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
        <h2 class="heading">
          What to do next?
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data: () => ({
    textInfo: [
      {
        field: "Name",
      },
      {
        text: "Marco",
      },
      {
        field: "Field of Study",
      },
      {
        text: "IT-Management and -Consulting",
      },
      {
        field: "Semester",
      },
      {
        text: "3",
      },
      {
        field: "Age",
      },
      {
        text: "25",
      },
    ],
    todos: [{}],
  }),
};
</script>
<style>
.profile-view {
  margin: 50px 25px;
}
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 100px;
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
.field {
  font-weight: bold;
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
</style>
