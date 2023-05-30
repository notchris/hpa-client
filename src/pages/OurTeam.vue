<template>
  <div class="w-100 px-10 py-10 bg-slate-100 text-center">
    <h1 class="text-4xl font-bold uppercase">{{ pageTitle }}</h1>
  </div>

  <div  class="w-full h-80 border-b bg-cover bg-center opacity-50 bg-[url('http://localhost:3000/media/original_led.jpg')]">
    </div>

  <div class="w-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start p-10">
    <div v-for="member in members" class="flex gap-2  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full">
      <img class="max-w-[250px] w-full rounded h-fit" :src="member.image.url" />
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ member.fullName }}
        </h5>
        <p class="mb-3 font-semibold text-gray-700 max-w-sm">{{ member.title }}</p>

        <p class="mb-3 font-normal text-gray-700 max-w-sm">{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurTeam",
  data() {
    return {
      api: import.meta.env.VITE_API_ROOT_DEV,
      pageTitle: "",
      members: [],
    };
  },
  async mounted() {
    try {
      const req = await fetch(this.api + "api/globals/our-team");
      const { pageTitle, teamMembers } = await req.json();
      this.pageTitle = pageTitle;
      this.members = teamMembers;
    } catch (err) {
      console.log(err);
    }
  },
});
</script>
