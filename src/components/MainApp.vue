<template>
  <div>
    <navbar></navbar>
    <div id="home" class="main-divs 1">
      <mdb-view class="back position-absolute">
        <video autoplay muted loop id="landing-video">
          <source type="video/mp4" src="../assets/imgs/video.mp4" />
        </video>
        <mdb-mask flex-center overlay="black-strong" />
      </mdb-view>

      <div class="text-1 text-white">
        <mdb-row>
          <mdb-col md="6" offsetMd="3" class="text-overlay">
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
    </div>
    <div id="about" class="main-divs 2 overflow-hidden">
      <mdb-row>
        <mdb-col col="6" id="deeper" class>
          <mdb-view class="back position-absolute h-100">
            <img src="../assets/imgs/pausado.jpg" class="img-fluid w-100 h-100" />
            <mdb-mask flex-center class="black-overlay" />
          </mdb-view>
          <div class="text-1 text-white" id="deep">
            <mdb-row>
              <mdb-col class id="about-text">
                <h3 class>DESAFIE A NOSSA CRIATIVIDADE</h3>
                <p>
                  APLICATIVO MÓVEL PARA
                  <span class="highlight">DESIGNERS</span>, SOFTWARES PARA
                  <span class="highlight">DESENVOLVEDORES</span>
                </p>
                <mdb-btn class="highlight-background" size="lg">Conheça nossas soluções</mdb-btn>
              </mdb-col>
            </mdb-row>
          </div>
        </mdb-col>
        <mdb-col col="7" class="highlight-background skewed3">
          <img src="../assets/imgs/download.png" id="three-phones" class="img-fluid w-75" />
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <div class="skewed2 border bg-white">
          <mdb-row class="ml-5 p-2">
            <mdb-col col="6" class="skewed2-text">
              <h3 class="text-left">Quem Somos?</h3>
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
    <div id="solutions" class="main-divs 3">
      <!-- <mdb-view class="back position-absolute">
        <img src="../assets/imgs/laptop.jpg" class="img-fluid w-100" alt="test" />

        <mdb-mask flex-center overlay="black-strong" />
      </mdb-view>-->

      <div class="text-1 text-white">
        <mdb-row>
          <mdb-col md="6" class="mt-5">
            <h1 class="text-left">Conheça as nossas soluções</h1>
            <img src="../assets/imgs/macgold.png" alt="macgold" class="img-fluid w-100" />
            <img
              src="../assets/imgs/phone-inbox.png"
              alt="phone-inbox "
              class="img-fluid w-25 position-absolute phone-inbox"
            />
          </mdb-col>
          <mdb-col md="5 services-col">
            <mdb-row>
              <mdb-col md="2" offsetMd="2">
                <mdb-row>
                  <i class="fas fa-code fa-4x mt-2"></i>
                </mdb-row>
                <mdb-row>
                  <i class="fas fa-thumbs-up fa-4x mt-5"></i>
                </mdb-row>
                <mdb-row>
                  <i class="fas fa-desktop fa-4x mt-5"></i>
                </mdb-row>
                <mdb-row>
                  <i class="fas fa-th fa-4x mt-4"></i>
                </mdb-row>
              </mdb-col>
              <mdb-col md="8">
                <mdb-row>
                  <h4 class="text-left">PROTÓTIPOS ITERATIVOS</h4>
                  <p
                    class="text-justify"
                  >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
                </mdb-row>
                <mdb-row>
                  <h4 class="text-left">IDENTIDADE VISUAL</h4>
                  <p
                    class="text-justify"
                  >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
                </mdb-row>
                <mdb-row>
                  <h4 class="text-left">DESIGN DA UI</h4>
                  <p
                    class="text-justify"
                  >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
                </mdb-row>
                <mdb-row>
                  <h4 class="text-left">DESENVOLVIMENTO DE SOFTWARE E UI</h4>
                  <p
                    class="text-justify"
                  >O principal objectivo da construção de protótipos é testar se o fluxo do produto é suave ou consistente.</p>
                </mdb-row>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </div>
    </div>
    <div id="message-div" class="main-divs 4">
      <!-- <navbar></navbar > -->
      <div class="back position-absolute rgba-black-light parallax"></div>

      <div class="text-1 text-white">
        <mdb-row>
          <mdb-col md="4" offsetMd="4" class="border-message text-overlay">
            <span class="display-4 font-weight-bold">SUA EMPRESA PRECISA DE UMA NOVA IMAGEM?</span>

            <mdb-btn outline="white" size="lg">Envie Mensagem</mdb-btn>
          </mdb-col>
        </mdb-row>
      </div>
    </div>
    <div id="projects" class="main-divs 5">
      <div class="text-white">
        <mdb-row>
          <mdb-col md="6" offsetMd="3" class="p-3">
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
        <mdb-row class="p-5">
          <mdb-col md="3" offsetMd="1">
            <img src="../assets/imgs/project-1.jpg" class="img-fluid w-100" />
          </mdb-col>
          <mdb-col md="3" class="mx-4">
            <img src="../assets/imgs/project-2.jpg" class="img-fluid w-100" />
          </mdb-col>
          <mdb-col md="3">
            <img src="../assets/imgs/project-3.jpg" class="img-fluid w-100" />
          </mdb-col>
        </mdb-row>
      </div>
    </div>
    <div id="control" class="main-divs 6 overflow-hidden">
      <mdb-row class="all">
        <mdb-col md="4" offsetMd="1" class="space-top">
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
        <mdb-col md="7" class="space-top-2">
          <img src="../assets/imgs/mockup.jpg" class="img-fluid w-100" />
        </mdb-col>
      </mdb-row>
      <mdb-row class="p-0 m-0">
        <div class="skewed"></div>
      </mdb-row>
    </div>
    <div id="plans" class="main-divs 7">
      <div class="text-1 text-white">
        <mdb-row>
          <mdb-col md="3" offsetMd="2" class="plans-container p-3">
            <i class="fas fa-bell fa-4x highlight mt-3"></i>
            <h2 class="font-weight-normal mt-3">BASIC</h2>
            <p class="text-center">Plano avançado excelente para empresas online, pequenas e locais</p>
            <p class="text-center my-3 display-4">30k</p>
            <ul class="navbar-nav my-3 text-center">
              <li>Sincronização de email</li>
              <li>Várias listas de tarefas</li>
              <li>60M em nuvem</li>
            </ul>
            <mdb-btn outline="white" size="lg">Escolher Plano</mdb-btn>
          </mdb-col>
          <mdb-col md="2" class="plans-container bigger p-3">
            <i class="fas fa-paper-plane fa-7x highlight mt-3"></i>
            <h2 class="font-weight-normal mt-3">BASIC</h2>
            <p class="text-center">Plano avançado excelente para empresas online, pequenas e locais</p>
            <p class="text-center my-3 display-4">60k</p>
            <ul class="navbar-nav my-3 text-center">
              <li>Sincronização de email</li>
              <li>Várias listas de tarefas</li>
              <li>106M em nuvem</li>
            </ul>
            <mdb-btn size>Escolher Plano</mdb-btn>
          </mdb-col>
          <mdb-col md="3" class="plans-container p-3">
            <i class="fas fa-cloud-upload-alt fa-4x highlight mt-3"></i>
            <h2 class="font-weight-normal mt-3">BASIC</h2>
            <p class="text-center">Plano avançado excelente para empresas online, pequenas e locais</p>
            <p class="text-center my-3 display-4">60k</p>
            <ul class="navbar-nav my-3 text-center">
              <li>Sincronização de email</li>
              <li>Várias listas de tarefas</li>
              <li>106M em nuvem</li>
            </ul>
            <mdb-btn outline="white" size="lg">Escolher Plano</mdb-btn>
          </mdb-col>
        </mdb-row>
      </div>
    </div>

    <div id="contacts" class="main-divs 8">
      <div class="text-1 text-white">
        <mdb-row>
          <mdb-col md="5" offsetMd="2" class="text-overlay">
            <h2>DESAFIE A NOSSA CRIATIVIDADE</h2>
          </mdb-col>
          <mdb-col md="3" class="text-overlay mb-5">
            <mdb-btn class="highlight-background">Conheça as nossas soluções</mdb-btn>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <footer>
            <mdb-row class="mt-5">
              <mdb-col md="2" offsetMd="1">
                <img src="../assets/imgs/logowhite.png" class="img-fluid w-50" alt="logo" />
              </mdb-col>
              <mdb-col md="2">
                <ul class="mt-5 text-left">
                  <li>
                    <h4 class="my-2">Localização</h4>
                  </li>
                  <li>Sicronização de Email</li>
                  <li>Várias listas de tarefas</li>
                  <li>nuvem sicronização</li>
                  <li>Sicronização de Email</li>
                  <li>Várias listas de tarefas</li>
                </ul>
              </mdb-col>
              <mdb-col md="2">
                <ul class="mt-5 text-left">
                  <li>
                    <h4 class="my-2">Localização</h4>
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
  height: 70vh;
  margin-top: 5%;
}
.bigger {
  height: 80vh !important;
  z-index: 2;
  margin-top: 2% !important;
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
  height: 60vh;
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