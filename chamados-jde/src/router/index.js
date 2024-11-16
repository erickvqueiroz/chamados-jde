import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Dashboard from "@/components/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("userEmail")) {
          next();
        } else {
          next({ name: "Login" });
        }
      },
    },
  ],
});
