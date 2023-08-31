<template>
  <div>
    <PrePreNavbar/>
    <PreNavbar/>
  </div>
</template>

<script>
import PrePreNavbar from './PrePreNavbar.vue'
import PreNavbar from './PreNavbar.vue'

export default {
  name: 'NavbarRelbase',
  components:{
    PrePreNavbar,
    PreNavbar,
  }
}
</script>