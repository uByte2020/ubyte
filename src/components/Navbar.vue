<template>
  <b-navbar
    class="mt-0"
    id="Menu"
    toggleable="lg"
    type="dark"
    :variant="scrollPosition > 657 ? 'dark' : 'transparent'"
  >
    <!-- transparent scrolling -->
    <b-navbar-brand class="p-1 ml-1">
      <img src="../assets/imgs/logowhite.png" alt="logo" height="35" />
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle">
      
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle" is-nav>
      <b-navbar-nav class="m-auto">
        <b-nav-item href="#home">
          {{ $t("nav.Home") }}
        </b-nav-item>
        <b-nav-item href="#about">{{ $t("nav.Sobre") }}</b-nav-item>
        <b-nav-item href="#solutions">{{ $t("nav.Soluções") }}</b-nav-item>
        <b-nav-item href="#projects">{{ $t("nav.Portfólio") }}</b-nav-item>
        <b-nav-item href="#contacts">{{ $t("nav.Contactos") }}</b-nav-item>
      </b-navbar-nav>

      <div class="locale-changer">
        <button
          type="button"
          class="btn btn-sm lang-btn"
          :class="{
            'btn-dark': langActive === 0,
            'lang-btn-active': langActive === 0,
          }"
          @click="changeLocale(langs[0].langs, 0)"
        >
          {{ langs[0].title }}
        </button>

        <button
          type="button"
          class="btn btn-sm lang-btn"
          :class="{
            'btn-dark': langActive === 1,
            'lang-btn-active': langActive === 1,
          }"
          @click="changeLocale(langs[1].langs, 1)"
        >
          {{ langs[1].title }}
        </button>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
// import {
//   mdbNavbar,
//   mdbNavbarBrand,
//   mdbNavbarToggler,
//   mdbNavbarNav,
//   mdbNavItem,
// } from "mdbvue";
import i18n from "../i18n";
export default {
  // components: {
  //   mdbNavbar,
  //   mdbNavbarBrand,
  //   mdbNavbarToggler,
  //   mdbNavbarNav,
  //   mdbNavItem,
  // },
  props: ["homeheight"],
  data() {
    return {
      test: "#39c0e2",
      scrollPosition: null,
      langs: [
        { langs: "PT", title: "PT" },
        { langs: "EN", title: "EN" },
      ],
      langActive: 0,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    changeLocale(locale, langActive) {
      this.langActive = langActive;
      i18n.locale = locale;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
#Menu {
  /*  background-color: #39c0e2; */
  position: fixed;
  width: 100%;
  z-index: 1;
}
.nav-link {
  color: #fff !important;
  -ms-color: #fff !important;
  -moz-color: #fff !important;
  -webkit-color: #fff !important;
}
.locale-changer {
  padding-right: 2%;
  -ms-padding-right: 2%;
  -moz-padding-right: 2%;
  -webkit-padding-right: 2%;
}
.btn {
  margin: 2px;
  -ms-margin: 2px;
  -moz-margin: 2px;
  -webkit-margin: 2px;
}

.lang-btn {
  color: #fff;
  -ms-color: #fff;
  -moz-color: #fff;
  -webkit-color: #fff;
}

.lang-btn-active {
  border: 1px solid rgba(255, 255, 255, 0.3);
  -ms-border: 1px solid rgba(255, 255, 255, 0.3);
  -moz-border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-border: 1px solid rgba(255, 255, 255, 0.3);

  background-color: transparent;
  -ms-background-color: transparent;
  -moz-background-color: transparent;
  -webkit-background-color: transparent;
}
</style>