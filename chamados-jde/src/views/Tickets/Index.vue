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
                        Novo Chamado
                    </button>
                </div>
                
                <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descrição</th>
                                <th>Prioridade</th>
                                <th>Valor Estimado</th>
                                <th>Status</th>
                                <th>Responsável</th>
                                <th>Categoria</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr v-for="ticket in tickets" :key="ticket._id">
                                <td>{{ ticket.titulo }}</td>
                                <td>{{ ticket.descricao }}</td>
                                <td>{{ ticket.prioridade }}</td>
                                <td>R$ {{ ticket.valorEstimado }}</td>
                                <td>{{ ticket.status }}</td>
                                <td>{{ ticket.responsavel }}</td>
                                <td>{{ ticket.categoria }}</td>
                                <td>
                                    <button @click="editTicket(ticket._id)" class="btn btn-warning">
                                        Editar
                                    </button>

                                    <button @click="deleteTicket(ticket._id)" class="btn btn-danger">
                                        Excluir
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
                const response = await axios.get("http://localhost:4000/api/chamados")
                this.tickets = response.data;
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
</style>
