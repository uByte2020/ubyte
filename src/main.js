import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
