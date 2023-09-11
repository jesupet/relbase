<template>
  <div class="app">
    <NavbarRelbase/>
    <router-view></router-view>
    <FooterRelbase/>
  </div>
</template>

<script>

import NavbarRelbase from './components/Navigation/NavbarRelbase.vue'
import FooterRelbase from './components/FooterRelbase.vue'

export default {
  name: 'App',
  components: {
  NavbarRelbase,
  FooterRelbase,
  }
}
</script>


