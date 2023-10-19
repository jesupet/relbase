<template>
  <div>
    <div class="text-center canal-title">
      <div class="img-canal-cont">
        <img :src="require(`@/assets/logos/${canal.logo}`)" class="img-fluid rounded-start img-canal" alt="">
      </div>
      <h5 class="card-title titulo-gris">{{canal.titulo}}</h5>
      <p class="card-text medium-p">{{canal.precio}}</p>
    </div>
    <div class="caract-canal">
      <div class="card caract-card" v-for="(caracteristica, index) in canal.caracteristicas" :key="index">
        <div class="row g-0 text-center text-sm-start">
          <div class="col-2 img-canal-cont">
          </div>
          <div class="col-10">
            <div class="card-body">
              <h5 class="card-title titulo-gris-footer">Vende en {{caracteristica.titulo}}</h5>
              <p class="card-text medium-p">{{caracteristica.descripcion}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../../../store/index'

export default {
  name: 'InfoCanal',
  props: {
    index: {
      type: Number,
      required: true,
    }, // Propiedad para recibir el índice del plan seleccionado
    canal: {
      type: Object,
      required: true,
    }, // Propiedad para recibir el plan completo
  },
  computed: {
    ...mapState(useCounterStore, ['canales']),
  },
  
}
</script>
