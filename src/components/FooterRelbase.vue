<template>
<div class="green-bg">
  <footer>
    <div class="container">
      <div class="row">
      <div class="col-xl-6 col-md-12 text-center d-flex justify-content-center">
        <div class="card text-left footer-card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 col-12 text-start">
                <p class="titulo-gris-footer">¿Listo para aumentar tus ventas?</p>
              </div>
              <div class="col-md-6 col-12 text-md-end text-start mt-md-0 mt-3">
                <RoundedBtn :buttonText="'Contratar'" class="mb-2"/>
                <RoundedBtn :buttonText="'Ver demostración'" :class="'white-btn-primary'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12 d-flex justify-content-center">
        <div class="card text-left footer-card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-7 col-12 text-start">
                <p class="titulo-gris-footer">Estamos aquí para ayudarte</p>
                <p class="footer-p">visita nuestra sección de preguntas frecuentes</p>
              </div>
              <div class="col-md-5 col-12 text-md-end text-start mt-md-0 mt-3 mt-md-0 mt-5">
                <RoundedBtn :buttonText="'Ver preguntas'" :class="'white-btn-primary me-0 ms-0'"/>
                <p class="footer-p mt-md-3 mt-1 text-md-end">o llámanos al +56 2 2869 1771</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <!--Menu inferior-->
      <div class="grey-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-md-12 first-col">
              <img src="../assets/white_logo.png" alt="" class="little-logo">
              <p class="pre-navbar mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <hr class="footer-line">
              <p class="pre-navbar">
                Síguenos en:
              </p>
              <div class="d-flex">
                <a href="" target="_blank"><img src="../assets/icons/fb.png" alt="" class="footer-icon"></a>
                <a href="" target="_blank"><img src="../assets/icons/twitter.png" class="footer-icon"></a>
                <a href="" target="_blank"><img src="../assets/icons/insta.png" class="footer-icon"></a>
              </div>
            </div>
            <div class="col-xl-2 col-md-4 col-6 sec-col">
              <p class="footer-tittle">
                Sobre relBase
              </p>
              <ul class="pre-navbar">
                <li><a href="">Preguntas frecuentes</a></li>
                <li><a href="">¿Cómo me cambio?</a></li>
                <li><a href="">Precios</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Iniciar sesión</a></li>
                <li><a href="">Ver demostración</a></li>
              </ul>
            </div>
            <div class="col-xl-2 col-md-4 col-6 trd-col">
              <p class="footer-tittle">
                Soporte
              </p>
              <ul class="pre-navbar">
               <li><a href="">Políticas de privacidad</a></li>
                <li><a href="">Términos y condiciones</a></li>
                <li><a href="">Centro de ayuda</a></li>
                <li><a href="">Consulta de documentos</a></li>
              </ul>
            </div>
            <div class="col-xl-4 col-md-4 col-12 last-col">
              <p class="footer-tittle">
                ¿Tienes alguna duda?
              </p>
              <p class="pre-navbar">
                Llámanos +56 2 2869 1771
              </p>
              <p class="pre-navbar">
                Escríbenos contacto@relbase.cl
              </p>
              <hr class="footer-line">
              <p class="footer-tittle-mini">
                Horario de atención:
              </p>
              <p class="pre-navbar">
                Lunes a Viernes de 09:00 a 18:00 hrs.
              </p>
            </div>
          </div>
        </div>
      </div>   
  </footer>
</div>
</template>

<script>

import RoundedBtn from './RoundedBtn.vue'

export default {
  name: 'FooterRelbase',
  components: {
    RoundedBtn,
  }
}
</script>
