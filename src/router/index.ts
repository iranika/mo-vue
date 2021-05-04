import Vue from "vue";
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";
import SearchEngine from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: (route: { query: { page: any; }; }) => ({
      page: route.query.page
    })
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/search",
    name: "search",
    component: SearchEngine,
    props: (route: { query: { page: any; }; }) => ({
      page: route.query.page
    })
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
