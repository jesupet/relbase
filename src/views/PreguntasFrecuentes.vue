<template>
  <div>
     <div class="grey-bg-tittle text-center">
        <h1>Preguntas Frecuentes</h1>
    </div>
    <div class="container faqs">
      <h3 class="titulo-gris-footer">Tema 1</h3>
      <div class="accordion" id="accordionFaqs">
        <div class="accordion-item" v-for="(item, index) in faqs" :key="index">
          <h2 class="accordion-header">
            <button class="accordion-button precio-subt" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse`+index" aria-expanded="true" :aria-controls="`#collapse`+index">
              {{item.pregunta}}
            </button>
          </h2>
          <div :id="`collapse`+index" class="accordion-collapse collapse show subtittle-caract" data-bs-parent="#accordionFaqs">
            <div class="accordion-body">
              {{item.respuesta}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'PreciosRelbase',
  computed: {
    ...mapState(useCounterStore, ['faqs'])
  },
}
</script>