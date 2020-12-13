<template>
  <div class="container-fluid m-0 p-0 overflow-hidden">
    <navbar />
    <div
      id="home"
      :homeheight="homeHeight"
      class="container-fluid main-divs 1 m-0 p-0"
    >
      <div class="row">
        <mdb-col xl="12" lg="12" md="12" sm="12" class>
          <mdb-view class="back position-absolute">
            <video autoplay muted loop id="landing-video">
              <source type="video/mp4" src="../assets/imgs/video.mp4" />
            </video>
            <mdb-mask flex-center overlay="black-strong" />
          </mdb-view>
        </mdb-col>
      </div>
      <mdb-row
        data-aos="fade-down"
        data-aos-duration="2000"
        class="m-0 p-0 text-white align-items-center justify-content-center w-100 h-100"
      >
        <mdb-col xl="6" lg="10" md="12" sm="12" class>
          <!--  -->
          <span class="display-4 TextoIniti"> {{ $t("Home.logo") }} </span>
          <p class="TextoIniti">
            {{ $t("Home.Solucoes") }}
            <span class="highlight">{{ $t("Home.DIGITAIS") }}</span
            >{{ $t("Home.P") }}
            <span class="highlight">{{ $t("Home.Negocio") }}</span>
          </p>
          <mdb-btn outline="white" class="btninicial" size="lg">{{
            $t("Home.Botao")
          }}</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
    <div id="about" class="container-fluid main-divs 2 overflow-hidden m-0 p-0">
      <mdb-row>
        <mdb-col xl="6" lg="6" md="12" sm="12" id="deeper" class="m-0 p-0">
          <mdb-view class="back position-absolute h-100">
            <img
              src="../assets/imgs/pausado.jpg"
              class="img-fluid w-100 h-100"
            />
            <mdb-mask flex-center class="black-overlay" />
          </mdb-view>

          <mdb-row
            class="justify-content-center text-white w-100 h-100"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <mdb-col class="align-self-center mobile-padding">
              <h3 class>{{ $t("Home.Solucao") }}</h3>
              <p class="text-uppercase">
                {{ $t("Home.SL") }}
                <span class="highlight">{{ $t("Home.adaptadas") }}</span>
                {{ $t("Home.E") }}
                <span class="highlight">{{ $t("Home.personalizadas") }}</span>
                {{ $t("Home.Clientes") }}
              </p>
              <mdb-btn class="highlight-background" size="lg">{{
                $t("Home.BotaoSolucao")
              }}</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col xl="7" lg="7" md="12" sm="12" class="skewed3">
          <img
            :src="FiskamerImg"
            id="three-phones"
            class="img-fluid"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          />
        </mdb-col>
      </mdb-row>
    </div>
    <div class="main-div">
      <div class="skewed2">
        <mdb-row>
          <mdb-col
            xl="6"
            lg="10"
            md="11"
            sm="12"
            class="skewed2-text col-md-6 col-lg-6"
          >
            <h3
              class="text-left text-md-center text-lg-left mt-lg-1 mt-md-4"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              {{ $t("Quem_somos.quem_somos") }}
            </h3>
            <p
              class="text-justify"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              {{ $t("Quem_somos.texto_qs") }}
            </p>
          </mdb-col>

          <mdb-col class="skewed2-progress p-md-4 p-lg-0 col-md-6 col-lg-6">
            <h3
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              {{ $t("Quem_somos.TecnUsadas") }}
            </h3>
            <div
              class="progress-txt"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <p class="Texto1">Laravel</p>
              <p class="Texto">NodeJs</p>
            </div>
            <div
              class="skewed2-progress-1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <div class="progress">
                <div
                  name="Laravel"
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div class="progress">
                <div
                  name="NodeJs"
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div
              class="progress-txt"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <p class="Texto1">MySql</p>
              <p class="Texto">MongoDb</p>
            </div>
            <div
              class="skewed2-progress-1"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div class="progress">
                <div
                  name="MySql"
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress">
                <div
                  name="MongoDb"
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <p
              class="progress-txt Texto1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              Vue
            </p>
            <div
              class="progress"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <div
                name="Vue"
                class="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </mdb-col>
        </mdb-row>
      </div>
    </div>
    <!------------------------------------------------------------------------->
    <div id="solutions" class="main-solutions container-fluid 3">
      <mdb-row class="align-items-center w-100 h-100">
        <mdb-col
          xl="6"
          lg="6"
          md="12"
          class="text-white"
          sm="12"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 class="text-center">{{ $t("Conheca_Nossas_Solucoes.CNS") }}</h1>
          <img
            src="../assets/imgs/macgold.png"
            alt="macgold"
            class="img-fluid w-100"
          />
          <img
            src="../assets/imgs/phone-inbox.png"
            alt="phone-inbox "
            class="img-fluid w-25 position-absolute phone-inbox"
          />
        </mdb-col>
        <mdb-col
          xl="5"
          lg="6"
          md="12"
          sm="12"
          class="align-items-center justify-content-md-center text-white icones"
        >
          <mdb-row
            class="mb-md-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <mdb-col class="" md="2" offsetMd="1" offsetXl="1" offsetLg="1">
              <i class="fas fa-code fa-4x mt-2"></i>
            </mdb-col>
            <mdb-col class="" md="8" sm="12" offsetLg="1">
              <h4 class="text-left solutions-names">
                {{ $t("Conheca_Nossas_Solucoes.ProtoipoIterativo") }}
              </h4>
              <p class="text-justify">
                {{ $t("Conheca_Nossas_Solucoes.ProtoipoIterativoT") }}
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row
            class="mb-md-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1100"
            data-aos-anchor-placement="top-bottom"
          >
            <mdb-col
              class=""
              md="2"
              offsetMd="1"
              offsetXl="1"
              offsetLg="1"
              sm="12"
            >
              <!-- <i class="fas fa-thumbs-up fa-4x"></i> -->
              <img
                :src="IdentidadeVisualicone"
                width="100"
                height="95"
                class="Identidadeicone fa-thumbs-up fas fa-4x"
              />
            </mdb-col>
            <mdb-col class="" md="8" sm="12" offsetLg="1">
              <h4 class="solutions-names text-left">
                {{ $t("Conheca_Nossas_Solucoes.IdentidadeV") }}
              </h4>
              <p class="text-justify">
                {{ $t("Conheca_Nossas_Solucoes.IdentidadeVT") }}
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row
            class="mb-md-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1200"
            data-aos-anchor-placement="top-bottom"
          >
            <mdb-col
              class=""
              md="2"
              offsetMd="1"
              offsetXl="1"
              offsetLg="1"
              sm="12"
            >
              <i class="fas fa-desktop fa-4x"></i>
            </mdb-col>
            <mdb-col class="" md="8" sm="12" offsetLg="1">
              <h4 class="text-left solutions-names">
                {{ $t("Conheca_Nossas_Solucoes.DesignUI") }}
              </h4>
              <p class="text-justify">
                {{ $t("Conheca_Nossas_Solucoes.DesignUIT") }}
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row
            class="mb-md-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1300"
            data-aos-anchor-placement="top-bottom"
          >
            <mdb-col
              class=""
              md="2"
              offsetMd="1"
              offsetXl="1"
              offsetLg="1"
              sm="12"
            >
              <i class="fas fa-th fa-4x"></i>
            </mdb-col>
            <mdb-col class="" md="8" sm="12" offsetLg="1">
              <h4 class="text-left solutions-names">
                {{ $t("Conheca_Nossas_Solucoes.DesenvolvimentoSoftware") }}
              </h4>
              <p class="text-justify">
                {{ $t("Conheca_Nossas_Solucoes.DesenvolvimentoSoftwareTxt") }}
              </p>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </div>
    <div id="message-div" class="main-divs container-fluid 4 m-0 p-0">
      <mdb-row
        class="justify-content-center align-items-center h-100 text-white black-overlay"
      >
        <mdb-col
          xl="5"
          lg="6"
          md="8"
          sm="12"
          class="col-12 border-message"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <!-- text-overlay -->
          <span class="display-4 font-weight-bold">{{
            $t("ImagemDaImpresa.IMG")
          }}</span>

          <mdb-btn outline="white" size="lg">{{
            $t("ImagemDaImpresa.BotaoImg")
          }}</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
    <div id="projects" class="main-portofolio container-fluid">
      <div class="row text-white">
        <div class="col-8 portofolio">
          <div class="row justify-content-center">
            <div xl="6" lg="8" md="10" sm="12" class="col-12 p-3">
              <h2 class="font-weight-bold border-bottom">
                {{ $t("Portofolio.Port") }}
              </h2>
              <!-- <h1 class="border-bottom">CRIATIVIDADE E ESTRATÉGIA</h1> -->
              <nav class="navbar">
                <ul class="navbar-nav projects-menu">
                  <li class="nav-item">
                    <a
                      href="#todos"
                      @click="showPortFolio('todos')"
                      class="text-white font-weight-bold"
                      >{{ $t("Portofolio.todos") }}</a
                    >
                  </li>
                  <li>
                    <a
                      href="#DesignGrafico"
                      class="text-white font-weight-bold"
                      @click="showPortFolio('graphicDesign')"
                      >{{ $t("Portofolio.DesignGrafico") }}</a
                    >
                  </li>
                  <li>
                    <a
                      href="#Website"
                      class="text-white font-weight-bold"
                      @click="showPortFolio('website')"
                      >Website</a
                    >
                  </li>
                  <li>
                    <a
                      href="#Apps"
                      class="text-white font-weight-bold"
                      @click="showPortFolio('apps')"
                      >Apps</a
                    >
                  </li>
                  <li>
                    <a
                      href="#Softwares"
                      class="text-white font-weight-bold"
                      @click="showPortFolio('softwares')"
                      >Softwares</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row p-5 justify-content-center">
            <div
              v-for="(work, index) in portFolio"
              :key="index"
              class="col-lg-4 col-md-4 col-sm-7 col-xl-4"
            >
              <img :src="work" class="img-fluid w-100 h-80 projects-images" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="control"
      class="main-divs container-fluid 6 overflow-hidden p-1 m-0"
    >
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 space-top-1">
          <div class="row all p-0 m-0">
            <div
              offsetLg="1"
              offsetMd
              class="col-lg-4 col-md-12 col-sm-12 col-xl-5 space-top-5"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <h1>{{ $t("AssumaControle.AC") }}</h1>
              <p class="text-justify my-3 font-control">
                {{ $t("AssumaControle.ACText") }}
              </p>
              <ul class="text-left mt-4 font-control">
                <li>{{ $t("AssumaControle.AbordagemAgil") }}</li>
                <li>{{ $t("AssumaControle.RelatorioDesepenho") }}</li>
                <li>{{ $t("AssumaControle.ComunicacaoRegular") }}</li>
                <li>{{ $t("AssumaControle.EntregaContinua") }}</li>

                <!-- <button type="button" @click="pt" class="btn btn-dark btn-sm">en</button>
              <p>{{pt.quem_somos?en.quem_somos||}}</p> -->
              </ul>
            </div>
            <div
              class="col-sm-12 col-lg-7 col-md-12 space-top-5"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <img src="../assets/imgs/mockup.jpg" class="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="p-0 m-0"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <div class="skewed"></div>
      </div>
    </div>
    <!--
    <div id="plans" class="main-divs container-fluid">
      <mdb-row class="justify-content-center align-items-center text-white">
        <mdb-col
          md="7"
          xl="3"
          lg="3"
          sm="10"
          class="col-10 plans-container p-3 p-mx-2"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <i class="fas fa-bell fa-4x highlight mt-4"></i>
          <h2 class="font-weight-normal mt-3">BASIC</h2>
          <p class="text-center">Plano avançado excelente para empresas online, pequenas e locais</p>
          <p class="text-center my-3 display-4">30k</p>
          <ul class="navbar-nav my-3 text-center">
            <li>Sincronização de email</li>
            <li>Várias listas de tarefas</li>
            <li>60M em nuvem</li>
          </ul>
          <mdb-btn outline="white" size="lg" class="mb-4">Escolher Plano</mdb-btn>
        </mdb-col>
        <mdb-col
          xl="3"
          lg="3"
          md="7"
          sm="12"
          class="col-10 plans-container bigger p-3"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <i class="fas fa-paper-plane fa-7x highlight mt-5"></i>
          <h2 class="font-weight-normal mt-3">BASIC</h2>
          <p class="text-center">Plano avançado excelente para empresas online, pequenas e locais</p>
          <p class="text-center my-3 display-4">60k</p>
          <ul class="navbar-nav my-3 text-center">
            <li>Sincronização de email</li>
            <li>Várias listas de tarefas</li>
            <li>106M em nuvem</li>
          </ul>
          <mdb-btn size class="mb-5">Escolher Plano</mdb-btn>
        </mdb-col>
        <mdb-col
          xl="3"
          lg="3"
          md="7"
          sm="12"
          class="col-10 plans-container p-3"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <i class="fas fa-cloud-upload-alt fa-4x highlight mt-3"></i>
          <h2 class="font-weight-normal mt-3">BASIC</h2>
          <p class="text-center">Plano avançado excelente para empresas online, pequenas e locais</p>
          <p class="text-center my-3 display-4">60k</p>
          <ul class="navbar-nav my-3 text-center">
            <li>Sincronização de email</li>
            <li>Várias listas de tarefas</li>
            <li>106M em nuvem</li>
          </ul>
          <mdb-btn outline="white" size="lg" class="mb-4">Escolher Plano</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
    -->
    <div id="contacts" class="main-div container-fluid 8 m-0 p-0">
      <div
        class="row align-items-center justify-content-center text-white w-100 h-100 m-0 p-0"
      >
        <div
          class="col-xl-5 col-lg-6 col-md-6 col-sm-12"
          data-aos="zoom-out-left"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <h2>{{ $t("DesafieCriatividade") }}</h2>
        </div>
        <div
          class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <mdb-btn class="highlight-background">{{
            $t("ConhecaNossasSolucoes")
          }}</mdb-btn>
        </div>
      </div>
    </div>
    <div id="footer">
      <mdb-row class="w-100 h-50 m-0 p-0 mt-5 align-items-center text-white">
        <Footer />
      </mdb-row>
    </div>
  </div>
