<template>
  <div class="parent">
    <div class="grey-bg-tittle">
      <img src="../../assets/vectors/inventario.svg" alt="" class="caract-icono">
      <h1>Inventario</h1>
    </div>
    <div class="container main-sec">
      <p class="subtittle-caract text-center">
        Gestiona inventario en tiempo real asociado a una o múltiples bodegas, conociendo el costo de su inventario mediante el método de promedio ponderado y calculando automáticamente el margen de sus ventas.
      </p>
      <div class="main-ventas container">
        <div class="row">
          <div class="col-xl-6 col-12 izq order-xl-0 order-1">
            <h2>{{inventario[0].titulo}}</h2>
            <hr class="hr-caract">
            <p class="medium-p">{{inventario[0].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 mockup-vtas order-xl-1 order-0">
            <img src="../../assets/diagrama.png" alt="" class="img-fluid">
          </div>
        </div>
        <hr class="d-xl-none d-block vtas-line">
        <div class="row">
          <div class="col-xl-6 col-12 order-2 text-xl-end text-start">
            <h2>{{inventario[1].titulo}}</h2>
            <hr class="hr-caract der">
            <p class="medium-p">{{inventario[1].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 mockup-vtas order-1">
            <img src="../../assets/diagrama.png" alt="" class="img-fluid">
          </div>
        </div>
        <hr class="d-xl-none d-block vtas-line">
        <div class="row">
          <div class="col-xl-6 col-12 izq order-xl-0 order-1">
            <h2>{{inventario[2].titulo}}</h2>
            <hr class="hr-caract">
            <p class="medium-p">{{inventario[2].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 mockup-vtas order-xl-1 order-0">
            <img src="../../assets/diagrama.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <div class="grey-sec container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="card card-inv">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{inventario[3].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{inventario[3].contenido}}
                  </p>
                </div>
              </div>
            </div>
             <div class="col-lg-6 col-12">
              <div class="card card-inv">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{inventario[4].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{inventario[4].contenido}}
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div class="row">
            <div class="col-lg-6 col-12">
              <div class="card card-inv">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{inventario[5].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{inventario[5].contenido}}
                  </p>
                </div>
              </div>
            </div>
             <div class="col-lg-6 col-12">
              <div class="card card-inv">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{inventario[6].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{inventario[6].contenido}}
                  </p>
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
  name: 'InventarioRb',
  computed: {
    ...mapState(useCounterStore, ['inventario'])
  },
}
</script>