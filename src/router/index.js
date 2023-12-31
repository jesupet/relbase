import { createRouter, createWebHistory } from 'vue-router'
import HomeRelbase from '../views/HomeRelbase.vue'
import VentasRelbase from '../views/caracteristicas/VentasRelbase.vue'
import InventarioRb from '../views/caracteristicas/InventarioRb.vue'
import AppMovilRb from '../views/caracteristicas/AppMovilRb.vue'
import CanalesDigitalesRb from '../views/caracteristicas/CanalesDigitalesRb.vue'
import PuntoVentaRb from '../views/caracteristicas/PuntoVentaRb.vue'
import RecaudacionRb from '../views/caracteristicas/RecaudacionRb.vue'
import ReportesRb from '../views/caracteristicas/ReportesRb.vue'
import PreciosRelbase from '../views/PreciosRelbase.vue'
import PreguntasFrecuentes from '../views/PreguntasFrecuentes.vue'
import NuestrosClientes from '../views/NuestrosClientes.vue'
import CanalesVenta from '../views/recursos/CanalesVenta.vue'
import UnCanalVenta from '../views/recursos/canales/UnCanalVenta.vue'
import IntegracionesRb from '../views/recursos/IntegracionesRb.vue'
import ApiRelbase from '../views/recursos/ApiRelbase.vue'
import PoliticasPrivacidad from '../views/PoliticasPrivacidad.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeRelbase
  },
  {
    path: '/caracteristicas/ventas',
    name: 'ventas',
    component: VentasRelbase
  },
  {
    path: '/caracteristicas/app-movil',
    name: 'app-movil',
    component: AppMovilRb
  },
  {
    path: '/caracteristicas/canales-digitales',
    name: 'canales-digitales',
    component: CanalesDigitalesRb
  },
  {
    path: '/caracteristicas/inventario',
    name: 'inventario',
    component: InventarioRb
  },
  {
    path: '/caracteristicas/punto-de-venta',
    name: 'punto-de-venta',
    component: PuntoVentaRb
  },
  {
    path: '/caracteristicas/recaudacion',
    name: 'recaudacion',
    component: RecaudacionRb
  },
  {
    path: '/caracteristicas/reportes',
    name: 'reportes',
    component: ReportesRb
  },
  {
    path: '/precios',
    name: 'precios',
    component: PreciosRelbase,
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: PreguntasFrecuentes,
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: NuestrosClientes,
  },
  {
    path: '/recursos/canales-de-venta',
    name: 'canales-de-venta',
    component: CanalesVenta,
  },
  {
    path: '/recursos/canales-de-venta/:index',
    name: 'uncanalventa',
    component: UnCanalVenta,
  },
  {
    path: '/recursos/integraciones',
    name: 'integraciones',
    component: IntegracionesRb,
  },
  {
    path: '/recursos/api',
    name: 'api',
    component: ApiRelbase,
  },
  {
    path: '/politicas-privacidad',
    name: 'politicas-privacidad',
    component: PoliticasPrivacidad,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
})

export default router