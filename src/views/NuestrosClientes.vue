<template>
  <div>
     <div class="grey-bg-tittle text-center">
        <h1>Nuestros Clientes</h1>
    </div>
    <div class="grey-bg-section">
       <div class="container text-center">
        <p class="subtittle-caract white-text my-3">Conoce algunos testimonios de nuestros clientes</p>
        <ClientCard class="d-block d-md-none"/>
        <div id="reviews-desktop">
          <div class="py-5 my-5">
            <img src="../assets/map-white.png" alt="" class="map-white">
          </div>
          <MapLocation class="review1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientCard from '../components/ClientCard.vue'
import MapLocation from '../components/MapLocation.vue'
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'NuestrosClientes',
  components: {
    ClientCard,
    MapLocation,
  },
  computed: {
    ...mapState(useCounterStore, ['reviews']),
  },
  
}
</script>