<template>
  <div>
    <div class="grey-bg-tittle text-center">
      <p class="white-text">Recursos</p>
      <hr class="white-text white-line">
      <h1>API relBase</h1>
    </div>
    <div class="container main-sec text-center">
      <p class="subtittle-caract text-center m-3">
        Conecta tu aplicación al SII de forma rápida y simple, usando nuestra API RESTful de relBase.Verifica la documentación y conéctate usando el lenguaje de programación que tú conoces, logrando emitir todos los tipos de documentos tributrarios que necesites.
      </p>
      <div>
        <img src="../../assets/vectors/api_logo.svg" alt="" class="m-3">
      </div>
      <a href="https://relbase.zendesk.com/hc/es/articles/6156110515213-relBase-API-Rest-Primeros-pasos" target="_blank" class="btn btn-primary rounded-pill my-3">
        Ver Documentación
      </a>
      <div class="api-exp text-center">
        <h5 class="white-subtittle green-text">¿Cómo funciona?</h5>
        <hr class="grey-text white-line">
        <div class="cards-api-cont">
          <div class="card api-card">
            <div class="row g-0 text-center text-md-start">
              <div class="api-number col-md-1">
                <img src="../../assets/vectors/green_one.svg" alt="">
              </div>
              <div class="col-md-2 apicard-icon">
                <img src="../../assets/vectors/api_card_icon.svg" alt="">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <p class="card-text medium-p px-sm-5 py-3">Tus clientes utilizarán tu aplicación o servicio, sin necesidad de entrar a relBase.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card api-card">
            <div class="row g-0 text-center text-md-start">
              <div class="api-number col-md-1">
                <img src="../../assets/vectors/green_two.svg" alt="">
              </div>
              <div class="col-md-2 apicard-icon">
                <img src="../../assets/vectors/api_card_icon.svg" alt="">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <p class="card-text medium-p px-sm-5 py-3">Tu aplicación enviará los datos necesarios a la API de relBase para emitir el documento tributario solicitado.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card api-card">
            <div class="row g-0 text-center text-md-start">
              <div class="api-number col-md-1">
                <img src="../../assets/vectors/green_three.svg" alt="">
              </div>
              <div class="col-md-2 apicard-icon">
                <img src="../../assets/vectors/api_card_icon.svg" alt="">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <p class="card-text medium-p px-sm-5 py-3">La API de relBase recepcionará los datos de tu aplicación y los enviará al SII (Servicio de Impuestos Internos) de acuerdo a los estándares solicitados.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card api-card">
            <div class="row g-0 text-center text-md-start">
              <div class="api-number col-md-1">
                <img src="../../assets/vectors/green_four.svg" alt="">
              </div>
              <div class="col-md-2 apicard-icon">
                <img src="../../assets/vectors/api_card_icon.svg" alt="">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <p class="card-text medium-p px-sm-5 py-3">El SII (Servicio de Impuestos Internos) recibirá y aceptará el documento tributario y la API de relBase retornará a tu aplicación el PDF o XML para que puedas enviarlo a tus clientes.</p>
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
import { mapState } from 'pinia'
import { useCounterStore } from '../../store/index'

export default {
  name: 'ApiRelbase',
  components: {
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