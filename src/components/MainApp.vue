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
          <mdb-col md="3" class="text-overlay">
            <mdb-btn class="highlight-background">Conheça as nossas soluções</mdb-btn>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <footer>
            <mdb-row>
              <mdb-col md="2" offsetMd="1">
                <img src="../assets/imgs/logowhite.png" class="img-fluid w-50" alt="logo" />
              </mdb-col>
              <mdb-col md="2">
                <ul class="mt-5">
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

rgba-black-light,
.rgba-black-light:after {
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
#contacts {
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
</style>