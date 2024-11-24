<template>
    <footer class="bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <!-- Sección de navegación -->
                <div class="col-md-6 mb-3">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <router-link class="nav-link text-white" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link text-white" to="/store">Tienda</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link text-white" to="/services">Servicios</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link text-white" to="/news">Noticias</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 mb-3">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <router-link class="nav-link text-white" to="/blog">Blog</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link text-white" to="/about">Nosotros</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link text-white" to="/contact">Contacto</router-link>
                        </li>
                    </ul>
                </div>
            </div>

        <!-- Sección de derechos reservados -->
        <div class="text-center mt-3">
            <p>&copy; 2024 Zicaropapel. Todos los derechos reservados.</p>
        </div>
        </div>
    </footer>
</template>

<style scoped>

</style>

<!--
Lo mismo si queremos meterle cosas, es con un style, meterle links con el <router-link>
-->