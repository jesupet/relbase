import { defineStore } from 'pinia'
import pasos from './pasos.json';
import caracteristicas from './caracteristicas.json'
import inventario from './inventario.json'
import planes from './planes.json'
import planesIncluyen from './planesIncluyen.json'
import faqs from './faqs.json'
import reviews from './reviews.json'
import canales from './canales.json'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    pasos: pasos,
    caracteristicas: caracteristicas,
    inventario: inventario,
    planes: planes,
    planesIncluyen: planesIncluyen,
    //feature: planesIncluyen.feature(),
    faqs: faqs,
    reviews: reviews,
    canales: canales,
    selectedReviewIndex: null,
  }),
  getters: {
  },
  mutations: {
  },
  actions: {
    navigateTo(route) {
      this.$pinia.router.push(route);

  
      // Desplázate al principio de la página
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    deberiaTenerTooltip(feature) {
      // Define aquí las condiciones para determinar si una característica debe tener un tooltip
      // Por ejemplo, puedes verificar si la característica contiene cierta palabra clave
      const palabrasClave = ['XML', 'Soporte', 'Impuestos', 'Facturas', 'sucursal', 'exportación', 'recurrente']; // Puedes agregar más palabras clave
      return palabrasClave.some(palabra => feature.includes(palabra));
    },
    tooltipParaCaracteristica(feature) {
      // Define aquí el contenido del tooltip para cada característica
      // Puedes retornar diferentes tooltips basados en la característica
      if (feature.indexOf('XML') !== -1) {
        return '- Si tu empresa no utiliza el software gratuito del SII, puedes adjuntar los archivos XML de ventas y compras que quieres cargar en relBase como historia (tope de 3.000).\n- Por cada 3.000 archivos XML deberás pagar 1 UF + IVA adicional.\n- Si tu empresa utiliza el software gratuito del SII, se cargaran todas tus ventas y solo el último año de las compras.';
      }
      if (feature.indexOf('Soporte') !== -1) {
        return 'Soporte en horario hábil de lunes a viernes de 09:00 a 18:00 hrs.'
      }
      if (feature.indexOf('Impuestos') !== -1) {
        return 'Impuestos adicionales: \nArt. de oro, joyas y pieles finas (15%)\nTapices, casa rodantes, caviar y Armas de aire o gas (15%)\nLicores, Piscos, Destilados (31,5%)\nVinos, Chichas y Sidras (20,5%)\nCervezas y otras bebidas alcohólicas (20,5%)\nAguas minerales y bebidas analcohólicas (10%)\nBebidas analcohólicas y minerales con elevado contenido de azúcares (18%)\nPirotecnia (50%)\nIVA anticipado carne (5%)\nIVA anticipado harina (12%)';
      } 
      if (feature.indexOf('Facturas') !== -1) {
        return 'Permite emitir facturas de compra electrónica.\nValor del proceso de certificación es de 0,5 UF + IVA adicional'
      }
      if (feature.indexOf('sucursal') !== -1) {
        return 'Incluye 1 sucursal (casa matriz).\nCada nueva sucursal tiene un valor de 0,5 UF + IVA mensual'
      }
      if (feature.indexOf('exportación') !== -1) {
        return 'Permite emitir factura electrónica de exportación, nota de crédito electrónica de exportación y nota de débito electrónica de exportación.\nValor del proceso de certificación es de 1 UF + IVA adicional'
      }
      if (feature.indexOf('recurrente') !== -1) {
        return 'Permite confeccionar una boleta o factura electrónica que será generada y enviada automáticamente al cliente por email de acuerdo a la frecuencia seleccionada'
      }
      // Agrega más casos según sea necesario
    },
    redirectToHome({ commit }) {
      // Puedes realizar acciones adicionales aquí si es necesario
      // ...

      // Ejecuta la redirección
      commit('redirectAndScroll');
    },
  }
})
