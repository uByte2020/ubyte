<template>
  <div class="m-0 p-0 overflow-hidden">
    <navbar></navbar>
    <div
      id="home"
      :homeheight="homeHeight"
      class="container-fluid main-divs 1 m-0 p-0"
    >
      <mdb-row>
        <mdb-col xl="12" lg="12" md="12" sm="12" class>
          <mdb-view class="back position-absolute">
            <video autoplay muted loop id="landing-video">
              <source type="video/mp4" src="../assets/imgs/video.mp4" />
            </video>
            <mdb-mask flex-center overlay="black-strong" />
          </mdb-view>
        </mdb-col>
      </mdb-row>
      <mdb-row
        data-aos="fade-down"
        data-aos-duration="2000"
        class="m-0 p-0 text-white align-items-center justify-content-center w-100 h-100"
      >
        <mdb-col xl="6" lg="10" md="12" sm="12" class>
          <!--  -->
          <span class="display-4 TextoIniti">BEM-VINDO A uBYTE</span>
          <p class="TextoIniti">
            SOLUÇÕES
            <span class="highlight">DIGITAIS</span> PARA O SEU
            <span class="highlight">NEGÓCIO</span>
          </p>
          <mdb-btn outline="white" class="btninicial" size="lg"
            >Conheça nossas soluções</mdb-btn
          >
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
              <h3 class>SOLUÇÕES INOVADORAS</h3>
              <p class="text-uppercase">
                soluções digitais
                <span class="highlight">adaptadas</span> E
                <span class="highlight">personalizadas</span>
                aos nossos clientes.
              </p>
              <mdb-btn class="highlight-background" size="lg"
                >Conheça nossas soluções</mdb-btn
              >
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
            >
              Quem Somos?
            </h3>
            <p
              class="text-justify"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              Somos uma equipa especializada em soluções digitais adaptadas e
              personalizadas aos nossos clientes. Apresentamos soluções
              inovadoras, softwares de optimo desempenho, Produtos e serviços de
              alta qualidade, Melhores Designers e Soluções adaptadas e
              personalizadas, tudo no melhor preço.
            </p>
          </mdb-col>

          <mdb-col class="skewed2-progress p-md-4 p-lg-0 col-md-6 col-lg-6">
            <h3
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              Tecnologias Usadas
            </h3>
            <div
              class="progress-txt"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <p class="Texto1">Laravel</p>
              <p class="Texto">NodeJs</p>
            </div>
            <div
              class="skewed2-progress-1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
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
            >
              <p class="Texto1">MySql</p>
              <p class="Texto">MongoDb</p>
            </div>
            <div
              class="skewed2-progress-1"
              data-aos="fade-left"
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
            >
              Vue
            </p>
            <div
              class="progress"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
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
    <div id="solutions" class="main-divs1 container-fluid 3">
      <!-- <mdb-view class="back position-absolute">
        <img src="../assets/imgs/laptop.jpg" class="img-fluid w-100" alt="test" />

        <mdb-mask flex-center overlay="black-strong" />
      </mdb-view>-->

      <mdb-row class="align-items-center w-100 h-100">
        <mdb-col
          xl="6"
          lg="6"
          md="12"
          class="text-white"
          sm="12"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h1 class="text-center">Conheça as nossas soluções</h1>
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
          >
            <mdb-col
              class=""
              md="2"
              offsetMd="1"
              offsetXl="1"
              offsetLg="1"
            >
              <i class="fas fa-code fa-4x mt-2"></i>
            </mdb-col>
            <mdb-col class="" md="8" sm="12" offsetLg="1">
              <h4 class="text-left solutions-names">PROTÓTIPOS ITERATIVOS</h4>
              <p class="text-justify">
                O principal objectivo da construção de protótipos é testar se o
                fluxo do produto é suave ou consistente.
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row
            class="mb-md-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1100"
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
                class="Identidadeicone fa-thumbs-up fas fa-4x "
              />
            </mdb-col>
            <mdb-col class="" md="8" sm="12" offsetLg="1">
              <h4 class="solutions-names text-left">IDENTIDADE VISUAL</h4>
              <p class="text-justify">
                Criação de uma identidade visual bem definida e aplicada
                adequadamente, para que a empresa possa transmitir confiança ao
                público e ser uma marca destacada no mercado.
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row
            class="mb-md-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1200"
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
              <h4 class="text-left solutions-names">DESIGN DA UI</h4>
              <p class="text-justify">
                Um bom projeto de UI antecipa as necessidades do usuário e
                garante que a interface contenha elementos de fácil acesso e
                utilização, fornecendo uma experiência que é amigável e que não
                cause frustrações ao utilizador
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row
            class="mb-md-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1300"
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
                DESENVOLVIMENTO DE SOFTWARE E UI
              </h4>
              <p class="text-justify">
                O principal objectivo da construção de protótipos é testar se o
                fluxo do produto é suave ou consistente.
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
        >
          <!-- text-overlay -->
          <span class="display-4 font-weight-bold"
            >SUA EMPRESA PRECISA DE UMA NOVA IMAGEM?</span
          >

          <mdb-btn outline="white" size="lg">Envie Mensagem</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
    <div id="projects" class="main-divs container-fluid 5">
      <div class="text-white">
        <mdb-row class="justify-content-center">
          <mdb-col xl="6" lg="8" md="10" sm="12" class="col-12 p-3">
            <h2 class="font-weight-bold border-bottom">PORTFÓLIO</h2>
            <!-- <h1 class="border-bottom">CRIATIVIDADE E ESTRATÉGIA</h1> -->
            <nav class="navbar">
              <ul class="navbar-nav projects-menu">
                <li class="nav-item">
                  <a href="#" class="text-white font-weight-bold">Todos</a>
                </li>
                <li>
                  <a href="#" class="text-white font-weight-bold"
                    >Design Gráfico</a
                  >
                </li>
                <li>
                  <a href="#" class="text-white font-weight-bold">Website</a>
                </li>
                <li>
                  <a href="#" class="text-white font-weight-bold">Apps</a>
                </li>
                <li>
                  <a href="#" class="text-white font-weight-bold">Softwares</a>
                </li>
              </ul>
            </nav>
          </mdb-col>
        </mdb-row>
        <mdb-row class="p-5 justify-content-center">
          <mdb-col lg="4" md="12" sm="12">
            <img
              src="../assets/imgs/project-1.jpg"
              class="img-fluid w-100 projects-images"
            />
          </mdb-col>
          <mdb-col lg="4" md="12" class sm="12">
            <img
              src="../assets/imgs/project-2.jpg"
              class="img-fluid w-100 projects-images"
            />
          </mdb-col>
          <mdb-col lg="4" md="12" sm="12">
            <img
              src="../assets/imgs/project-3.jpg"
              class="img-fluid w-100 projects-images"
            />
          </mdb-col>
        </mdb-row>
      </div>
    </div>
    <div
      id="control"
      class="main-divs container-fluid 6 overflow-hidden p-0 m-0"
    >
      <mdb-row class="all p-0 m-0">
        <mdb-col
          lg="4"
          offsetLg="1"
          md="12"
          offsetMd
          sm="12"
          class="space-top-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1>Assuma o controle total</h1>
          <p class="text-justify my-3 font-control">
            Construímos um forte relacionamento com nossos clientes, realizando
            três ações: prestando contas de nossos projetos, tornando nossos
            processos transparentes e oferecendo excelentes resultados
          </p>
          <ul class="text-left mt-4 font-control">
            <li>Abordagem ágil</li>
            <li>Relatórios de Desempenho</li>
            <li>Comunicações regulares</li>
            <li>Entrega contínua</li>
          </ul>
        </mdb-col>
        <mdb-col
          lg="7"
          md="12"
          class="space-top-5"
          sm="12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="../assets/imgs/mockup.jpg" class="img-fluid w-100" />
        </mdb-col>
      </mdb-row>
      <mdb-row class="p-0 m-0" data-aos="fade-up" data-aos-duration="1000">
        <div class="skewed"></div>
      </mdb-row>
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
      <mdb-row
        class="align-items-center justify-content-center text-white w-100 h-100 m-0 p-0"
      >
        <mdb-col
          xl="5"
          lg="6"
          md="6"
          sm="12"
          class
          data-aos="zoom-out-left"
          data-aos-duration="1000"
        >
          <h2>DESAFIE A NOSSA CRIATIVIDADE</h2>
        </mdb-col>
        <mdb-col
          xl="3"
          lg="4"
          md="6"
          sm="12"
          class
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          <mdb-btn class="highlight-background"
            >Conheça as nossas soluções</mdb-btn
          >
        </mdb-col>
      </mdb-row>
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
export default {
  components: { mdbMask, mdbView, mdbBtn, mdbRow, mdbCol },
  data() {
    return {
      homeHeight: null,
      IdentidadeVisualicone: require("@/assets/svgs/IdentidadeVisual.svg"),
      FiskamerImg: require("@/assets/imgs/download.png"),
    };
  },
  mounted() {
    this.homeHeight = document.getElementById("home").offsetHeight;
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/bpoints";
.main-divs,
.background,
.overlay {
  height: 100vh;
  width: 100vw;
}
.main-divs1{
  padding: 3%;
}
#footer{
  margin-top: -50px;
  text-align: center !important;
  width: 100%;
}
// .icones{
//   padding: 3% !important;
// }
.main-div {
  height: 55vh;
  padding: auto 10%;
  width: 100vw;
  margin-top: -15%;
}
img {
  object-fit: cover;
}
#home {
}
.back {
  z-index: -1;
}

