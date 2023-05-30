<template>
    <div class="w-100 flex flex-col px-10 py-20 gap-10">
        <div class="w-100 flex flex-col sm:flex-row gap-10">
            <div><img class="w-full md:max-w-sm rounded"
                     src="https://img.freepik.com/premium-photo/acetylsalicylic-acid-powder-being-produced-laboratory-inside-petri-dish-medicine-obtained-from-salicylic-acid-acetic-anhydride_72932-4116.jpg?w=740" />
            </div>
            <div class="mx-4 flex flex-col items-center md:items-start justify-center">
                <h3 class="text-4xl font-semibold text-blue-400 text-center md:text-left">We focus on producing High Purity Alumina</h3>
                <p class="py-4 text-2xl mb-2 text-center md:text-left">in the most cost-efficient and environmentally friendly manner in the
                    industry.
                </p>
                <a href="#"
                   class="max-w-fit px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors rounded">Learn
                    about HPA Sonics</a>
            </div>
        </div>
    </div>
    <div class="w-100 flex flex-col p-10 gap-10 bg-slate-100">
        <div class="w-100 flex flex-col items-center text-center">

            <div class="mb-4">
                <h3 class="text-4xl font-semibold text-blue-400 mb-10">Enabling applications in high growth markets</h3>
            </div>
            <div class="flex w-full gap-10">
                <div class="w-1/2">
                    <h4 class="text-2xl font-bold text-blue-800 mb-5">Synthetic Sapphire</h4>
                    <img class="rounded w-full border-4 border-white"
                         src="https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg?w=740&t=st=1676427379~exp=1676427979~hmac=413dd28340f146a037ccc519dfeef530f5e039bb1eefd3d84b31b96649a1e5db" />
                </div>
                <div class="w-1/2">
                    <h4 class="text-2xl font-bold text-blue-800 mb-5">Thermal Coatings</h4>
                    <img class="rounded w-full border-4 border-white"
                         src="https://img.freepik.com/free-photo/closeup-battery_53876-14829.jpg?w=740&t=st=1676427178~exp=1676427778~hmac=5cf2add1811b44097f4e189bdc42850b3b5a14cbd9d7742b56d15f1dd6e2ed88" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageHome',
    computed: {
    },
    components: {
    }
})
</script>
