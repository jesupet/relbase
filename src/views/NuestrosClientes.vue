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
          <div  v-for="(review, index) in reviews" :key="index">
            <a @click="showReview(index)" :class="'review'+index"><img src="../assets/vectors/review.svg" alt=""></a>
            <div class="card" id="client-card" v-if="selectedReviewIndex === index">
              <div class="city medium-p-white">
                {{review.ciudad}}
              </div>
              <div class="card-body">
                <p class="card-text medium-p">{{review.comentario}}</p>
                <p class="medium-p green-text">{{review.autor}}</p>
                <p class="medium-p">{{review.cargo}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientCard from '../components/ClientCard.vue'
//import MapLocation from '../components/MapLocation.vue'
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'NuestrosClientes',
  components: {
    ClientCard,
    //MapLocation,
  },
  data() {
    return {
      selectedReviewIndex: null,
    }
  },
  computed: {
    ...mapState(useCounterStore, ['reviews']),
  },
  methods: {
    showReview(index) {
       if (this.selectedReviewIndex === index) {
        this.selectedReviewIndex = null;
      } else {
        this.selectedReviewIndex = index;
      }
    },
  }
  
}
</script>