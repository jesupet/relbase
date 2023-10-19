<template>
  <div>
    <div class="grey-bg-tittle text-center">
      <p class="white-text">Recursos</p>
      <hr class="white-text white-line">
      <h1>Canales de Venta</h1>
    </div>
    <div class="container" id="canales">
      <div class="row">
        <div class="col-lg-6 col-12" v-for="(canal, index) in canales" :key="index">
          <div>
            <div class="card canal-card">
              <div class="row g-0 text-center text-sm-start">
                <div class="col-sm-4 img-canal-cont">
                  <img :src="require(`@/assets/logos/${canal.logo}`)" class="img-fluid rounded-start img-canal" alt="">
                </div>
                <div class="col-sm-8">
                  <div class="card-body">
                    <h5 class="card-title titulo-gris">Vende en {{canal.titulo}}</h5>
                    <p class="card-text medium-p">{{canal.descripcion}}</p>
                    <!--<RoundedBtn @click="selectCanal(index)" :buttonText="'Ver más'" :class="'white-btn-primary btn-canal'" :to="`/recursos/canales-de-venta/${canal.vermas}`"/>-->
                    <router-link :to="`/recursos/canales-de-venta/${index}`" class="white-btn-primary btn-canal">
                      Ver más
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import RoundedBtn from '../../components/RoundedBtn.vue'
import { mapState } from 'pinia'
import { useCounterStore } from '../../store/index'

export default {
  name: 'CanalesVenta',
  components: {
    //RoundedBtn,
  },
  computed: {
    ...mapState(useCounterStore, ['canales']),
  },
  methods: {
    selectPlan(index) {
      this.selectedPlanIndex = index;
    },
  }
}
</script>