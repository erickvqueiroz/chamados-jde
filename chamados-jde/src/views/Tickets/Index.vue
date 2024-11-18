<template>
    <div>
        <div class="h-100">
            <nav class="navbar navbar-expand-sm navbar-dark bg-custom">
                <div class="container-fluid px-4 py-2 justify-content-center">
                    <img :src="logoPath" alt="Logo JDErick" class="logo-img" />
                </div>
            </nav>

            <div class="px-4 py-3">
                <div class="d-flex justify-content-between pb-3">
                    <button @click="createTicket()" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
                        </svg>
                        Novo Chamado
                    </button>
                    <button @click="logout()" class="btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 20px">
                            <path fill-rule="evenodd" d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z" clip-rule="evenodd" />
                        </svg>
                        Sair
                    </button>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nº Chamado</th>
                                <th>Título</th>
                                <th>Prioridade</th>
                                <th>Status</th>
                                <th>Responsável</th>
                                <th>Categoria</th>
                                <th>Departamento</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ticket in tickets" :key="ticket._id">
                                <td>{{ ticket.codigo }}</td>
                                <td>{{ ticket.titulo }}</td>
                                <td>{{ prioridadeDescricao(ticket.prioridade) }}</td>
                                <td>{{ ticket.status }}</td>
                                <td>{{ ticket.responsavel }}</td>
                                <td>{{ ticket.categoria }}</td>
                                <td>{{ ticket.departamento }}</td>
                                <td>
                                    <button @click="editTicket(ticket._id)" class="btn btn-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 20px">
                                            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                                        </svg>
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "@/assets/erick.png";
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            tickets: [],
            logoPath: logo
        };
    },
    methods: {
        async fetchTickets() {
            try {
                const response = await fetch("http://localhost:4000/api/chamados", {
                    method: "GET"
                });
                this.tickets = await response.json();
            } catch (error) {
                alert('API fora do ar...');
            }
        },
        createTicket() {
            this.$router.push('/tickets/create');
        },
        editTicket(ticketId) {
            this.$router.push(`/tickets/${ticketId}/edit`);
        },
        async deleteTicket(ticketId) {
            if (confirm("Tem certeza que deseja excluir esse ticket?")) {
                try {
                    await axios.delete(`http://localhost:4000/api/chamados/${ticketId}`);
                    this.fetchTickets(); // Atualiza a lista de tickets após a exclusão
                } catch (error) {
                    console.error('Erro ao excluir chamado:', error.response?.data || error.message);
                    alert('Erro ao excluir o chamado. Tente novamente.');
                }
            }
        },
        logout() {
            // Redireciona o usuário para a página de login
            this.$router.push('/');
        },
        prioridadeDescricao(valor) {
            switch (valor) {
                case 1:
                    return 'Baixo';
                case 2:
                    return 'Médio';
                case 3:
                    return 'Alto';
                case 4:
                    return 'Muito Alto';
                default:
                    return 'Prioridade não definida corretamente';
            }
        }
    },
    mounted() {
        this.fetchTickets();
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

.btn-danger {
    margin-left: 10px;
    /* Para dar um pequeno espaço ao lado do botão "Novo Chamado" */
}
</style>
