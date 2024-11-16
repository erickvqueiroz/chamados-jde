import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
];

// Criando o roteador
const router = createRouter({
  history: createWebHistory(), // Habilita navegação no browser
  routes,
});

export default router;