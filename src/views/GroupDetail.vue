<template>
  <div>
    <div class="heading-container">
      <div style="display:flex;">
        <h2 class="heading mr-5">{{ group.title }}</h2>
        <h3 style="align-self:center;">
          {{ group.members }} <span v-if="group.members > 1">Members</span>
          <span v-if="group.members === 1">Member</span>
        </h3>
        <v-btn
          class="text-capitalize ml-2"
          style="align-self:center;"
          color="#0271bb"
          text
          ><v-icon class="mr-2">mdi-share-variant</v-icon>Invite</v-btn
        >
      </div>
      <div style="display: flex; align-content:baseline;">
        <input class="group-search mr-2" type="text" placeholder="Search..." />
        <v-btn
          class="white--text text-capitalize"
          height="40"
          elevation="0"
          color="#0271bb"
        >
          <v-icon>mdi-plus</v-icon>Create post</v-btn
        >
      </div>
    </div>
    <h2 v-if="!group.posts" style="text-align:center;">No posts yet</h2>
    <div class="posts-container mt-2">
      <div :key="i" v-for="(post, i) in group.posts" class="post-container">
        <div style="display:flex; flex-direction: column; padding:10px;">
          <div style="display:flex; align-items:center;">
            <h2 class="mr-2">{{ post.title }}</h2>
            <span style="text-decoration:underline;">@{{ post.author }}</span>
          </div>
          <span class="post-description">{{ post.description }}</span>
          <div class="reactions">
            <div class="reactions-wrap">
              <v-icon color="primary">mdi-heart</v-icon> {{ post.likes }}
            </div>
            <div class="reactions-wrap">
              <v-icon color="secondary">mdi-comment</v-icon> {{ post.comments }}
            </div>
          </div>
        </div>
        <div v-if="post.image">
          <img
            style="width:150px; height:100%;"
            :src="getImage(post.image)"
            alt=""
          />
        </div>
        <v-icon v-else style="margin-right:50px;" size="60">mdi-forum</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupDetail",

  computed: {
    group: function() {
      return this.$store.getters.getGroups[this.$route.params.id];
    },
  },
  methods: {
    getImage: function(path) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + path + ".png");
    },
  },
};
</script>

<style>
.posts-container {
  display: flex;
  flex-direction: column;
}

.post-container {
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  max-height: 125px;
}

.post-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.reactions {
  width: 125px;
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  position: relative;
  top: 25px;
  z-index: 1;
}

.reactions-wrap {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  border-radius: 2px;
  padding: 2px;
}
</style>
