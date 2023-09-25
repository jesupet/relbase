import { defineStore } from 'pinia'
import pasos from './pasos.json';
import caracteristicas from './caracteristicas.json'
import inventario from './inventario.json'



export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    pasos: pasos,
    caracteristicas: caracteristicas,
    inventario: inventario,
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
