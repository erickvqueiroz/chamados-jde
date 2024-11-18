<template>
    <div>
        <div class="h-100">
            <nav class="navbar navbar-expand-sm navbar-dark bg-custom">
                <div class="container-fluid px-4 py-2 d-flex justify-content-center">
                    <img :src="logoPath" alt="Logo JDErick" class="logo-img" />
                </div>
            </nav>
            <div class="px-4 py-3">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h3 class="m-0">Bem-vindo(a): Insira os dados e conclua o cadastro para conseguir acessar a
                        plataforma.
                    </h3>
                    <button @click="goBack" class="btn btn-danger d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="icon-btn">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span class="ms-2">Voltar</span>
                    </button>
                </div>
                <form @submit.prevent="handleRegisterAddress" class="form-address w-50 mx-auto">
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Nome Completo</label>
                        <input type="text" v-model="fullName" id="fullName" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Idade</label>
                        <input type="number" v-model="age" id="age" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Telefone</label>
                        <input type="tel" v-model="phone" id="phone" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Endereço</label>
                        <input type="text" v-model="address" id="address" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" v-model="email" id="email" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Senha</label>
                        <input type="password" v-model="password" id="password" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-success w-100">Concluir Cadastro</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "@/assets/erick.png";
import axios from "axios";

export default {
    name: "Address",
    data() {
        return {
            fullName: "",
            age: "",
            phone: "",
            address: "",
            email: "",
            password: "",
            logoPath: logo
        };
    },
    methods: {
        async handleRegisterAddress() {
            // Dados do formulário para cadastrar o endereço
            const newAddress = {
                fullName: this.fullName,
                age: this.age,
                phone: this.phone,
                address: this.address,
                email: this.email,
                password: this.password
            };

            try {
                // Fazendo a requisição POST para cadastrar o endereço
                await axios.post("http://localhost:4000/api/usuarios", newAddress);
                alert("Endereço cadastrado com sucesso!");
                // Redireciona para a página de login após o cadastro
                window.location.href = "http://localhost:5173/";
            } catch (error) {
                console.error('Erro ao cadastrar endereço:', error.response?.data || error.message);
                alert("Erro ao cadastrar endereço. Tente novamente.");
            }
        },
        goBack() {
            // Confirmação antes de sair sem salvar
            const confirmExit = confirm("Tem certeza que deseja sair sem salvar as alterações?");
            if (confirmExit) {
                // Redireciona para a página de login
                this.$router.push('/');
            }
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

.bg-custom {
    background-color: #0057ff;
}

.logo-img {
    width: 250px;
}

.form-address {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-label {
    font-weight: bold;
}

button {
    margin-top: 20px;
}

.btn-danger {
    background-color: #dc3545;
    border: none;
    color: white;
    margin-left: 10px;
}

.btn-danger:hover {
    background-color: #c82333;
}
</style>
