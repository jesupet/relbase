<template>
  <div>   
    <!--HEADER-->
    <div class="container-fluid bg-header">
      <header class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6 col-12">
            <div class="green-box">
              <p class="little-sub">Software de ventas</p>
            </div>
            <h1>Conecta tus canales de venta</h1>
            <p class="subtittle">y mantén sincronizado tu inventario desde un solo lugar.</p>
            <PlayBtn class="play-btn"/>
            <div class="row mt-5">
              <div class="col-5 border-right">
                <div class="d-flex flex-row mb-3">
                  <LinePretittle :class="'d-flex'"/>
                  <p class="green-pre-titulo">Estamos en dispositivos</p>
                </div>
                <p class="white-subtittle">Descarga nuestra App</p>
              </div>
              <div class="col-7">
                <p class="little-p-white pb-3">y vende a través de nuestro punto de venta con boleta y factura electrónica conectado a tu inventario y canales digitales.</p>
                <img src="../assets/googleplay.png" alt="google play logo">
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-6 col-12 d-lg-block d-none">
            <div class="hombre">
              <div>
                <img src="../assets/hombre_header.png" alt="" class="">
              </div>
            </div>
            <div class="window-header-1  d-xl-block d-none">
              <img src="../assets/recaudacion_header.png" alt="">
            </div>
            <div class="window-header-2 d-xl-block d-none">
              <img src="../assets/app_header.png" alt="">
            </div>
          </div>
        </div>
      </header>
    </div>
    <!-- SECTION 1: SIMPLIFICAMOS -->
    <section class="container-fluid" id="simplificamos">
      <div class="row">
        <div class="col-xl-7 col-lg-6 col-12">
          <img src="../assets/software.png" alt="" class="img-fluid">
        </div>
        <div class="col-xl-5 col-lg-6 col-12 contenido1">
          <div class="d-flex flex-row mb-3">
            <LinePretittle :class="'d-flex'" :stroke="'#556170'"/>
            <p class="pre-titulo">Pensado en pymes y emprendedores</p>
          </div>
          <h2>Simplificamos la forma en que venden las empresas.</h2>
          <div class="row mt-4 mb-5">
            <div class="col-sm-6 col-12 mt-3">
              <img src="../assets/vectors/codigo.svg" alt="icono codigo">
              <p class="titulo-gris">
                relBase
              </p>
              <p class="little-p">
                es el software de ventas con boleta y factura electrónica, 100% web pensado para Pymes y emprendedores.
              </p>
            </div>
            <div class="col-sm-6 col-12 mt-3">
              <img src="../assets/vectors/monitor.svg" alt="icono codigo">
              <p class="titulo-gris">
                Crea documentos
              </p>
              <p class="little-p">
                desde cualquier computador conectado a internet sin la necesidad de instalar absolutamente nada.
              </p>
            </div>
          </div>
          <RoundedBtn :buttonText="'Contratar'" class="ms-0"/>
        </div>
      </div>
    </section>
    <!-- SECTION 2: PASOS -->
    <section id="pasos" class="container text-center">
      <p class="pre-titulo">
        Simples pasos a seguir
      </p>
      <LinePretittle :stroke="'#556170'"/>
      <h3>¿Cómo me cambio a Relbase?</h3>
      <div class="diagram d-xl-block d-none">
        <div class="dotted-line">
          <hr>
        </div>
        <StepCard/>    
      </div>
      <div class="diagram d-xl-none d-block">
        <StepCarousel/>
      </div>
    </section>
    <!--SECTION 3: MAPA-->
    <div class="bg-mapa">
      <section id="mapa" class="container">
        <div class="row">
          <div class="col-xl-5 col-md-6 col-12 box-text-map">
            <p class="white-pre-titulo">Más de 2.000 empresas y emprendedores</p>
            <h2 class="mt-3">Confían en nosotros para impulsar su transformación digital</h2>
            <p class="medium-p-white mt-4 mb-5">
              Mira cómo relBase ayuda a las empresas y emprendedores a tener éxito. ¡Únete a nuestra comunidad y lleva tu negocio al siguiente nivel!
            </p>
            <RoundedBtn :buttonText="'Ver testimonios'"/>
          </div>
          <div class="col-xl-7 col-md-6 d-sm-block d-none">
            <img src="../assets/map.png" alt="">
          </div>
        </div>
      </section>
    </div>
    <!--- FOOTER --->
    
  </div>
</template>

<script>
import PlayBtn from '../components/PlayBtn.vue'
import LinePretittle from '../components/LinePretittle.vue'
import RoundedBtn from '../components/RoundedBtn.vue'
import StepCard from '../components/StepCard.vue'
import StepCarousel from '../components/StepCarousel.vue'


export default {
  name: 'HomeRelbase',
  components:{
    PlayBtn,
    LinePretittle,
    RoundedBtn,
    StepCard,
    StepCarousel
  }
}
</script>


