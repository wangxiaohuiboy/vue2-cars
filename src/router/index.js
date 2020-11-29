import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Index",
  component: Index,
  children: [{
    path: "/user",
    name: "User",
    components: () => import("../views/user/index.vue")
  }]
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;