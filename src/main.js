import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.component("navbar", require("./components/Navbar.vue").default);
Vue.component("sections", require("./components/Sections.vue").default);
Vue.component("main-app", require("./components/MainApp.vue").default);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
