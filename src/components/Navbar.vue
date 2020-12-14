<template>
  <mdb-navbar
    position="top"
    class="mt-0"
    id="Menu"
    :color="scrollPosition > 657 ? 'black' : ''"
  >
    <!-- transparent scrolling -->
    <mdb-navbar-brand class="p-1 ml-1">
      <img src="../assets/imgs/logowhite.png" alt="logo" height="35" />
    </mdb-navbar-brand>

    <mdb-navbar-toggler>
      <mdb-navbar-nav class="m-auto">
        <mdb-nav-item href="#home" anchorClass="white-text mr-3">
          {{ $t("nav.Home") }}
        </mdb-nav-item>
        <mdb-nav-item href="#about" anchorClass="white-text mx-3">{{
          $t("nav.Sobre")
        }}</mdb-nav-item>
        <mdb-nav-item href="#solutions" anchorClass="white-text mx-3">{{
          $t("nav.Soluções")
        }}</mdb-nav-item>
        <mdb-nav-item href="#projects" anchorClass="white-text mx-3">{{
          $t("nav.Portfólio")
        }}</mdb-nav-item>
        <mdb-nav-item href="#contacts" anchorClass="white-text ml-3">{{
          $t("nav.Contactos")
        }}</mdb-nav-item>
      </mdb-navbar-nav>

      <div class="locale-changer">
        <!-- <button
          type="button"
          class="btn btn-dark btn-sm"
          v-for="entry in langs"
          :key="entry.lang"
          @click="changeLocale(entry.langs)"
        >
          {{ entry.title }}
        </button> -->
        <button
          type="button"
          class="btn btn-sm lang-btn"
          :class="{'btn-dark':langActive===0,'lang-btn-active':langActive===0}"
          @click="changeLocale(langs[0].langs,0)"
        >
          {{ langs[0].title }}
        </button>

        <button
          type="button"
          class="btn btn-sm lang-btn"
          :class="{'btn-dark':langActive===1,'lang-btn-active':langActive===1}"
          @click="changeLocale(langs[1].langs,1)"
        >
          {{ langs[1].title }}
        </button>
      </div>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
import i18n from "../i18n";
export default {
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },
  props: ["homeheight"],
  data() {
    return {
      test: "#39c0e2",
      scrollPosition: null,
      langs: [
        { langs: "PT", title: "PT" },
        { langs: "EN", title: "EN" },
      ],
      langActive:0
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
nav {
  /*  background-color: #39c0e2; */
}
.nav-link {
  color: rgb(55, 191, 225) !important;
  -ms-color: rgb(55, 191, 225) !important;
  -moz-color: rgb(55, 191, 225) !important;
  -webkit-color: rgb(55, 191, 225) !important;
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

.lang-btn{
  color: #fff;
  -ms-color: #fff;
  -moz-color: #fff;
  -webkit-color: #fff;
}

.lang-btn-active{
  border:1px solid rgba(255,255,255,.3);
  -ms-border:1px solid rgba(255,255,255,.3);
  -moz-border:1px solid rgba(255,255,255,.3);
  -webkit-border:1px solid rgba(255,255,255,.3);
  
  background-color: transparent;
  -ms-background-color: transparent;
  -moz-background-color: transparent;
  -webkit-background-color: transparent;
}
</style>