<template>
  <div class="row text-center">
    <div class="col-xl-3 col-12 step-cont" v-for="(pasos, index) in pasos" :key="index">
      <img :src="getSvgPath(pasos.numero)" alt="" class="numero">
      <div class="card align-items-center">
        <img :src="getImagePath(pasos.icono)" class="card-img-top icono-pasos" alt="...">
        <div class="card-body">
          <p class="titulo-gris">{{pasos.titulo}}</p>
          <p class="card-text medium-p">{{pasos.contenido}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'StepCard',
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
