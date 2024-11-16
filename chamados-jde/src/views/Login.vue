<template>
    <div class="login-container d-flex align-items-center justify-content-center">
      <div class="content-wrapper row w-100 h-100 m-0">
        <!-- Seção da Imagem -->
        <!-- <div class="col-lg-6 d-none d-lg-flex align-items-center justify-content-center illustration-section">
          <img :src="helpDeskImagePath" alt="Help Desk Illustration" class="illustration-img" />
          
        </div>
        -->
        <!-- Seção do Formulário -->
        <div class="col-lg-6 col-12 form-section d-flex flex-column justify-content-center align-items-center p-5">
          <div class="form-wrapper text-center">
            <img :src="logoPath" alt="Logo JDErick" class="logo-img mb-4" />
            <h1 class="display-4 text-white font-bold">Revolucione o suporte de TI</h1>
            <p class="lead text-white mt-3 mb-4">
              Una as equipes de desenvolvimento, TI e negócios em uma única plataforma.
            </p>
            <form @submit.prevent="handleLogin" class="login-form w-100 px-4">
              <div class="mb-3">
                <input
                  type="email"
                  v-model="email"
                  class="form-control form-input p-3"
                  placeholder="E-mail de trabalho"
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  v-model="password"
                  class="form-control form-input p-3"
                  placeholder="Senha"
                  required
                />
              </div>
              <button type="submit" class="btn btn-warning w-100 p-3 text-dark fw-bold">
                Entrar
              </button>
            </form>
            <p class="mt-3 text-white">
              Ainda não tem uma conta? <a href="#" class="text-warning fw-bold">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import logo from "@/assets/erick.png"; // Ajuste o caminho para apontar corretamente para o arquivo de logo
  import helpDeskImage from "@/assets/help-desk.png"; // Ajuste o caminho para apontar corretamente para a imagem help-desk
  
  export default {
    name: "App",
    data() {
      return {
        email: "",
        password: "",
        logoPath: logo,
        helpDeskImagePath: helpDeskImage,
      };
    },
    methods: {
      handleLogin() {
        if (this.email && this.password) {
          alert(`Bem-vindo, ${this.email}!`);
        } else {
          alert("Por favor, preencha todos os campos.");
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
  
  /* Seção da imagem */
  .illustration-section {
    flex: 1;
    background-color: #f4f6f9; /* Cor de fundo clara para a seção da imagem */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .illustration-img {
    max-width: 80%; /* Ajustar conforme necessário */
    height: auto;
  }
  
  /* Seção do formulário */
  .form-section {
    flex: 1;
    background-color: #0057ff; /* Azul vibrante */
    color: white;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .form-wrapper {
    max-width: 400px;
    width: 100%;
  }
  
  .form-input {
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
  }
  
  .btn-warning {
    background-color: #ffb900; /* Amarelo */
    border: none;
    transition: background-color 0.3s;
    width: 100%;
    padding: 1rem;
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
  
  .display-1 {
    font-size: 4rem; /* Aumentando o tamanho da fonte do título JDErick */
  }
  
  /* Estilo para o logo */
  .logo-img {
    max-width: 250px; /* Ajuste de tamanho do logo */
    height: auto;
  }
  </style>
  