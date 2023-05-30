<template>
    <div class="w-100 px-10 py-10  bg-slate-100 text-center">
        <h1 class="text-4xl font-bold uppercase">{{ pageTitle }}</h1>
    </div>
    <div class="w-100 flex flex-wrap gap-10 items-start justify-center py-10">

        <div v-for="section in pageSections" class="md:max-w-sm max-w-full mx-10 md:mx-0 bg-white border border-gray-200 rounded-lg shadow">

            <div :style="{backgroundImage: `url('${section.image.url}')`}" class="rounded-t-lg w-full bg-cover bg-center bg-no-repeat h-80"></div>

    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ section.title }}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ section.content }}</p>
    </div>
</div>




    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageHpaUses',
    data() {
        return {
            api: import.meta.env.VITE_API_ROOT_DEV,
            pageTitle: '',
            pageSections: []
        }
    },
    async mounted() {
        try {
            const req = await fetch(this.api + 'api/globals/hpa-uses')
            const { pageTitle, pageSections } = await req.json()
            this.pageTitle = pageTitle
            this.pageSections = pageSections
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