video {
  right: 0;
  bottom: 0;
  position: relative;
  z-index: -1;
  width: 100vw;
  padding: 0;
  object-fit: cover;
  height: 100vh;
}
.text-1 {
  z-index: 1;
  .text-overlay {
    margin-top: 20%;
  }
}
.highlight {
  color: $highlightColor;
}

.border-message {
  border-left: 0.5rem solid #ffffff;
}

.black-overlay {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

#message-div {
  background-image: url("../assets/imgs/laptop.jpg");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4) !important;
  z-index: 0;
}

.plans-container {
  background: $plansColor;

  margin-top: 5%;
}
.bigger {
  z-index: 2;
}

#plans,
#solutions,
#contacts,
#projects {
  background-image: url("../assets/imgs/black.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.highlight-background {
  background: $highlightColor;
}

.phone-inbox {
  margin-left: -25%;
  margin-top: 10%;
}

.services-col {
  margin-top: 10%;
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
.all {
  width: 100%;
  height: 100vh;
}

.space-top {
  margin-top: 15%;
}

.space-top-2 {
  margin-top: 10%;
}

.space-top-5 {
  margin-top: 5%;
}

.font-control {
  font-size: 1.2rem !important;
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

.skewed2 {
  z-index: 1;
  margin-top: 5%;
  padding: 10px;
  // transform: skewY(4deg);
  transform-origin: top left;
  width: 100%;
  height: 100vh;
  // background-color: rgba(10,23,55,0.5) !important;
  // background: #000;
  //  opacity: 0.7;
}

.skewed2-text {
  width: 100%;
  padding: 0px 60px;
  margin-top: 1%;
}
.progress {
  width: 50% !important;
  margin-left: 2%;
}
.skewed2-progress {
  margin-top: 2%;
  padding: 0px 4% !important;
}
.skewed2-progress-1 {
  display: flex;
  margin-top: 3px;
}
.progress-txt {
  text-align: left !important;
  margin-top: 2%;
  display: flex;
}
.Texto {
  margin-left: 42%;
}
.Texto1 {
  margin-left: 2%;
}
#about-text {
  margin-top: 30%;
}

.projects-menu {
  display: contents;
}

#deeper {
  z-index: -1;
  height: 70vh;
}

