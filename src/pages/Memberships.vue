<template>
     <div class="w-100 px-10 py-10  bg-slate-100 text-center">
        <h1 class="text-4xl font-bold uppercase">{{ pageTitle }}</h1>
    </div>
    <div class="w-100 p-10">
        <div class="w-full block sm:flex mb-5 items-center text-center"
             v-for="item in pageItems">
            <a target="_blank"
               :href="item.itemLink"
               :class="[item.itemLink ? 'text-blue-500 underline hover:text-blue-300' : '', 'font-semibold flex-1']">{{
                   item.itemTitle }}</a>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageMemberships',
    data() {
        return {
            api: import.meta.env.VITE_API_ROOT_DEV,
            pageTitle: '',
            pageItems: []
        }
    },
    methods: {

    },
    async mounted() {
        try {
            const req = await fetch(this.api + 'api/globals/memberships')
            const { pageTitle, item } = await req.json()
            this.pageTitle = pageTitle
            this.pageItems = item
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
