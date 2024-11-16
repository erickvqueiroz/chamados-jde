<template>
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Bem-vindo ao Dashboard, {{ userEmail }}</h1>
        <button @click="handleLogout" class="btn btn-logout">Sair</button>
      </header>
      <main class="dashboard-content">
        <p>Você está autenticado!</p>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
    data() {
      return {
        userEmail: "",
      };
    },
    created() {
      this.userEmail = localStorage.getItem("userEmail");
    },
    methods: {
      handleLogout() {
        localStorage.removeItem("userEmail");
        this.$router.push({ name: "Login" });
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    padding: 2rem;
    text-align: center;
  }
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .btn-logout {
    background-color: #ff4c4c;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .dashboard-content {
    margin-top: 2rem;
  }
  </style>
  