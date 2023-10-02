<template>
<div class="text-center">
  <img src="../assets/mobile.png" alt="" class="img-fluid">
  <div id="carouselVentas" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselVentas" data-bs-slide-to="0" class="active green-ind" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselVentas" data-bs-slide-to="1" aria-label="Slide 2" class="green-ind"></button>
      <button type="button" data-bs-target="#carouselVentas" data-bs-slide-to="2" aria-label="Slide 3" class="green-ind"></button>
      <button type="button" data-bs-target="#carouselVentas" data-bs-slide-to="3" aria-label="Slide 4" class="green-ind"></button>
    </div>
    <div class="carousel-inner mt-5">
      <div class="carousel-item active">
          <p class="titulo-gris-footer">
          {{caracteristicas[3].titulo}}
          </p>
          <hr class="hr-caract der">
          <p class="medium-p mb-5">
            {{caracteristicas[3].contenido}}
          </p>
      </div>
      <div class="carousel-item">
          <p class="titulo-gris-footer">
          {{caracteristicas[4].titulo}}
          </p>
          <hr class="hr-caract der">
          <p class="medium-p mb-5">
            {{caracteristicas[4].contenido}}
          </p>
      </div>
      <div class="carousel-item">
          <p class="titulo-gris-footer">
          {{caracteristicas[5].titulo}}
          </p>
          <hr class="hr-caract der">
          <p class="medium-p mb-5">
            {{caracteristicas[5].contenido}}
          </p>
      </div>
      <div class="carousel-item">
          <p class="titulo-gris-footer">
          {{caracteristicas[6].titulo}}
          </p>
          <hr class="hr-caract der">
          <p class="medium-p mb-5">
            {{caracteristicas[6].contenido}}
          </p>
      </div>
    </div>
    <!--
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselVentas" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselVentas" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    -->
  </div>
</div>
  
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'CarouselVentas',
  computed: {
    ...mapState(useCounterStore, ['caracteristicas'])
  },
}
</script>