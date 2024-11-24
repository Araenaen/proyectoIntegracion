<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light m-0 p-0">
            <div class="container">
                <!-- Icono -->
                <router-link class="navbar-brand" to="/">
                    <img src="/logo.png" alt="Logo" width="64" height="64" class="d-inline-block align-text-top">
                </router-link>

                <!-- Botón de colapso para móviles -->
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Enlaces de navegación -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        <router-link class="nav-link" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/store">Tienda</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/services">Servicios</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/news">Noticias</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/blog">Blog</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/about">Nosotros</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contacto</router-link>
                        </li>
                    </ul>

                    <!-- Barra de búsqueda -->
                    <form class="d-flex">
                        <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Buscar..."
                        aria-label="Search"
                        >
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>

                    <!-- Icono de carrito de compras -->
                    <router-link class="btn btn-outline-primary" to="/cart">
                        <i class="bi bi-cart"></i> Carrito <span class="badge bg-danger" v-if="cartItems">{{ cartItems }}</span>
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            cartItems: 0 // Simulación de elementos en el carrito (puedes enlazarlo a tu lógica de carrito real)
        };
    }
};
</script>

<style scoped>
.navbar {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

</style>