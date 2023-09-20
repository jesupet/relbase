<template>
  <div>
    <div class="grey-bg-tittle">
      <img src="../../assets/vectors/ventas.svg" alt="" class="caract-icono">
      <h1>Ventas</h1>
    </div>
    <div class="container main-sec">
      <p class="subtittle-caract text-center">
        Con relBase gestiona todo tu proceso de venta.
      </p>
      <div class="main-ventas">
        <div class="row">
          <div class="col-xl-6 col-12 pe-xl-5">
            <h2>Catálogo de producto para cada cliente</h2>
            <hr class="hr-caract">
            <p class="medium-p">Permite asignar una lista de productos o servicios a un cliente en particular ofreciendo un precio diferente.</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 text-end">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-12 ps-xl-5 order-2 text-end">
            <h2>Generación de cotizaciones</h2>
            <hr class="hr-caract der">
            <p class="medium-p">La cotización incluirá detalles como el precio de los productos o servicios, cantidades, validez de la cotización y podrá incluir también en las observaciones los plazos de entrega, los términos y condiciones de la venta, y cualquier otra información relevante para el cliente.</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 order-1">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-12 pe-xl-5">
            <h2>Generación de notas de ventas</h2>
            <hr class="hr-caract">
            <p class="medium-p">Para que puedas llevar el seguimiento de todas las ventas y/o salida de productos fácilmente, también se utiliza como ticket de caja.</p>
          </div>
          <div class="col-xl-6 col-12 pt-xl-0 pt-5 text-end">
            <img src="../../assets/diagrama.png" alt="">
          </div>
        </div>
      </div>
      <div class="grey-sec container-fluid">
        <div class="row">
          <div class="col-4 text-end">
            <div class="d-flex">
              <p class="titulo-gris-footer">
              Cesión de documentos a terceros (factoring)
              </p>
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="ms-3">
            </div>
            <hr class="hr-caract der">
            <p class="medium-p mb-5">
              Útil para mejorar la liquidez de la empresa, ya que le permite obtener un adelanto del pago de las facturas pendientes, lo que puede ayudar a cubrir gastos y a financiar el crecimiento del negocio.
            </p>
            <div class="d-flex mt-5">
              <p class="titulo-gris-footer">
              Facturación masiva de guías de despacho
              </p>
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="ms-3">
            </div>
            <hr class="hr-caract der">
            <p class="medium-p">
              Para agilizar el proceso de facturación cuando se emiten varías guías de despacho a un mismo cliente.
            </p>
          </div>
          <div class="col-4">
            <img src="../../assets/mobile.png" alt="">
          </div>
          <div class="col-4 text-start">
            <div class="d-flex">
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="me-3">
              <p class="titulo-gris-footer">
              Cesión de documentos a terceros (factoring)
              </p>
            </div>
            <hr class="hr-caract der">
            <p class="medium-p mb-5">
              Útil para mejorar la liquidez de la empresa, ya que le permite obtener un adelanto del pago de las facturas pendientes, lo que puede ayudar a cubrir gastos y a financiar el crecimiento del negocio.
            </p>
            <div class="d-flex mt-5">
              <img src="../../assets/vectors/doc-icon.svg" alt="" class="me-3">
              <p class="titulo-gris-footer">
              Facturación masiva de guías de despacho
              </p>
            </div>
            <hr class="hr-caract der">
            <p class="medium-p">
              Para agilizar el proceso de facturación cuando se emiten varías guías de despacho a un mismo cliente.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'VentasRelbase',
  components: {
  }
}
</script>