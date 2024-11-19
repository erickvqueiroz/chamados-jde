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
                    <h3 class="m-0">Editar Chamado</h3>
                    <button @click="goBack" class="btn btn-danger d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="icon-btn">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span class="ms-2">Voltar</span>
                    </button>
                </div>

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
                    <div class="d-flex justify-content-between mt-4">
                        <button type="button" @click="deleteTicket($route.params.id)"
                            class="btn btn-danger d-flex align-items-center justify-content-center w-48">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="icon-btn">
                                <path fill-rule="evenodd"
                                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="ms-2">Excluir</span>
                        </button>
                        <button type="submit"
                            class="btn btn-success d-flex align-items-center justify-content-center w-48">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="icon-btn">
                                <path fill-rule="evenodd"
                                    d="M4.293 9.293a1 1 0 0 1 1.414 0L10 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="ms-2">Salvar</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "@/assets/erick.png";

export default {
    name: "EditTicket",
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
    created() {
        this.loadTicketData();
    },
    methods: {
        async loadTicketData() {
            try {
                const id = this.$route.params.id;

                const response = await fetch(`http://localhost:4000/api/chamados/id/${id}`);
                const ticket = await response.json();

                this.titulo = ticket.titulo;
                this.descricao = ticket.descricao;
                this.prioridade = ticket.prioridade;
                this.responsavel = ticket.responsavel;
                this.categoria = ticket.categoria;
                this.departamento = ticket.departamento;
            } catch (error) {
                alert("Erro ao carregar chamado.");
                this.goBack();
            }
        },
        async handleEditTicket() {
            const atualizadoChamado = {
                titulo: this.titulo,
                descricao: this.descricao,
                prioridade: this.prioridade,
                responsavel: this.responsavel,
                categoria: this.categoria,
                departamento: this.departamento,
            };

            try {
                const id = this.$route.params.id;

                await fetch(`http://localhost:4000/api/chamados/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(atualizadoChamado),
                });
                alert("Chamado atualizado com sucesso!");
                this.$router.push("/tickets");
            } catch (error) {
                alert("Erro ao atualizar chamado.");
            }
        },
        async deleteTicket(ticketId) {
            if (confirm("Tem certeza que deseja excluir esse ticket?")) {
                try {
                    await fetch(`http://localhost:4000/api/chamados/${ticketId}`, {
                        method: "DELETE",
                    });
                    alert("Chamado excluído com sucesso!");
                    this.$router.push("/tickets");
                } catch (error) {
                    alert("Erro ao excluir chamado.");
                }
            }
        },
        goBack() {
            this.$router.push("/tickets");
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

.btn-danger,
.btn-success {
    height: 45px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
}

.icon-btn {
    width: 20px;
    height: 20px;
}
</style>
