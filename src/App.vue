<template>
  <SiteHeader />
  <main><router-view></router-view></main>
  <SiteFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
export default defineComponent({
  name: 'App',
  computed: {
  },
  components: {
    SiteHeader,
    SiteFooter
  }
})
</script>
