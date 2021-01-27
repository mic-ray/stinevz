import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Event from "../views/Event.vue";
import Group from "../views/Group.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // Redirect to login view by default
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/events",
    name: "Event",
    component: Event,
  },
  {
    path: "/groups",
    name: "Group",
    component: Group,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
