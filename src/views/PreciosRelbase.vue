<template>
  <div class="mb-5">
     <div class="grey-bg-tittle">
      <h1>Precios</h1>
    </div>
    <div class="container-fluid main-sec">
      <p class="subtittle-caract text-center mx-3">
        Planes sin costos de cancelación, se puede suspender el servicio en cualquier momento (*)
      </p>
    </div>
    <!--MOBILE-->
    <div class="d-block d-lg-none">
      <div class="row text-center btn-plans">
        <div class="col" :class="{ 'active-link': selectedPlanIndex === 0 }">
          <a @click="selectPlan(0)">Plan Despegue</a>
        </div>
        <div class="col" :class="{ 'active-link': selectedPlanIndex === 1 }">
          <a @click="selectPlan(1)">Plan Pyme</a>
        </div>
        <div class="col" :class="{ 'active-link': selectedPlanIndex === 2 }">
          <a @click="selectPlan(2)">Plan Corporativo</a>
        </div>
      </div>
      <!--Componente del Plan-->
      <InfoPlan :index="selectedPlanIndex" :plan="planes[selectedPlanIndex]"/>
    </div>
    <!--DESKTOP-->
    <div class="d-none d-lg-block container desk-price">
      <div class="row">
        <div class="col-4">
          <PriceCard :index="0" :plan="planes[0]"/>
        </div>
        <div class="col-4">
          <PriceCard :index="1" :plan="planes[1]"/>
        </div>
        <div class="col-4">
          <PriceCard :index="2" :plan="planes[2]"/>
        </div>
      </div>
    </div>
    <hr class="grey-line d-block d-lg-none">
    <div class="container pt-5">
      <p class="precio-subt py-4">
        Agrega otros servicios a tu plan
      </p>
      <!--Tabla-->
      <table class="table table-striped table-bordered price-table">
        <tbody>
          <tr>
            <th class="medium-p">Integración con eCommerce</th>
            <td class="table-price">0,5 UF + iva</td>
          </tr>
          <tr>
            <th class="medium-p">Integración con MercadoLibre</th>
            <td class="table-price">1 UF + iva</td>
          </tr>
          <tr>
            <th class="medium-p">Integración con Paris</th>
            <td class="table-price">1 UF + iva</td>
          </tr>
          <tr>
            <th class="medium-p">Integración con Ripley</th>
            <td class="table-price">1 UF + iva</td>
          </tr>
          <tr>
            <th class="medium-p">Integración con Falabella SellerCenter</th>
            <td class="table-price">1 UF + iva</td>
          </tr>
          <tr>
            <th class="medium-p">Integración con Dafiti</th>
            <td class="table-price">1 UF + iva</td>
          </tr>
        </tbody>
      </table>
      <p class="precio-subt py-4">
        Además todos los planes incluyen
      </p>
      <table class="table table-striped table-bordered">
        <tbody>
          <tr v-for="(feature, index) in planesIncluyen[0].features" :key="index">
            <th>
              <img src="../assets/vectors/check.svg" alt="Checkmark icon" class="green-check">
            </th>
            <td class="medium-p">{{feature}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container my-5">
      <p>Para contratar planes superiores contáctanos al correo electrónico <a class="mail-link" href="mailto: contacto@relbase.cl">contacto@relbase.cl</a>.</p>
      <p class="my-4">(*) Suspensión del servicio previo aviso de 30 días corridos</p>
      <p class="precio-titulo">POLÍTICA DEVOLUCIÓN: </p>
      <p class="mt-3">Desde la fecha de contratación de un plan, tienes hasta 48 horas para solicitar el reembolso de tu dinero. Aquellos servicios que ya fueron prestados, por ejemplo, certificación ante el SII, compra del certificado digital, traspaso o carga de información, comisiones por cargo entre otros, serán descontados del monto a reembolsar.</p>
      <p class="my-4">Para solicitar un reembolso debes solicitarlo a <a class="mail-link" href="mailto: contacto@relbase.cl">contacto@relbase.cl</a>.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'
import InfoPlan from '../components/InfoPlan.vue'
import PriceCard from '../components/PriceCard.vue'

export default {
  name: 'PreciosRelbase',
  components: {
    InfoPlan,
    PriceCard
  },
  computed: {
    ...mapState(useCounterStore, ['planes', 'planesIncluyen'])
  },
  data() {
    return {
      selectedPlanIndex: 0, // Inicialmente muestra el Plan Despegue
    };
  },
  
  methods: {
    selectPlan(index) {
      this.selectedPlanIndex = index;
    },
  }
}
</script>