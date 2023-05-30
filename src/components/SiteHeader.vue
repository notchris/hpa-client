<template>
  <header>
    <div class="p-4 block md:flex justify-between items-center bg-slate-100">
      <div class="block md:flex gap-3 justify-center">
        <img class="w-full mx-auto md:mx-0"
             style="max-width: 200px"
             src="image/hpa_logo.png" />
        <div class="h-100 border-r border-slate-300 hidden md:block"></div>
        <div class="flex flex-col gap-1">
          <div style="font-size: 10px"
               class="text-slate-700 font-semibold uppercase mx-auto md:mx-0">
            A division of
          </div>
          <img class="w-full mx-auto md:mx-0"
               style="max-width: 120px"
               src="image/h2_logo.png" />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="hidden md:block text-right text-xs text-slate-700">
          1254 Old Colony Road, Suite 7
          <br />
          Wallingford, CT 06492 USA
        </div>
      </div>
    </div>
    <nav style="font-size: 14px"
         class="bg-slate-200 border-y border-y-slate-300 font-medium block md:flex items-center justify-center">
      <router-link class="transition-colors block py-3 px-3 hover:bg-blue-400 hover:text-slate-50"
                   to="/">Home</router-link>
      <router-link class="transition-colors block py-3 px-3 hover:bg-blue-400 hover:text-slate-50"
                   to="/our-company">Our Company</router-link>
      <router-link class="transition-colors block py-3 px-3 hover:bg-blue-400 hover:text-slate-50"
                   to="/hpa-uses">HPA Uses</router-link>
      <router-link class="transition-colors block py-3 px-3 hover:bg-blue-400 hover:text-slate-50"
                   to="/our-team">Our Team</router-link>
      <router-link class="transition-colors block py-3 px-3 hover:bg-blue-400 hover:text-slate-50"
                   to="/in-the-news">In The News</router-link>
      <router-link class="transition-colors block py-3 px-3 hover:bg-blue-400 hover:text-slate-50"
                   to="/memberships">Memberships & Affiliations</router-link>
      <router-link class="transition-colors block py-3 px-3 hover:bg-blue-400 hover:text-slate-50"
                   to="/contact-us">Contact Us</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "SiteHeader",
  computed: {},
  components: {},
})
</script>

<style>
.router-link-active {
  @apply bg-blue-500 text-white hover:bg-blue-500;
}
</style>
