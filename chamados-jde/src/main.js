import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Criando a instância Vue
const app = createApp(App);

// Registrando o roteador
app.use(router);

// Montando o aplicativo
app.mount("#app");