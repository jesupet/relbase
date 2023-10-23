<template>
  <div>
    <a><img src="../assets/vectors/review.svg" alt=""></a>
    <div class="card" id="client-card">
      <div class="city medium-p-white">
        {{reviews.ciudad}}
      </div>
      <div class="card-body">
        <p class="card-text medium-p">{{reviews.comentario}}</p>
        <p class="medium-p green-text">{{reviews.autor}}</p>
        <p class="medium-p">{{reviews.cargo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'MapLocation',
  components: {

  },
  computed: {
    ...mapState(useCounterStore, ['reviews'])
  }
}
</script>