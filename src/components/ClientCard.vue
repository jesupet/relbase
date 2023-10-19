<template>
  <div>
    <div class="card" id="client-card" v-for="(review, index) in reviews" :key="index">
      <div class="city medium-p-white" :class="{ 'city-right': isEvenIndex(index), 'city-left': !isEvenIndex(index) }">
        {{review.ciudad}}
      </div>
      <div class="card-body">
        <p class="card-text medium-p">{{review.comentario}}</p>
        <p class="medium-p green-text">{{review.autor}}</p>
        <p class="medium-p">{{review.cargo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'

export default {
  name: 'ClientCard',
  computed: {
    ...mapState(useCounterStore, ['reviews']),
    isEvenIndex() {
    return (index) => index % 2 === 0;
  },
  },
}
</script>