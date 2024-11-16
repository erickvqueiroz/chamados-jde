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
                    <a href="new-ticket.html" class="btn btn-primary">
                        Novo Chamado
                    </a>
                </div>
                
                <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>Título</th>
                                <th>Páginas</th>
                                <th>Gêneros</th>
                                <th>Avaliação</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>Teste</td>
                                <td>Livro 1</td>
                                <td>23</td>
                                <td>Ação, Aventura</td>
                                <td>5</td>
                                <td>
                                    <a href="#" class="btn btn-warning">
                                        Editar
                                    </a>
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

export default {
    name: "App",
    data() {
        return {
            email: "",
            password: "",
            logoPath: logo
        };
    },
    methods: {
        handleLogin() {
            if (this.email === 'teste@jderick.com' && this.password === '1234567') {
                alert("Logou!");
            } else {
                alert("Credenciais incorretas!");
            }
        },
    },
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