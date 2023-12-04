<template>
  <div class="parent">
    <div class="text-center canal-title">
      <div class="img-canal-cont">
        <img :src="require(`@/assets/logos/${canal.logo}`)" class="img-fluid rounded-start img-canal" alt="">
      </div>
      <h5 class="card-title titulo-gris-footer" v-if="canal.titulo !== 'terreno'">{{canal.titulo}}</h5>
      <p class="card-text medium-p">{{canal.precio}}</p>
      <a href="" v-if="canal.titulo == 'terreno'"><img src="../../../assets/googleplay.png" alt=""></a>
    </div>
    <div class="caract-canal container">
      <div 
        class="card caract-card" 
        v-for="(caracteristica, index) in canal.caracteristicas" 
        :key="index" 
        :class="{ 'white-card': isEvenIndex(index), 'grey-card': !isEvenIndex(index) }">
        <div class="row g-0 text-center text-sm-start">
          <div class="col-2 img-canal-cont">
          </div>
          <div class="col-10">
            <div class="card-body">
              <h5 class="card-title titulo-gris-footer">{{caracteristica.titulo}}</h5>
              <p class="card-text medium-p">{{caracteristica.descripcion}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid grey-sec text-center" id="faqs-canal" v-if="canal.titulo !== 'terreno'">
      <h5 class="white-subtittle green-text">Preguntas Frecuentes</h5>
      <div class="accordion container" id="accordionFaqs">
        <div class="accordion-item" v-for="(faq, faqIndex) in canal.faqs" :key="faqIndex">
          <h2 class="accordion-header">
            <button class="accordion-button precio-subt" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+faqIndex" aria-expanded="false" :aria-controls="'#collapse'+index">
              {{faq.pregunta}}
            </button>
          </h2>
          <div :id="'collapse'+faqIndex" class="accordion-collapse collapse subtittle-caract" data-bs-parent="#accordionFaqs">
            <div class="accordion-body">
              {{faq.respuesta}}
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
    }, // Propiedad para recibir el plan completa
  },
  computed: {
    ...mapState(useCounterStore, ['canales']),
    isEvenIndex() {
    return (index) => index % 2 === 0;
  },
  },
  
}
</script>
