import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "./pages/Home.vue";
import OurCompanyVue from "./pages/OurCompany.vue";
import HpaUsesVue from "./pages/HpaUses.vue";
import OurTeamVue from "./pages/OurTeam.vue";
import InTheNewsVue from "./pages/InTheNews.vue";
import MembershipsVue from "./pages/Memberships.vue";
import ContactUsVue from "./pages/ContactUs.vue";

const routes = [
  { path: "/", component: HomeVue, alias: "/home" },
  { path: "/our-company", component: OurCompanyVue },
  { path: "/hpa-uses", component: HpaUsesVue },
  { path: "/our-team", component: OurTeamVue },
  { path: "/in-the-news", component: InTheNewsVue },
  { path: "/memberships", component: MembershipsVue },
  { path: "/contact-us", component: ContactUsVue },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
