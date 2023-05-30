<template>
  <footer class="w-full">
    <div class="w-full text-sm p-3 flex justify-center bg-slate-200">Proud to be be a Minority, Woman and Veteran 🇺🇸
      Owned
      Business</div>
    <div class="w-full text-sm px-3 py-5 flex flex-col items-center justify-center bg-slate-300">
      <div>©2023 HPA Sonics</div>
      <div class="flex gap-2 items-center mt-2">
        <span class="font-semibold">A division of</span>
        <img class="max-w-[150px]"
             src="http://localhost:5173/image/h2_logo.png" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteFooter',
  computed: {
  },
  components: {
  }
})
</script>
