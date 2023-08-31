<template>
  <div>
    <PrePreNavbar/>
    <PreNavbar/>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="@/assets/grey_logo.png" alt="logo relbase" class="navbar-logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-lg-auto text-end">
            <li class="nav-item">
              <a class="nav-link active nav-text" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle nav-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Características
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item nav-text" href="#">Ventas</a></li>
                <li><a class="dropdown-item nav-text" href="#">Inventario</a></li>
                <li><a class="dropdown-item nav-text" href="#">Punto de venta</a></li>
                <li><a class="dropdown-item nav-text" href="#">Recaudación</a></li>
                <li><a class="dropdown-item nav-text" href="#">Reportes</a></li>
                <li><a class="dropdown-item nav-text" href="#">Canales Digitales</a></li>
                <li><a class="dropdown-item nav-text" href="#">App Movil</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-text" aria-current="page" href="#">Precios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-text" href="#">Preguntas Frecuentes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-text" href="#">Clientes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-text" href="#">Recursos</a>
            </li>
            <RoundedBtn :buttonText="'Iniciar Sesión'" :class="'white-btn-primary'"/>   
            <RoundedBtn :buttonText="'Ver Demostración'"/>      
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import PrePreNavbar from './PrePreNavbar.vue'
import PreNavbar from './PreNavbar.vue'
import RoundedBtn from '../RoundedBtn.vue'

export default {
  name: 'NavbarRelbase',
  components:{
    PrePreNavbar,
    PreNavbar,
    RoundedBtn,
  }
}
</script>