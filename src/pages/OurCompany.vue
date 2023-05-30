<template>
    <div class="w-100 px-10 py-10  bg-slate-100 text-center">
        <h1 class="text-4xl font-bold uppercase">{{ pageTitle }}</h1>
    </div>

    <div  class="w-full h-80 border-b bg-cover bg-center opacity-50 bg-[url('http://localhost:3000/media/HPA_MaRK.jpg')]">
    </div>

    <div class="w-100 flex flex-col items-center justify-center gap-10 px-10 py-10">
        <div class="text-3xl font-medium max-w-prose text-center">Focused on becoming a leading supplier of 99.99% (4N) & 99.999% (5N) High Purity Alumina in North America.</div>
        <div class="text-2xl font-medium max-w-prose text-center">The solution for bringing the most rapid, economical and green process for the creation of an HPA Supply Chain to North America & the USA where there is a serious lack of supply and huge demand.</div> 
        <div class="text-2xl font-bold max-w-prose text-center">Our process is singularly unique in that it emits ZERO GREENHOUSE EMISSIONS</div>
    </div>




    <div class="w-100 block md:flex justify-center gap-10 px-10 py-10">
        <img v-if="pageImage" class="inline w-full h-fit md:max-w-md mb-10 md:mb-0" :src="pageImage"/>
        <div>
            <p class="prose pb-3"
           v-for="leaf in pageData">
            <span :class="[child.bold ? 'font-bold' : '']"
                  v-for="child in leaf.children">{{ child.text }}</span>
        </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageOurCompany',
    data() {
        return {
            api: import.meta.env.VITE_API_ROOT_DEV,
            pageTitle: '',
            pageImage: null,
            pageData: []
        }
    },
    async mounted() {
        try {
            const req = await fetch(this.api + 'api/globals/our-company')
            const { pageTitle, sectionA } = await req.json()
            this.pageTitle = pageTitle
            this.pageData = sectionA.pageData
            this.pageImage = sectionA.image.url
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
