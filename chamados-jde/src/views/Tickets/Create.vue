<template>
    <div>
        <div class="h-100">
            <nav class="navbar navbar-expand-sm navbar-dark bg-custom">
                <div class="container-fluid px-4 py-2 d-flex justify-content-center">
                    <img :src="logoPath" alt="Logo JDErick" class="logo-img" />
                </div>
            </nav>

            <div class="px-4 py-3">
                <!-- Linha com botão e título -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h3 class="m-0">Novo Chamado</h3>
                    <button @click="goBack" class="btn btn-danger d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="icon-btn">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span class="ms-2">Voltar</span>
                    </button>
                </div>

                <form @submit.prevent="handleCreateTicket" class="form-ticket w-50 mx-auto">
                    <div class="mb-3">
                        <label for="titulo" class="form-label">Título</label>
                        <input type="text" v-model="titulo" id="titulo" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="descricao" class="form-label">Descrição</label>
                        <textarea v-model="descricao" id="descricao" class="form-control" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="prioridade" class="form-label">Prioridade</label>
                        <select v-model="prioridade" id="prioridade" class="form-control" required>
                            <option value="1">Baixo</option>
                            <option value="2">Médio</option>
                            <option value="3">Alto</option>
                            <option value="4">Muito Alto</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="responsavel" class="form-label">Responsável</label>
                        <input type="text" v-model="responsavel" id="responsavel" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="categoria" class="form-label">Categoria</label>
                        <select v-model="categoria" id="categoria" class="form-control" required>
                            <option value="Requisição">Requisição </option>
                            <option value="Incidente">Incidente</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="departamento" class="form-label">Departamento</label>
                        <select v-model="departamento" id="departamento" class="form-control" required>
                            <option value="Comercial">Comercial </option>
                            <option value="Indústia">Indústia</option>
                            <option value="Contabilidade">Contabilidade</option>
                            <option value="Logística">Logística</option>
                            <option value="SAC">SAC</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success w-100">Criar Chamado</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "@/assets/erick.png";
import axios from "axios";

export default {
    name: "CreateTicket",
    data() {
        return {
            titulo: "",
            descricao: "",
            prioridade: "",
            responsavel: "",
            categoria:"",
            departamento:"",
            logoPath: logo,
        };
    },
    methods: {
        async handleCreateTicket() {
            const novoChamado = {
                titulo: this.titulo,
                descricao: this.descricao,
                prioridade: this.prioridade,
                responsavel: this.responsavel,
                categoria: this.categoria,
                departamento: this.departamento,
            };
            console.log(novoChamado)
            try {
                await axios.post("http://localhost:4000/api/chamados", novoChamado);
                alert("Chamado criado com sucesso!");
                this.$router.push("/tickets");
            } catch (error) {
                alert("Erro ao criar chamado: " + error.message);
            }
        },
        goBack() {
            if (confirm("Tem certeza que deseja sair sem salvar as alterações?")) {
                this.$router.push("/tickets");
            }
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");

.bg-custom {
    background-color: #0057ff;
}

.logo-img {
    width: 250px;
}

.form-ticket {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
