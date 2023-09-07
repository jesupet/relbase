<template>
<div class="green-bg">
  <footer>
    <div class="container">
      <div class="row">
      <div class="col-xl-6 col-md-12">
        <div class="card text-left footer-card">
          <div class="card-body">
            <div class="row">
              <div class="col-6 text-start">
                <p class="titulo-gris-footer">¿Listo para aumentar tus ventas?</p>
              </div>
              <div class="col-6 text-end">
                <RoundedBtn :buttonText="'Contratar'" class="mb-2"/>
                <RoundedBtn :buttonText="'Ver demostración'" :class="'white-btn-primary'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="card text-left footer-card">
          <div class="card-body">
            <div class="row">
              <div class="col-7 text-start">
                <p class="titulo-gris-footer">Estamos aquí para ayudarte</p>
                <p class="footer-p">visita nuestra sección de preguntas frecuentes</p>
              </div>
              <div class="col-5 text-end d-flex-colum">
                <RoundedBtn :buttonText="'Ver demostración'" :class="'white-btn-primary me-0'"/>
                <p class="footer-p mt-3 ms-5">o llámanos al +56 2 2869 1771</p>
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
          <div class="row ">
            <div class="col-4">
              <img src="../assets/white_logo.png" alt="" class="little-logo">
              <p class="pre-navbar">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <hr>
              <p class="pre-navbar">
                Síguenos en:
              </p>
              <div class="d-flex">
                <img src="../assets/icons/fb.png" alt="">
                <img src="../assets/icons/twitter.png" alt="">
                <img src="../assets/icons/insta.png" alt="">
              </div>
            </div>
            <div class="col-2">
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
            <div class="col-2">
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
            <div class="col-4">
              <p class="footer-tittle">
                ¿Tienes alguna duda?
              </p>
              <p class="pre-navbar">
                Llámanos +56 2 2869 1771
              </p>
              <p class="pre-navbar">
                Escríbenos contacto@relbase.cl
              </p>
              <hr>
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
