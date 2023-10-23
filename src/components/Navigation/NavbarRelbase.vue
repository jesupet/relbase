<template>
  <div>
    <PrePreNavbar/>
    <PreNavbar/>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="@/assets/grey_logo.png" alt="logo relbase" class="navbar-logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" id="navbarNavDropdown">
          <div class="text-end p-4 d-lg-none">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <ul class="navbar-nav ms-lg-auto text-l-end text-center">
            <li class="nav-item">
              <router-link class="nav-link nav-text" to="/" exact>Inicio</router-link>
            </li>
            <li class="nav-item dropdown">
              <a 
              class="nav-link dropdown-toggle nav-text" 
              href="#"
              role="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              >
                Características
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/caracteristicas/ventas" 
                    >Ventas
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/caracteristicas/inventario" 
                  
                    >Inventario
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/caracteristicas/punto-de-venta"
                  >
                    Punto de venta
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/caracteristicas/recaudacion"
                  @click="handleDropdownItemClick('recaudacion')"
                  :class="{ 'active-link': selectedMenuItem === 'recaudacion' }">
                    Recaudación
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/caracteristicas/reportes"
                  >
                    Reportes
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/caracteristicas/canales-digitales"
                  >
                    Canales Digitales
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/caracteristicas/app-movil"
                  >
                    App Movil
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-text" to="/precios" exact>Precios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-text" to="/faqs" exact>Preguntas Frecuentes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-text" to="/clientes" exact>Clientes</router-link>
            </li>
            <li class="nav-item dropdown">
              <a 
              class="nav-link dropdown-toggle nav-text" 
              href="#"
              role="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              >
                Recursos
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/recursos/canales-de-venta" 
                    >Canales de Venta
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/recursos/integraciones" 
                    >Integraciones
                  </router-link>
                </li>
                <li>
                  <router-link 
                  class="dropdown-item nav-text" 
                  to="/recursos/api"
                  >API relBase
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <RoundedBtn :buttonText="'Iniciar Sesión'" :class="'white-btn-primary btn-nav'"/>   
            </li>
            <li>
              <RoundedBtn :buttonText="'Ver Demostración'" :class="'btn-nav'"/> 
            </li>
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
  },
  data() {
    return {
      isDropdownActive: false,
      isDropdownItemSelected: false,
      selectedMenuItem: '', // Almacena el elemento seleccionado
    };
  },
  methods: {
    toggleDropdown() {
      if (!this.isDropdownActive) {
        this.isDropdownActive = true;
        this.isDropdownItemSelected = false;
      } else {
        this.isDropdownActive = false;
      }
    },
    handleDropdownItemClick(menuItem) {
      this.selectedMenuItem = menuItem; // Almacena el elemento seleccionado
      this.isDropdownItemSelected = true;
    },
  },
}
</script>