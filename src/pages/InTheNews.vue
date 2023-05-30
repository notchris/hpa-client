<template>
    <div class="w-100 px-10 py-10  bg-slate-100 text-center">
        <h1 class="text-4xl font-bold uppercase">{{ pageTitle }}</h1>
    </div>
    <div class="w-100 p-10 flex flex-col items-center justify-center">
        <div class="w-full block sm:flex mb-5 items-center"
             v-for="article in pageArticles">
            <div class="min-w-[200px] text-slate-700 text-sm font-semibold">{{ parseDate(article.articleDate) }}</div>
            <a :href="article.articleLink ? article.articleLink : '#'" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ article.articleTitle }}</a>

        </div>
    </div>
    <div class="w-100 p-10">
        <img class="mx-auto" src="http://localhost:3000/media/NomineeSeal22.png"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageInTheNews',
    data() {
        return {
            api: import.meta.env.VITE_API_ROOT_DEV,
            pageTitle: '',
            pageArticles: []
        }
    },
    methods: {
        parseDate(date: string) {
            const d = new Date(date)
            return `${d.toLocaleString('default', { month: 'long' })}, ${d.getFullYear()}`
        }
    },
    async mounted() {
        try {
            const req = await fetch(this.api + 'api/globals/in-the-news')
            const { pageTitle, articles } = await req.json()
            this.pageTitle = pageTitle
            this.pageArticles = articles
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
