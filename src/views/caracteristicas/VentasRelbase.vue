<template>
  <div>
    <div class="grey-bg-tittle">
      <img src="../../assets/vectors/ventas.svg" alt="" class="caract-icono">
      <h1>Ventas</h1>
    </div>
    <div class="container-fluid main-sec">
      <p class="subtittle-caract text-center">
        Con relBase gestiona todo tu proceso de venta.
      </p>
      <div class="main-ventas container">
        <div class="row">
          <div class="col-xl-6 col-12 izq">
            <h2>{{caracteristicas[0].titulo}}</h2>
            <hr class="hr-caract">
            <p class="medium-p">{{caracteristicas[0].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 text-end">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-12 order-2 text-end">
            <h2>{{caracteristicas[1].titulo}}</h2>
            <hr class="hr-caract der">
            <p class="medium-p">{{caracteristicas[1].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 order-1">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-12 izq">
            <h2>{{caracteristicas[2].titulo}}</h2>
            <hr class="hr-caract">
            <p class="medium-p">{{caracteristicas[2].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 text-end">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
      </div>
      <div class="grey-sec container-fluid">
        <div class="container">
          <div class="row">
          <div class="col-4 text-end row">
            <div class="col-10">
              <p class="titulo-gris-footer">
              {{caracteristicas[3].titulo}}
              </p>
              <hr class="hr-caract der">
              <p class="medium-p mb-5">
                {{caracteristicas[3].contenido}}
              </p>
            </div>
            <div class="col-2">
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="m-3">
            </div>          
           <div class="col-10">
              <p class="titulo-gris-footer">
              {{caracteristicas[4].titulo}}
              </p>
              <hr class="hr-caract der">
              <p class="medium-p mb-5">
                {{caracteristicas[4].contenido}}
              </p>
            </div>
            <div class="col-2">
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="m-3">
            </div>       
          </div>
          <div class="col-4">
            <img src="../../assets/mobile.png" alt="">
          </div>
          <div class="col-4 text-start row">
            <div class="col-2">
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="mt-3">
            </div>
            <div class="col-10">
              <p class="titulo-gris-footer">
              {{caracteristicas[5].titulo}}
              </p>
              <hr class="hr-caract der">
              <p class="medium-p mb-5">
                {{caracteristicas[5].contenido}}
              </p>
            </div>
            <div class="col-2">
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="mt-3">
            </div>
            <div class="col-10">
              <p class="titulo-gris-footer">
              {{caracteristicas[6].titulo}}
              </p>
              <hr class="hr-caract der">
              <p class="medium-p mb-5">
                {{caracteristicas[6].contenido}}
              </p>
            </div>
          </div>
        </div>
        </div>
        
        
      </div>
      <div class="main-ventas container">
        <div class="row">
          <div class="col-xl-6 col-12 order-2 text-end">
            <h2>{{caracteristicas[7].titulo}}</h2>
            <hr class="hr-caract der">
           <p class="medium-p">{{caracteristicas[7].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 order-1">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-12 izq">
            <h2>{{caracteristicas[8].titulo}}</h2>
            <hr class="hr-caract">
            <p class="medium-p">{{caracteristicas[8].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 text-end">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-12 order-2 text-end">
            <h2>{{caracteristicas[9].titulo}}</h2>
            <hr class="hr-caract der">
            <p class="medium-p">{{caracteristicas[9].contenido}}</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 order-1">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
      </div>
      <div class="grey-sec container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{caracteristicas[10].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{caracteristicas[10].contenido}}
                  </p>
                </div>
              </div>
            </div>
             <div class="col-lg-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{caracteristicas[11].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{caracteristicas[11].contenido}}
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div class="row">
            <div class="col-lg-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{caracteristicas[12].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{caracteristicas[12].contenido}}
                  </p>
                </div>
              </div>
            </div>
             <div class="col-lg-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div>
                    <img src="../../assets/vectors/doc-icon.svg" alt="" class="mb-3">
                    <p class="titulo-gris-footer">
                      {{caracteristicas[13].titulo}}
                    </p>
                  </div>
                  <hr class="hr-caract der">
                  <p class="medium-p">
                    {{caracteristicas[13].contenido}}
                  </p>
                </div>
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
  name: 'VentasRelbase',
  computed: {
    ...mapState(useCounterStore, ['caracteristicas'])
  },
}
</script>