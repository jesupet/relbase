import { defineStore } from 'pinia'
import pasos from './pasos.json';
import caracteristicas from './caracteristicas.json'
import inventario from './inventario.json'
import planes from './planes.json'
import planesIncluyen from './planesIncluyen.json'
import faqs from './faqs.json'
import reviews from './reviews.json'
import canales from './canales.json'
import $ from 'jquery';


export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    pasos: pasos,
    caracteristicas: caracteristicas,
    inventario: inventario,
    planes: planes,
    planesIncluyen: planesIncluyen,
    faqs: faqs,
    reviews: reviews,
    canales: canales,
  }),
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    
  },
  mounted() {
    // Inicializa los tooltips de Bootstrap
    $('[data-bs-toggle="tooltip"]').tooltip();
  },
})
