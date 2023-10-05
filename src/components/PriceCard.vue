<template>
  <div class="card price-card">
    <div class="card-header">Plan {{plan.nombrePlan}}</div>
    <div class="card-body">
      <InfoPlan :index="index" :plan="plan"/>
    </div>
  </div>
</template>

<script>
import InfoPlan from './InfoPlan.vue'

export default {
  name: 'PriceCard',
  components: {
    InfoPlan,
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