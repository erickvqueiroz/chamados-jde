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
                <h3 class="pb-3">Editar Chamado</h3>
                <form @submit.prevent="handleEditTicket" class="form-ticket w-50 mx-auto">
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
                    <button type="submit" class="btn btn-success w-100">Salvar Alterações</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "@/assets/erick.png";
import axios from "axios";

export default {
    name: "EditTicket",
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
    created() {
        // Carregar os dados do chamado ao montar o componente
        this.loadTicketData();
    },
    methods: {
        async loadTicketData() {
            try {
                // Pegar o ID do chamado a partir dos parâmetros da rota
                const id = this.$route.params.id;

                // Fazer requisição GET para obter os dados do chamado
                const response = await axios.get(`http://localhost:4000/api/chamados/id/${id}`);
                const ticket = response.data;

                // Preencher o formulário com os dados do chamado
                this.titulo = ticket.titulo;
                this.descricao = ticket.descricao;
                this.prioridade = ticket.prioridade;
                this.valorEstimado = ticket.valorEstimado;
                this.status = ticket.status;
                this.responsavel = ticket.responsavel;
                this.categoria = ticket.categoria;
            } catch (error) {
                alert("Erro ao carregar chamado: " + (error.response?.data?.error || error.message));
                this.$router.push('/tickets');
            }
        },
        async handleEditTicket() {
            // Dados do formulário para atualizar o chamado
            const atualizadoChamado = {
                titulo: this.titulo,
                descricao: this.descricao,
                prioridade: this.prioridade,
                valorEstimado: this.valorEstimado,
                status: this.status,
                responsavel: this.responsavel,
                categoria: this.categoria
            };

            try {
                // Pegar o ID do chamado a partir dos parâmetros da rota
                const id = this.$route.params.id;

                // Fazendo a requisição PUT para atualizar o chamado
                await axios.put(`http://localhost:4000/api/chamados/${id}`, atualizadoChamado);
                alert("Chamado atualizado com sucesso!");
                // Redireciona para a página de listagem dos chamados
                this.$router.push('/tickets');
            } catch (error) {
                alert("Erro ao atualizar chamado: " + (error.response?.data?.error || error.message));
            }
        },
        goBack() {
            // Confirmação antes de sair sem salvar
            const confirmExit = confirm("Tem certeza que deseja sair sem salvar as alterações?");
            if (confirmExit) {
                // Redireciona para a página de listagem dos chamados sem salvar as alterações
                this.$router.push('/tickets');
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

.btn-danger {
    background-color: #dc3545;
    border: none;
    color: white;
}

.btn-danger:hover {
    background-color: #c82333;
}
</style>
