<template>
    <div class="login-container d-flex align-items-center justify-content-center">
      <div class="content-wrapper row w-100 h-100 m-0">
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
            <p class="mt-3 text-black">
              Ainda não tem uma conta? <a href="#" class="text-warning fw-bold">Cadastre-se</a>
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
      handleLogin() {
        if (this.email && this.password) {
          localStorage.setItem("userEmail", this.email);
          this.$router.push({ name: "Dashboard" });
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
  
  .form-section {
    flex: 1;
    background-color: #0057ff;
    color: white;
    padding: 3rem;
  }
  
  .logo-img {
    max-width: 200px;
    height: auto;
  }
  </style>
  