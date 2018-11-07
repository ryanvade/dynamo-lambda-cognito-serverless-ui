import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/*webpackChunkName: "login" */ "./views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import(/*webpackChunkName: "regiser" */ "./views/Register.vue"),
    },
    {
      path: "/verify",
      name: "verify",
      component: () => import(/*webpackChunkName: "verify" */"./views/ConfirmAccount.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import(/*webpackChunkName: "tasks" */"./views/Tasks.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/tasks/create",
      name: "create",
      component: () => import(/*webpackChunkName: "create"*/"./views/CreateTask.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/task/:id",
      name: "task",
      component: () => import(/*webpackChunkName: "task"*/"./views/Task.vue"),
      props: true,
      meta: { requiresAuth: true }
    },
  ],
});
