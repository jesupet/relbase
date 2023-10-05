<template>
  <div :id="plan.nombrePlan">
    <div class="grey-sec container-fluid text-center py-4">
      <p class="precio-titulo">{{plan.general.precio}}</p>
      <p class="precio-p">{{plan.general.detallePrecio}}</p>
    </div>
    <div class="container text-center py-4">
      <RoundedBtn :buttonText="'Contratar'" class="ms-0 mb-4"/>
      <p class="medium-p pt-2">{{plan.general.limite}}</p>
      <p class="medium-p pt-2">{{plan.general.usuarios}}</p>
      <p class="medium-p pt-2">{{plan.general.productos}}</p>
      <span></span>
    </div>
    <div class="grey-sec container-fluid text-center py-4">
      <p class="precio-titulo">Características</p>
    </div>
    <div class="container py-4 caract-cont">
      <ul class="medium-p list">
        <li class="el" v-for="(caracteristica, index) in plan.caracteristicas" :key="index">
          <span><img src="../assets/vectors/check.svg" alt="Checkmark icon"></span>
          <p>{{caracteristica}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RoundedBtn from './RoundedBtn.vue'

export default {
  name: 'InfoPlan',
  components: {
    RoundedBtn,
  },
  props: {
    index: {
      type: Number,
      required: true,
    }, // Propiedad para recibir el índice del plan seleccionado
    plan: {
      type: Object,
      required: true,
    }, // Propiedad para recibir el plan completo
  },
  
}
</script>