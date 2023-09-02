<template>
  <button :type="type" class="btn btn-primary rounded-pill">
    <router-link :to="to"><img src="../assets/icons/play.png" alt="play icono" class="play-icon">Ver video</router-link>
  </button>
</template>

<script>
export default {
  name: 'PlayBtn',
  props: {
    to: {
      type: Object,
      default() {
        return { message: 'hello' }
      }
    },
    type: {
      type: String,
      default: "button"
    }
  }
}
</script>