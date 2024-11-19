<template>
  <div class="login-container d-flex align-items-center justify-content-center">
    <div class="content-wrapper row w-100 h-100 m-0">
      <!-- Seção do Formulário -->
      <div class="col-lg-6 col-12 form-section d-flex flex-column justify-content-center align-items-center p-4">
        <div class="form-wrapper text-center">
          <img :src="logoPath" alt="Logo JDErick" class="logo-img mb-3" />
          <h1 class="display-5 text-white font-bold">Revolucione o suporte de TI</h1>
          <p class="lead text-white mt-2 mb-3">
            Una as equipes de desenvolvimento, TI e negócios em uma única plataforma.
          </p>
          <form @submit.prevent="handleLogin" class="login-form w-100 px-3">
            <div class="mb-2">
              <input
                type="email"
                v-model="email"
                class="form-control form-input p-2"
                placeholder="E-mail de trabalho"
                required
              />
            </div>
            <div class="mb-2">
              <input
                type="password"
                v-model="password"
                class="form-control form-input p-2"
                placeholder="Senha"
                required
              />
            </div>
            <button type="submit" class="btn btn-warning w-100 p-2 text-dark fw-bold">
              Entrar
            </button>
          </form>
          <p class="mt-3 text-white">
            Ainda não tem uma conta?
            <!-- Usando router-link para redirecionar para a página de cadastro -->
            <router-link to="/address" class="text-warning fw-bold">Cadastre-se</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/erick.png";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      logoPath: logo,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch("http://localhost:4000/api/address/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        if (!response.ok) {
          throw new Error("Credenciais incorretas!");
        }

        const data = await response.json();
        if (data.success) {
          // Redirecionar para a página de tickets se o login for bem-sucedido
          this.$router.push("/tickets");
        } else {
          alert("Credenciais incorretas!");
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Poppins', Arial, sans-serif;
}

.login-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Evitar qualquer overflow que gere faixas indesejadas */
}

/* Seção do formulário */
.form-section {
  flex: 1;
  background-color: #0057ff; /* Azul vibrante */
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  max-width: 350px;
  width: 100%;
}

.form-input {
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.8rem; /* Diminuindo o padding para ocupar menos espaço vertical */
  width: 100%;
}

.btn-warning {
  background-color: #ffb900; /* Amarelo */
  border: none;
  transition: background-color 0.3s;
  width: 100%;
  padding: 0.8rem; /* Diminuindo o padding para tornar o botão mais compacto */
  font-weight: bold;
}

.btn-warning:hover {
  background-color: #ffa500; /* Amarelo escuro */
}

/* Adicionando estilo para os títulos */
.font-bold {
  font-weight: 700;
}

.text-highlight {
  color: #ff6600; /* Laranja para destaque */
}

.display-5 {
  font-size: 2.5rem; /* Diminuindo o tamanho da fonte do título para ajustar em uma linha */
}

/* Estilo para o logo */
.logo-img {
  max-width: 200px; /* Ajuste de tamanho do logo para torná-lo um pouco menor */
  height: auto;
  margin-bottom: 1rem; /* Diminuindo o espaçamento abaixo do logo */
}
</style>
