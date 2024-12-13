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
                        plataforma.</h3>
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
                        <label for="cpf" class="form-label">CPF</label>
                        <input type="text" v-model="cpf" @input="formatCPF" id="cpf" class="form-control" required />
                        <small v-if="cpfError" class="text-danger">{{ cpfError }}</small>
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Idade</label>
                        <input type="number" v-model="age" id="age" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Telefone</label>
                        <input type="tel" v-model="phone" @input="formatPhoneNumber" id="phone" class="form-control"
                            required />
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

export default {
    name: "Address",
    data() {
        return {
            fullName: "",
            age: "",
            cpf: "",
            cpfError: "",
            phone: "",
            address: "",
            email: "",
            password: "",
            logoPath: logo
        };
    },
    methods: {
        async handleRegisterAddress() {
            if (!this.isValidCPF(this.cpf)) {
                this.cpfError = "CPF inválido. Por favor, insira um CPF válido.";
                return;
            }
            this.cpfError = ""; // Limpa o erro se o CPF for válido

            const newAddress = {
                fullName: this.fullName,
                age: this.age,
                phone: this.phone,
                address: this.address,
                email: this.email,
                password: this.password,
                cpf: this.cpf
            };

            try {
                const response = await fetch("http://localhost:4000/api/address", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newAddress)
                });

                if (!response.ok) {
                    throw new Error("Erro ao cadastrar endereço.");
                }

                alert("Endereço cadastrado com sucesso!");
                // Redireciona para a página de login após o cadastro
                window.location.href = "http://localhost:5173/";
            } catch (error) {
                console.error('Erro ao cadastrar endereço:', error.message);
                alert("Erro ao cadastrar endereço. Tente novamente.");
            }
        },
        goBack() {
            const confirmExit = confirm("Tem certeza que deseja sair sem salvar as alterações?");
            if (confirmExit) {
                this.$router.push('/');
            }
        },
        formatCPF() {
            let cleaned = ('' + this.cpf).replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            let formatted = '';

            if (cleaned.length > 3) {
                formatted += cleaned.slice(0, 3) + '.';
            } else {
                formatted += cleaned;
            }

            if (cleaned.length > 6) {
                formatted += cleaned.slice(3, 6) + '.';
            } else if (cleaned.length > 3) {
                formatted += cleaned.slice(3);
            }

            if (cleaned.length > 9) {
                formatted += cleaned.slice(6, 9) + '-';
                formatted += cleaned.slice(9, 11);
            } else if (cleaned.length > 6) {
                formatted += cleaned.slice(6);
            }

            this.cpf = formatted;
        },
        isValidCPF(cpf) {
            cpf = cpf.replace(/[\D]/g, ''); // Remove caracteres não numéricos

            if (cpf.length !== 11) return false;

            let sum = 0;
            let rest;

            // Verifica se todos os números são iguais (ex: 111.111.111-11)
            if (/^(\d)\1+$/.test(cpf)) return false;

            for (let i = 1; i <= 9; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }

            rest = (sum * 10) % 11;

            if (rest === 10 || rest === 11) rest = 0;
            if (rest !== parseInt(cpf.substring(9, 10))) return false;

            sum = 0;
            for (let i = 1; i <= 10; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }

            rest = (sum * 10) % 11;

            if (rest === 10 || rest === 11) rest = 0;
            if (rest !== parseInt(cpf.substring(10, 11))) return false;

            return true;
        },
        formatPhoneNumber() {
            let cleaned = ('' + this.phone).replace(/\D/g, '');
            let formatted = '';

            if (cleaned.length > 2) {
                formatted = `(${cleaned.slice(0, 2)}) `;
            } else {
                formatted = cleaned;
            }

            if (cleaned.length > 2 && cleaned.length <= 6) {
                formatted += cleaned.slice(2);
            } else if (cleaned.length > 6) {
                formatted += cleaned.slice(2, 7) + '-' + cleaned.slice(7, 11);
            }

            this.phone = formatted;
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

.btn-danger {
    height: 45px;
    padding: 0 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-btn {
    width: 20px;
    height: 20px;
}
</style>