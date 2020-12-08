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
        <mdb-nav-item href="#home" anchorClass="white-text mr-3"
          >Home</mdb-nav-item
        >
        <mdb-nav-item href="#" anchorClass="white-text mx-3"
          >Sobre</mdb-nav-item
        >
        <mdb-nav-item href="#solutions" anchorClass="white-text mx-3"
          >Soluções</mdb-nav-item
        >
        <mdb-nav-item href="#" anchorClass="white-text mx-3"
          >Portfólio</mdb-nav-item
        >
        <mdb-nav-item href="#contacts" anchorClass="white-text ml-3"
          >Contactos</mdb-nav-item
        >
      </mdb-navbar-nav>
        <button type="button" class="btn btn-dark btn-sm">Pt</button>
        <button type="button" class="btn btn-dark btn-sm">en</button>
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
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
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
}
</style>