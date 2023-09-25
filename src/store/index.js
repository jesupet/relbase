import { defineStore } from 'pinia'
import pasos from './pasos.json';
import caracteristicas from './caracteristicas.json'



export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    pasos: pasos,
    caracteristicas: caracteristicas,
  }),
  getters: {
  },
  mutations: {
  },
  actions: {
   
  },
  modules: {
    
  }
})
