<template>
    <div>
        <div class="h-100">
            <nav class="navbar navbar-expand-sm navbar-dark bg-custom">
                <div class="container-fluid px-4 py-2 justify-content-center">
                    <img :src="logoPath" alt="Logo JDErick" class="logo-img" />
                </div>
            </nav>

            <div class="px-4 py-3">
                <h3 class="pb-3">Novo Chamado</h3>
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
                        <input type="number" v-model="prioridade" id="prioridade" class="form-control" min="1" required />
                    </div>
                    <div class="mb-3">
                        <label for="valorEstimado" class="form-label">Valor Estimado</label>
                        <input type="number" v-model="valorEstimado" id="valorEstimado" class="form-control" step="0.01" required />
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <input type="text" v-model="status" id="status" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="responsavel" class="form-label">Responsável</label>
                        <input type="text" v-model="responsavel" id="responsavel" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="categoria" class="form-label">Categoria</label>
                        <input type="text" v-model="categoria" id="categoria" class="form-control" required />
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
            prioridade: 1,
            valorEstimado: 0.00,
            status: "",
            responsavel: "",
            categoria: "",
            logoPath: logo
        };
    },
    methods: {
        async handleCreateTicket() {
            // Dados do formulário para criar o chamado
            const novoChamado = {
                titulo: this.titulo,
                descricao: this.descricao,
                prioridade: this.prioridade,
                valorEstimado: this.valorEstimado,
                status: this.status,
                responsavel: this.responsavel,
                categoria: this.categoria
            };

            try {
                // Fazendo a requisição POST para criar o chamado
                await axios.post("http://localhost:4000/api/chamados", novoChamado);
                alert("Chamado criado com sucesso!");
                // Redireciona para a página de listagem dos chamados
                window.location.href = "http://localhost:5173/tickets";
            } catch (error) {
                alert("Erro ao criar chamado: " + error.response.data.error);
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

.form-ticket {
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
</style>
