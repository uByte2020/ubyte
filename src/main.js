import Vue from "vue";
import App from "./App.vue";
import store from './story/index'
Vue.config.productionTip = false;

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import i18n from './i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.component("navbar", require("./components/Navbar.vue").default);
Vue.component("sections", require("./components/Sections.vue").default);
Vue.component("main-app", require("./components/MainApp.vue").default);
Vue.component("Footer", require("./components/Footer.vue").default);
new Vue({
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
