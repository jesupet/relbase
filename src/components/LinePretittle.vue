<template>
  <div class="align-items-center me-2">
    <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector 12" d="M1 1H15" :stroke="stroke" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LinePretittle',
  props: {
    stroke: {
      type: String,
      default: "#C9DC00"
    }
  },

}
</script>