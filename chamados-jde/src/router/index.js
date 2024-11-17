import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Index from "@/views/Tickets/Index.vue";
import Create from "@/views/Tickets/Create.vue";
import Edit from "@/views/Tickets/Edit.vue"; 
import Address from "@/views/Address.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/tickets", name: "Tickets List", component: Index },
  { path: "/tickets/create", name: "Create Ticket", component: Create },
  { path: "/tickets/:id/edit", name: "Edit Ticket", component: Edit },
  { path: "/address", name: "Register Address", component: Address } 
];

// Criando o roteador
const router = createRouter({
  history: createWebHistory(), // Habilita navegação no browser
  routes,
});

export default router;
