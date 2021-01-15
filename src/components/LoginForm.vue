<template>
  <div>
    <v-form>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field label="STiNE-Identifier" outlined />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field label="STiNE-Password" outlined />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn v-on:click="login" color="primary">Login</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({}),
  methods: {
    login: function() {
      this.$router.push("/profile");
    },
  },
};
</script>
