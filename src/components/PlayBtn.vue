<template>
  <button :type="type" class="btn orange-btn-primary rounded-pill">
    <a :href="to" target="_blank"><img src="../assets/icons/play.png" alt="play icono" class="play-icon">Ver video</a>
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