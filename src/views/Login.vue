<template>
  <div class="login-container">
    <img
      src="https://www.rrz.uni-hamburg.de/2510965/stine-640x361-38571f28ae48dbbc846435b7e7c21500644a7ca4.jpg"
      alt="Stine-Logo"
      class="logo"
    />
    <div class="loginCard elevation-2">
      <h1 class="login-heading">Login to STiNE VZ</h1>
      <label for="identifier">STiNE-Identifier:</label>
      <input id="identifier" type="text" placeholder="For example: bax1337" />
      <label for="password">STiNE-Password:</label>
      <input id="password" type="password" placeholder="********" />
      <v-btn
        flat
        v-on:click="login"
        color="primary"
        class="login-button text-capitalize"
        >Login</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login: function() {
      this.$router.push("/profile");
    },
  },
};
</script>
<style>
.login-container {
  width: 50%;
  margin: auto;
}
.logo {
  height: 100px;
  position: relative;
  top: 7px;
}
.login-heading {
  color: #e2001a;
  grid-column: 1 / span 2;
}
.loginCard {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  row-gap: 20px;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: rgba(230, 230, 230, 0.2);
}
label {
  font-weight: bold;
}
#identifier,
#password {
  padding: 5px;
  height: 50px;
  width: 80%;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
}
.login-button {
  grid-column: 1 / span 2;
  width: 50%;
}
</style>
