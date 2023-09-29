<template>
  <div id="carouselExampleFade" class="carousel slide carousel-cont">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active green-ind" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2" class="green-ind"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3" class="green-ind"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4" class="green-ind"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active col-12 ">
        <img :src="getSvgPath(pasos[0].numero)" alt="" class="numero">
        <div class="card align-items-center carousel-card">
          <img :src="getImagePath(pasos[0].icono)" class="card-img-top icono-pasos" alt="...">
          <div class="card-body">
            <p class="titulo-gris">{{pasos[0].titulo}}</p>
            <p class="card-text medium-p">{{pasos[0].contenido}}</p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-12 ">
        <img :src="getSvgPath(pasos[1].numero)" alt="" class="numero">
        <div class="card align-items-center carousel-card">
          <img :src="getImagePath(pasos[1].icono)" class="card-img-top icono-pasos" alt="...">
          <div class="card-body">
            <p class="titulo-gris">{{pasos[1].titulo}}</p>
            <p class="card-text medium-p">{{pasos[1].contenido}}</p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-12 ">
        <img :src="getSvgPath(pasos[2].numero)" alt="" class="numero">
        <div class="card align-items-center carousel-card">
          <img :src="getImagePath(pasos[2].icono)" class="card-img-top icono-pasos" alt="...">
          <div class="card-body">
            <p class="titulo-gris">{{pasos[2].titulo}}</p>
            <p class="card-text medium-p">{{pasos[2].contenido}}</p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-12 ">
        <img :src="getSvgPath(pasos[3].numero)" alt="" class="numero">
        <div class="card align-items-center carousel-card">
          <img :src="getImagePath(pasos[3].icono)" class="card-img-top icono-pasos" alt="...">
          <div class="card-body">
            <p class="titulo-gris">{{pasos[3].titulo}}</p>
            <p class="card-text medium-p">{{pasos[3].contenido}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    -->
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'StepCarousel',
  computed: {
    ...mapState(useCounterStore, ['pasos'])
  },
  methods: {
    getImagePath(icono) {
      // Utiliza require para cargar la imagen
      return require(`@/assets/icons/${icono}`);
    },
    getSvgPath(numero) {
      // Utiliza require para cargar la imagen
      return require(`@/assets/vectors/${numero}`);
    }
  }
}
</script>