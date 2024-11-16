import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// Definição das rotas
import HomeView from './views/HomeView.vue'; // Verifique se o arquivo está no local certo

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  // Outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Criando a aplicação
createApp(App).use(router).mount('#app');
