<template>
  <div>
    <NavbarRelbase/>
    <div class="container-fluid bg-header">
      <header class="container">
        <div class="row">
          <div class="col-xl-5 col-md-6">
            <div class="green-box">
              <p class="little-sub">Software de ventas</p>
            </div>
            <h1>Conecta tus canales de venta</h1>
            <p class="subtittle">y mantén sincronizado tu inventario desde un solo lugar.</p>
            <PlayBtn class="play-btn"/>
            <div class="row mt-5">
              <div class="col-5 border-right">
                <div class="d-flex flex-row mb-3">
                <LinePretittle/>
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
          <div class="col-xl-7 col-md-6">
            <div class="hombre">
              <div class="d-none d-md-block">
                <img src="../assets/hombre_header.png" alt="" >
              </div>
            </div>
            <div class="window-header-1">
              <img src="../assets/recaudacion_header.png" alt="">
            </div>
            <div class="window-header-2">
              <img src="../assets/app_header.png" alt="">
            </div>
          </div>
        </div>
        
      </header>
    </div>
  </div>
</template>

<script>
import NavbarRelbase from '../components/Navigation/NavbarRelbase.vue'
import PlayBtn from '../components/PlayBtn.vue'
import LinePretittle from '../components/LinePretittle.vue'

export default {
  name: 'HomeRelbase',
  components:{
    NavbarRelbase,
    PlayBtn,
    LinePretittle,
  }
}
</script>


