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
    path: "/timeline",
    name: "timeline",
    component: () => import("../views/Timeline.vue")
  },
  {
    path: "/charactor",
    redirect: "/charactor/seri"
  },
  {
    path: "/charactor/:name",
    name: "charactor",
    props: (route: { params: { name: String; }})=> ({
      name: route.params.name
    }),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Charactor.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/search",
    name: "search",
    component: SearchEngine,
    props: (route: { query: { page: any; }; }) => ({
      page: route.query.page
    })
  },
  {
    path: "/products",
    name: "products",
    component: ()=> import("../views/Products.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: ()=> import("../views/Mypage.vue"),
  },
  {
    path: "/dlsite",
    name: "dlsite",
    component: ()=> import("../views/DLsiteProducts.vue"),
  },

  {
    path: "/:lang/",
    component: Home,
    props: (route: { params: { lang: String; }, query: { page: any; }})=> ({
      page: route.query.page,
      lang: route.params.lang
    }),

  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
