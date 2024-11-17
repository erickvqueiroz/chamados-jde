<template>
    <div>
        <div class="h-100">
            <nav class="navbar navbar-expand-sm navbar-dark bg-custom">
                <div class="container-fluid px-4 py-2 d-flex justify-content-between">
                    <img :src="logoPath" alt="Logo JDErick" class="logo-img" />
                    <button @click="goBack" class="btn btn-danger">Voltar</button>
                </div>
            </nav>

            <div class="px-4 py-3">
                <h3 class="pb-3">Bem-vindo(a): Insira os dados e conclua o cadastro para conseguir acessar a plataforma.</h3>
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
