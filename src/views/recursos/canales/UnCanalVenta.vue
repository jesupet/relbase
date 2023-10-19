<template>
  <div>
    <div class="grey-bg-tittle text-center">
      <p class="white-text">Recursos</p>
      <hr class="white-text white-line">
      <h1>Canales de Venta</h1>
    </div>
    <div class="container-fluid px-0">
      <InfoCanal :index="selectedCanalIndex" :canal="canales[selectedCanalIndex]"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../../../store/index'
import InfoCanal from './InfoCanal.vue'

export default {
  name: 'UnCanalVenta',
  components: {
    InfoCanal,
  },
  computed: {
    ...mapState(useCounterStore, ['canales']),
    selectedCanalIndex() {
      return this.$route.params.index; // Obtén el índice del canal desde la URL
    }
  },
  methods: {
    selectCanal(index) {
      this.selectedCanalIndex = index;
    },
  }
}
</script>
