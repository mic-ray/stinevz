<template>
  <div class="flex-container">
    <div class="heading-container">
      <h2 class="heading">Find your groups</h2>
      <input class="group-search" type="text" placeholder="Search..." />
    </div>
    <template v-for="group in groups">
      <div :key="group.title" class="group-container">
        <div class="row">
          <div class="column">
            <h1>{{ group.title }}</h1>
            {{ group.members }} members
          </div>
          <div class="chat-icon">
            <v-icon size="50">mdi-forum</v-icon>
            <span class="chat-badge">{{ group.messages }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    groups: [
      {
        title: "Healthy Cooking",
        members: 165,
      },
      {
        title: "ITIT 4 Life - Learning Group",
        members: 54,
        messages: 4,
      },
      {
        title: "Among Us",
        members: 382,
        messages: 10,
      },
    ],
  }),
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
