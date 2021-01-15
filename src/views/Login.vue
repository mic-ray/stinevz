<template>
  <div>
    <div class="loginCard">
      <v-row justify="center">
        <h1>Login to STiNE VZ</h1>
      </v-row>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
<style>
.loginCard {
  border: 1px solid black;
  background-color: rgba(230, 230, 230, 0.2);
  width: 60%;
  margin: auto;
  padding: 20px;
}
</style>