#deep {
  z-index: 0;
  height: 80vh;
}

#deeper,
#deep {
}

#deeper > img {
  height: -webkit-fill-available;
}

.skewed3 {
  transform: skewX(-190deg);
  margin-left: -9%;
  transform-origin: bottom left;
  margin-bottom: -2%;
  background-color: #39c0e2;
  //border: 1px solid red;
  height: 70vh !important;
  width: 70vw !important;
}

#three-phones {
  transform: skewX(10deg);
  margin-top: 2%;
  height: 60vh;
}
.Identidadeicone {
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(115deg)
    brightness(104%) contrast(104%);
  size: 10px;
  font-weight: 600 !important;
  stroke-width: 600 !important;
}
@font-face {
  font-family: "Gotham Bold";
  src: url("../assets/fonts/GothamBold.otf");
}
/*.btninicial{
  background-color:  #37bfe1 !important;
  text-shadow: 1px 0.5px 1px rgb(26, 25, 25) !important;
}*/
//@media only screen and (max-width: 2560px){}
@media only screen and (max-width: 1024px) and (min-width: 768px) {
  .skewed2 {
    margin-top: 4%;
    width: 100%;
  }
  .main-div {
    height: 50vh;
    width: 100vw;
    margin-top: -45%;
  }
  .skewed2-progress {
    padding: 0px 4% !important;
    margin: 2% 170px;
  }
}
// @media only screen and (min-width: 1024px) and (max-width: 1366px){
//   .skewed2{
//     margin-top: 1% ;
//     width: 100%;
//   }
//   .main-div {
//     height: 40vh;
//     width: 100vw;
//     margin-top: -35%;
//   }
//   .skewed2-progress {
//     padding: 0px 4% !important;
//     margin: 2% 20%;
//   }
// }
@media only screen and (min-width: 570px) and (max-width: 1024px) {
  .skewed2 {
    margin-top: 1%;
    width: 100%;
  }
  .main-div {
    height: 90vh;
    width: 100vw;
    margin-top: -15%;
  }
  .skewed2-progress {
    padding: 0px 4% !important;
    margin: 2% 20%;
  }
}
@media only screen and (max-width: 600px), (min-width: 400) {
  .skewed2 {
    margin-top: -3%;
    width: 100%;
  }
  .main-div {
    height: 80vh;
    width: 100vw;
    margin-top: -45%;
  }
  .skewed2-progress {
    padding: 0px 4% !important;
    margin: 2% 50px;
  }
}
@media only screen and (max-width: 653px), (min-width: 340) {
  .skewed2 {
    //margin-top: -4%;
    width: 100%;
    font-size: 16px !important;
    height: 10px !important;
  }
  .main-div {
    height: 100vh;
    width: 100vw;
    margin-top: -35%;
  }
  .skewed2-progress {
    padding: 0px 4% !important;
    margin: 2% 50px;
  }
}
// @media only screen and (max-width: 653px), (min-width: 340){}
</style>