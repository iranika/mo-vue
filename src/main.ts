import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker.js";
import router from "./router.js";
import vuetify from "./plugins/vuetify.js";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
