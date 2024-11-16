import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Index from "@/views/Tickets/Index.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/tickets", name: "Tickets List", component: Index}
];

// Criando o roteador
const router = createRouter({
  history: createWebHistory(), // Habilita navegação no browser
  routes,
});

export default router;