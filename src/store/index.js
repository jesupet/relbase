import { defineStore } from 'pinia'
import pasos from './pasos.json';



export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    pasos: pasos,
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
