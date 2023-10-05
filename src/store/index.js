import { defineStore } from 'pinia'
import pasos from './pasos.json';
import caracteristicas from './caracteristicas.json'
import inventario from './inventario.json'
import planes from './planes.json'
import planesIncluyen from './planesIncluyen.json'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    pasos: pasos,
    caracteristicas: caracteristicas,
    inventario: inventario,
    planes: planes,
    planesIncluyen: planesIncluyen,
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
