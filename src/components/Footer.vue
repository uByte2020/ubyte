<template>
  <footer class="col-12 container-fluid">
    <div class="menu text-center col-sm-2 col-xs-12">
      <ul>
        <li class="title">Menu</li>
        <hr />
        <li class="options">
          <a href="#">{{ $t("Footer.Inicio") }}</a>
        </li>
        <li class="options">
          <a href="#">{{ $t("Footer.Sobre") }}</a>
        </li>
        <li class="options">
          <a href="#">{{ $t("Footer.Soluções") }}</a>
        </li>
        <li class="options">
          <a href="#">{{ $t("Footer.Portfólio") }}</a>
        </li>
      </ul>
    </div>
    <div class="menu col-sm-2 col-xs-12">
      <ul>
        <li class="title">{{ $t("Footer.Informação") }}</li>
        <hr />
        <li class="options">
          <a href="#">{{ $t("Footer.Contactos") }}</a>
        </li>
        <li class="options">
          <a href="#">{{ $t("Footer.Quem_Somos") }}</a>
        </li>
        <li class="options">
          <a href="#">{{ $t("Footer.Privacidade") }}</a>
        </li>
      </ul>
    </div>
    <div class="social menu col-sm-3 col-xs-12">
      <ul>
        <li class="title">{{ $t("Footer.Siga") }}</li>
        <hr />
        <ul class="options-inline">
          <li>
            <a @click="facebook">
              <i class="fab fa-facebook" aria-hidden="true"> uByte</i>
            </a>
          </li>
          <li>
            <a @click="instagram">
              <i class="fab fa-instagram" aria-hidden="true"> uByte</i>
            </a>
          </li>
        </ul>
      </ul>
    </div>
    <div class="copyrights text-center">
      <p id="p-copy-right" class="text-center">
        uByte &copy; |{{ $t("Footer.Direitos") }}| uByte - 2020
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    instagram() {
      var abaNova = window.open("https://www.instagram.com/ubyte_/", "_blank");
      abaNova.focus();
    },
    facebook() {
      var abaNova = window.open("https://www.facebook.com/ubytee", "_blank");
      abaNova.focus();
    },
  },
  component: {},
};
</script>

<style scoped>
footer {
  font-size: 0.9rem;
  -ms-font-size: 0.9rem;
  -moz-font-size: 0.9rem;
  -webkit-font-size: 0.9rem;
  
  background-color: #2d2d2d;
  -ms-background-color: #2d2d2d;
  -moz-background-color: #2d2d2d;
  -webkit-background-color: #2d2d2d;
  
  position: static;
  -ms-position: static;
  -moz-position: static;
  -webkit-position: static;
  
  padding-top: 20px;
  -ms-padding-top: 20px;
  -moz-padding-top: 20px;
  -webkit-padding-top: 20px;
  
  padding-left: 15px;
  -ms-padding-left: 15px;
  -moz-padding-left: 15px;
  -webkit-padding-left: 15px;
  
  padding-right: 15px;
  -ms-padding-right: 15px;
  -moz-padding-right: 15px;
  -webkit-padding-right: 15px;
  
  padding-bottom: 15px;
  -ms-padding-bottom: 15px;
  -moz-padding-bottom: 15px;
  -webkit-padding-bottom: 15px;
}
footer .menu {
  display: inline-block;
  -ms-display: inline-block;
  -moz-display: inline-block;
  -webkit-display: inline-block;
  
  text-align: left;
  -ms-text-align: left;
  -moz-text-align: left;
  -webkit-text-align: left;
}
footer .menu ul {
  list-style-type: none;
  -ms-list-style-type: none;
  -moz-list-style-type: none;
  -webkit-list-style-type: none;
  
  text-align: left;
  -ms-text-align: left;
  -moz-text-align: left;
  -webkit-text-align: left;
}

footer .menu ul li {
  text-align: left;
  -ms-text-align: left;
  -moz-text-align: left;
  -webkit-text-align: left;
}

footer .menu li a {
  text-transform: none;
  -ms-text-transform: none;
  -moz-text-transform: none;
  -webkit-text-transform: none;
  
  text-decoration: none;
  -ms-text-decoration: none;
  -moz-text-decoration: none;
  -webkit-text-decoration: none;
  
  font-weight: normal;
  -ms-font-weight: normal;
  -moz-font-weight: normal;
  -webkit-font-weight: normal;
  
  color: rgba(255, 255, 255, 0.8);
  -ms-color: rgba(255, 255, 255, 0.8);
  -moz-color: rgba(255, 255, 255, 0.8);
  -webkit-color: rgba(255, 255, 255, 0.8);
  
  text-align: left;
  -ms-text-align: left;
  -moz-text-align: left;
  -webkit-text-align: left;
}
footer .menu hr {
  background-color: white;
  -ms-background-color: white;
  -moz-background-color: white;
  -webkit-background-color: white;
  
  border-width: 1px;
  -ms-border-width: 1px;
  -moz-border-width: 1px;
  -webkit-border-width: 1px;
  
  width: 30%;
  -ms-width: 30%;
  -moz-width: 30%;
  -webkit-width: 30%;
  
  margin-left: 0px;
  -ms-margin-left: 0px;
  -moz-margin-left: 0px;
  -webkit-margin-left: 0px;
}
footer .menu .title {
  font-weight: bold;
  -ms-font-weight: bold;
  -moz-font-weight: bold;
  -webkit-font-weight: bold;
  
  color: white;
  -ms-color: white;
  -moz-color: white;
  -webkit-color: white;
  
  margin-bottom: 9%;
  -ms-margin-bottom: 9%;
  -moz-margin-bottom: 9%;
  -webkit-margin-bottom: 9%;
}
footer .menu .options {
  text-transform: none;
  -ms-text-transform: none;
  -moz-text-transform: none;
  -webkit-text-transform: none;
}
footer .menu .options-inline {
  padding: 0;
  -ms-padding: 0;
  -moz-padding: 0;
  -webkit-padding: 0;
}
footer .copyrights {
  color: white;
  -ms-color: white;
  -moz-color: white;
  -webkit-color: white;
  
  margin-top: 1%;
  -ms-margin-top: 1%;
  -moz-margin-top: 1%;
  -webkit-margin-top: 1%;
  
  font-size: 0.8rem;
  -ms-font-size: 0.8rem;
  -moz-font-size: 0.8rem;
  -webkit-font-size: 0.8rem;
}

#p-copy-right {
  margin-block-end: 0 !important;
  -ms-margin-block-end: 0 !important;
  -moz-margin-block-end: 0 !important;
  -webkit-margin-block-end: 0 !important;
}
</style>
