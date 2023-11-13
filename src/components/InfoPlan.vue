<template>
  <div :id="plan.nombrePlan">
    <div class="grey-sec container-fluid text-center py-4">
      <p class="precio-titulo">{{plan.general.precio}}</p>
      <p class="precio-p muted">
        {{plan.general.detallePrecio}}
        <ToolTip :tooltip="'Implementación: Se paga una sola vez e incluye: proceso de certificación de boletas y facturas ante el SII; carga de historia de documentos (tope 3.000 XML) e inicio del servicio.'"/>
      </p>
    </div>
    <div class="container text-center py-4">
      <RoundedBtn :buttonText="'Contratar'" class="ms-0 mb-4"/>
      <p class="medium-p pt-2">
        {{plan.general.limite}}
        <ToolTip :tooltip="'Corresponde a la cantidad de documentos electrónicos que puede emitir en el mes, ya sea boleta, factura, guía, nota de crédito o débito.'"/>
      </p>
      <p class="medium-p pt-2">
        {{plan.general.usuarios}}
        <ToolTip :tooltip="'Corresponde a la cantidad de usuarios activos que puedes tener en relBase.'"/>
       </p>
      <p class="medium-p pt-2">
        {{plan.general.productos}}
        <ToolTip :tooltip="'Corresponde a la cantidad de productos (SKU) activos que puedes tener en relBase.'"/>
      </p>
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
          <ToolTip v-show="deberiaTenerTooltip(caracteristica)" :tooltip="tooltipParaCaracteristica(caracteristica)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../store/index'
import RoundedBtn from './RoundedBtn.vue'
import ToolTip from './ToolTip.vue'

export default {
  name: 'InfoPlan',
  components: {
    RoundedBtn,
    ToolTip,
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
  computed: {
    ...mapState(useCounterStore, ['planes', 'planesIncluyen'])
  },
  methods: {
    ...mapActions(useCounterStore, ['deberiaTenerTooltip', 'tooltipParaCaracteristica'])
    }
}
</script>