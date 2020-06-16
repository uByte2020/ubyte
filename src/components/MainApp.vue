<template>
  <div class="m-0 p-0 overflow-hidden">
    <navbar></navbar>
    <div id="home" class="container-fluid main-divs 1 m-0 p-0">
      <mdb-view class="back position-absolute">
        <video autoplay muted loop id="landing-video">
          <source type="video/mp4" src="../assets/imgs/video.mp4" />
        </video>

        <mdb-mask flex-center overlay="black-strong" />
      </mdb-view>

      <mdb-row class="m-0 p-0 text-white align-items-center justify-content-center w-100 h-100">
        <mdb-col xl="6" lg="10" md="12" sm="12" class>
          <!--  -->
          <span class="display-4">WELCOME TO UBYTE</span>
          <p>
            APLICATIVO MÓVEL PARA
            <span class="highlight">DESIGNERS</span>, SOFTWARES PARA
            <span class="highlight">DESENVOLVEDORES</span>
          </p>
          <mdb-btn outline="white" size="lg">Conheça nossas soluções</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
    <div id="about" class="container-fluid main-divs 2 overflow-hidden m-0 p-0">
      <mdb-row>
        <mdb-col xl="6" lg="6" md="12" sm="12" id="deeper" class="m-0 p-0">
          <mdb-view class="back position-absolute h-100">
            <img src="../assets/imgs/pausado.jpg" class="img-fluid w-100 h-100" />
            <mdb-mask flex-center class="black-overlay" />
          </mdb-view>

          <mdb-row class="justify-content-center text-white w-100 h-100">
            <mdb-col class="align-self-center mobile-padding">
              <h3 class>DESAFIE A NOSSA CRIATIVIDADE</h3>
              <p>
                APLICATIVO MÓVEL PARA
                <span class="highlight">DESIGNERS</span>, SOFTWARES PARA
                <span class="highlight">DESENVOLVEDORES</span>
              </p>
              <mdb-btn class="highlight-background" size="lg">Conheça nossas soluções</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col xl="7" lg="7" md="12" sm="12" class="highlight-background skewed3">
          <img src="../assets/imgs/download.png" id="three-phones" class="img-fluid w-75" />
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <div class="skewed2 border bg-white">
          <mdb-row class="ml-5 p-1">
            <mdb-col xl="6" lg="10" md="11" sm="12" class="skewed2-text p-md-4 p-lg-0 col-12">
              <h3 class="text-left text-md-center text-lg-left mt-lg-1 mt-md-4">Quem Somos?</h3>
              <p class="text-justify">
                Somos uma equipa especializada em soluções digitais adaptadas e personalizadas
                aos nossos clientes. Apresentamos soluções inovadoras, softwares de optimo desempenho,
                Produtos e serviços de alta qualidade, Melhores Designers e Soluções adaptadas e personalizadas, tudo no melhor preço.
              </p>
            </mdb-col>
          </mdb-row>
        </div>
      </mdb-row>
    </div>
    <div id="solutions" class="main-divs container-fluid 3">
      <!-- <mdb-view class="back position-absolute">
        <img src="../assets/imgs/laptop.jpg" class="img-fluid w-100" alt="test" />

        <mdb-mask flex-center overlay="black-strong" />
      </mdb-view>-->

      <mdb-row class="align-items-center w-100 h-100">
        <mdb-col xl="6" lg="6" md="12" class="text-white" sm="12">
          <h1 class="text-center">Conheça as nossas soluções</h1>
          <img src="../assets/imgs/macgold.png" alt="macgold" class="img-fluid w-100" />
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
          class="align-items-center justify-content-md-center text-white"
        >
          <mdb-row class="mb-md-2">
            <mdb-col md="2" offsetMd="1" offsetXl="1" offsetLg="1">
              <i class="fas fa-code fa-4x mt-2"></i>
            </mdb-col>
            <mdb-col md="8" sm="12" offsetLg="1">
              <h4 class="text-left solutions-names">PROTÓTIPOS ITERATIVOS</h4>
              <p
                class="text-justify"
              >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-md-2">
            <mdb-col md="2" offsetMd="1" offsetXl="1" offsetLg="1" sm="12">
              <i class="fas fa-thumbs-up fa-4x"></i>
            </mdb-col>
            <mdb-col md="8" sm="12" offsetLg="1">
              <h4 class="solutions-names text-left">IDENTIDADE VISUAL</h4>
              <p
                class="text-justify"
              >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-md-2">
            <mdb-col md="2" offsetMd="1" offsetXl="1" offsetLg="1" sm="12">
              <i class="fas fa-desktop fa-4x"></i>
            </mdb-col>
            <mdb-col md="8" sm="12" offsetLg="1">
              <h4 class="text-left solutions-names">DESIGN DA UI</h4>
              <p
                class="text-justify"
              >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-md-2">
            <mdb-col md="2" offsetMd="1" offsetXl="1" offsetLg="1" sm="12">
              <i class="fas fa-th fa-4x"></i>
            </mdb-col>
            <mdb-col md="8" sm="12" offsetLg="1">
              <h4 class="text-left solutions-names">DESENVOLVIMENTO DE SOFTWARE E UI</h4>
              <p
                class="text-justify"
              >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </div>
    <div id="message-div" class="main-divs container-fluid 4 m-0 p-0">
      <mdb-row class="justify-content-center align-items-center h-100 text-white black-overlay">
        <mdb-col xl="5" lg="6" md="8" sm="12" class="col-12 border-message">
          <!-- text-overlay -->
          <span class="display-4 font-weight-bold">SUA EMPRESA PRECISA DE UMA NOVA IMAGEM?</span>

          <mdb-btn outline="white" size="lg">Envie Mensagem</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
    <div id="projects" class="main-divs container-fluid 5">
      <div class="text-white">
        <mdb-row class="justify-content-center">
          <mdb-col xl="6" lg="8" md="10" sm="12" class="col-12 p-3">
            <h2 class="font-weight-bold">NOSSOS TRABALHOS</h2>
            <h1 class="border-bottom">CRIATIVIDADE E ESTRATÉGIA</h1>
            <nav class="navbar">
              <ul class="navbar-nav projects-menu">
                <li class="nav-item">
                  <a href="#" class="text-white font-weight-bold">Todos</a>
                </li>
                <li>
                  <a href="#" class="text-white font-weight-bold">Design Gráfico</a>
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
            <img src="../assets/imgs/project-1.jpg" class="img-fluid w-100 projects-images" />
          </mdb-col>
          <mdb-col lg="4" md="12" class sm="12">
            <img src="../assets/imgs/project-2.jpg" class="img-fluid w-100 projects-images" />
          </mdb-col>
          <mdb-col lg="4" md="12" sm="12">
            <img src="../assets/imgs/project-3.jpg" class="img-fluid w-100 projects-images" />
          </mdb-col>
        </mdb-row>
      </div>
    </div>
    <div id="control" class="main-divs container-fluid 6 overflow-hidden p-0 m-0">
      <mdb-row class="all p-0 m-0">
        <mdb-col lg="4" offsetLg="1" md="12" offsetMd sm="12" class="space-top">
          <h1>Assuma o controle total</h1>
          <p
            class="text-justify my-3 font-control"
          >Construímos um forte relacionamento com nossos clientes, realizando três ações: prestando contas de nossos projetos, tornando nossos processos transparentes e oferecendo excelentes resultados</p>
          <ul class="text-left mt-4 font-control">
            <li>Abordagem ágil</li>
            <li>Relatórios de Desempenho</li>
            <li>Comunicações regulares</li>
            <li>Entrega contínua</li>
          </ul>
        </mdb-col>
        <mdb-col lg="7" md="12" class="space-top-2" sm="12">
          <img src="../assets/imgs/mockup.jpg" class="img-fluid w-100" />
        </mdb-col>
      </mdb-row>
      <mdb-row class="p-0 m-0">
        <div class="skewed"></div>
      </mdb-row>
    </div>
    <div id="plans" class="main-divs container-fluid">
      <mdb-row class="justify-content-center align-items-center text-white">
        <mdb-col md="7" xl="3" lg="3" sm="10" class="col-10 plans-container p-3 p-mx-2">
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
        <mdb-col xl="3" lg="3" md="7" sm="12" class="col-10 plans-container bigger p-3">
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
        <mdb-col xl="3" lg="3" md="7" sm="12" class="col-10 plans-container p-3">
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

    <div id="contacts" class="main-divs container-fluid 8 m-0 p-0">
      <mdb-row class="align-items-center justify-content-center text-white w-100 h-50 m-0 p-0">
        <mdb-col xl="5" lg="6" md="6" sm="12" class>
          <h2>DESAFIE A NOSSA CRIATIVIDADE</h2>
        </mdb-col>
        <mdb-col xl="3" lg="4" md="6" sm="12" class>
          <mdb-btn class="highlight-background">Conheça as nossas soluções</mdb-btn>
        </mdb-col>
      </mdb-row>
      <mdb-row class="w-100 h-50 m-0 p-0">
        <footer class="w-100 h-100">
          <mdb-row class="mt-5 align-items-center text-white">
            <mdb-col xl="2" offsetXl="1" lg="3" offsetLg="1" md="4" sm="12">
              <img src="../assets/imgs/logowhite.png" class="img-fluid w-50" alt="logo" />
            </mdb-col>
            <mdb-col xl="2" lg="3" md="4" sm="12">
              <ul class="mt-5 text-left">
                <li class="text-decoration-none">
                  <h4 class="my-3">Localização</h4>
                </li>
                <li>Sicronização de Email</li>
                <li>Várias listas de tarefas</li>
                <li>nuvem sicronização</li>
                <li>Sicronização de Email</li>
                <li>Várias listas de tarefas</li>
              </ul>
            </mdb-col>
            <mdb-col xl="2" lg="3" md="4" sm="12">
              <ul class="mt-5 text-left">
                <li>
                  <h4 class="my-3">Localização</h4>
                </li>
                <li>Sicronização de Email</li>
                <li>Várias listas de tarefas</li>
                <li>nuvem sicronização</li>
                <li>Sicronização de Email</li>
                <li>Várias listas de tarefas</li>
              </ul>
            </mdb-col>
          </mdb-row>
          <!-- <div class="row text-center">
              <span>&copy; 2019 uByte. Todos os direitos reservados</span>
          </div>-->
        </footer>
      </mdb-row>
    </div>
  </div>
</template>

<script>
import { mdbMask, mdbView, mdbBtn, mdbRow, mdbCol } from "mdbvue";
export default {
  components: { mdbMask, mdbView, mdbBtn, mdbRow, mdbCol }
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
.main-divs {
}
img {
  object-fit: cover;
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
  margin-top: -5%;

  /*left: 0; */

  transform: skewY(4deg);
  transform-origin: top left;
  width: 100%;
  height: 100vh;
}

.skewed2-text {
  transform: skewY(-4deg);
}

#about-text {
  margin-top: 30%;
}

.projects-menu {
  display: contents;
}

#deeper {
  z-index: -1;
  height: 85vh;
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
}

#three-phones {
  transform: skewX(10deg);
  margin-top: 10%;
}
</style>