</template>

<script>
import { mdbMask, mdbView, mdbBtn, mdbRow, mdbCol } from "mdbvue";
// import {mapState, mapMutations} from 'vuex'
export default {
  components: { mdbMask, mdbView, mdbBtn, mdbRow, mdbCol },
  data() {
    return {
      homeHeight: null,
      IdentidadeVisualicone: require("@/assets/svgs/IdentidadeVisual.svg"),
      FiskamerImg: require("@/assets/imgs/download.png"),
      portFolio: [],
      ourWorkers: {
        graphicDesign: [require("@/assets/imgs/project-1.jpg")],
        apps: [require("@/assets/imgs/project-2.jpg")],
        softwares: [require("@/assets/imgs/project-1.jpg")],
        website: [require("@/assets/imgs/project-3.jpg")],
      },
      Portof: {
        todos: true,
        design: false,
      },
    };
  },
  mounted() {
    this.homeHeight = document.getElementById("home").offsetHeight;
    this.portFolio = [
      ...this.ourWorkers.graphicDesign,
      ...this.ourWorkers.apps,
      ...this.ourWorkers.softwares,
    ];
    //process.env.NODE_ENV === 'development'
  },
  methods: {
    showPortFolio(work) {
      if (work === "todos")
        this.portFolio = [
          ...this.ourWorkers.graphicDesign,
          ...this.ourWorkers.apps,
          ...this.ourWorkers.softwares,
          ...this.ourWorkers.website,
        ];
      else this.portFolio = [...this.ourWorkers[work]];
    },
    // todos() {
    //   this.Portof.design = false;
    //   this.Portof.todos = true;
    // },
    // design() {
    //   this.Portof.design = true;
    //   this.Portof.todos = false;
    // },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/bpoints";
.highlight {
  color: $highlightColor;
}
.plans-container {
  background: $plansColor;
  margin-top: 5%;
}
.highlight-background {
  background: $highlightColor;
}
footer {
  background-color: $footerColor;

  width: 99%;
}
#control {
  background-color: $mockupBackground;
  overflow: hidden;
  z-index: -1;
}
.skewed {
  z-index: 1;

  /*left: 0; */
  background: $highlightColor;
  transform: skewY(-6deg);
  transform-origin: top left;
  width: 100%;
  height: 100vh;
}
</style>