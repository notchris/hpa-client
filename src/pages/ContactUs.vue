<template>
  <div class="w-100 px-10 py-10 bg-slate-100 text-center">
    <h1 class="text-4xl font-bold uppercase">Contact Us</h1>
  </div>

  <div
    class="w-full h-80 border-b bg-cover bg-center opacity-75 bg-[url('http://localhost:3000/media/sapphire.demo_.2_09_0.jpg')]"
  ></div>

  <div class="w-100 p-10 flex flex-col md:flex-row gap-4 justify-center flex-1 text-center items-center">
    <div
      class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full"
    >
      <h5
        class="mb-2 text-3xl font-medium leading-tight text-neutral-800"
      >
        Mailing Address
      </h5>
      <div class="mb-4 text-xl text-neutral-600">
        <div>P.O. Box 555</div>
        <div>Glastonbury, CT 06033  USA</div>
      </div>
    </div>
    <div
      class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full"
    >
      <h5
        class="mb-2 text-3xl font-medium leading-tight text-neutral-800"
      >
      R&D Facility
      </h5>
      <div class="mb-4 text-xl text-neutral-600">
        <div>1254 Old Colony Road, Suite 7</div>
        <div>Wallingford, CT  06492 USA</div>
      </div>
    </div>
  </div>

  <div class="w-100 px-10 flex flex-col md:flex-row gap-4 justify-center flex-1 text-center items-center">
    <div
      class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full"
    >
      <h5
        class="mb-4 text-3xl font-medium leading-tight text-neutral-800"
      >
        Contact Information
      </h5>
      <div class="mb-4 text-xl text-neutral-600 flex flex-col gap-4">
        <div><span class="font-semibold">Tel:</span> 860.783.8778</div>
        <div><span class="font-semibold">Fax:</span> 860.783.8787</div>
        <div><span class="font-semibold">Email:</span> <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="mailto:info@hpasonics.com">info@hpasonics.com</a></div>
      </div>
    </div>
  </div>


  <div class="w-100 md:max-w-full p-10 flex justify-center items-center">
    <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=1254%20Old%20Colony%20Rd,%20Wallingford,%20CT%2006492+(HPA%20Sonics)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageContactUs",
  computed: {},
  components: {},
});
</script>
