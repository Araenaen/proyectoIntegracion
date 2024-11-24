<template>
    <div>
        <!-- Carrusel -->
        <section class="carousel-container mb-5">
            <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="/ZicaroCarrusel1.png" class="d-block w-100" alt="Slide 1">
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div class="carousel-item">
                <img src="/ZicaroCarrusel2.png" class="d-block w-100" alt="Slide 2">
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div class="carousel-item">
                <img src="/ZicaroCarrusel3.png" class="d-block w-100" alt="Slide 3">
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
            </div>
        </section>
  
        <!-- Sección con 3 tarjetas -->
        <section class="features py-5 bg-light">
            <div class="container">
            <h2 class="text-center mb-5">Explora nuestras secciones</h2>
                <div class="row">
                    <!-- Tienda -->
                    <div class="col-md-4 mb-4">
                    <div class="card h-100 text-center">
                        <img src="/TiendaIcono.png" class="card-img-top" alt="Tienda">
                        <div class="card-body">
                        <h5 class="card-title">Tienda</h5>
                        <p class="card-text">Descubre nuestros productos reciclables y sustentables.</p>
                        <router-link class="btn btn-primary" to="/store">Ir a la Tienda</router-link>
                        </div>
                    </div>
                    </div>
                    <!-- Talleres y Proyectos -->
                    <div class="col-md-4 mb-4">
                    <div class="card h-100 text-center">
                        <img src="/TalleresyProyectosIcono.png" class="card-img-top" alt="Talleres y Proyectos">
                        <div class="card-body">
                        <h5 class="card-title">Talleres y Proyectos</h5>
                        <p class="card-text">Participa en actividades creativas y aprende nuevas habilidades.</p>
                        <router-link class="btn btn-primary" to="/workshops">Ver Talleres</router-link>
                        </div>
                    </div>
                    </div>
                    <!-- Papelería Sustentable -->
                    <div class="col-md-4 mb-4">
                    <div class="card h-100 text-center">
                        <img src="/PapeleríaSustentableIcono.png" class="card-img-top" alt="Papelería Sustentable">
                        <div class="card-body">
                        <h5 class="card-title">Papelería Sustentable</h5>
                        <p class="card-text">Conoce nuestros materiales ecológicos y personalizados.</p>
                        <router-link class="btn btn-primary" to="/stationery">Ver Papelería</router-link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Sección de Noticias -->
        <section class="news py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5">Últimas Noticias</h2>
                <div class="row">
                <!-- Noticia 1 -->
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                    <img src="/ZicaroDisca.jpeg" class="card-img-top" alt="ZicaropapelApoya">
                    <div class="card-body">
                        <h5 class="card-title">Zicaropapel apoyando la discapacidad</h5>
                        <p class="card-text">ZicaroPapel y Fundación Mar de Sonrisas realizaron un taller de reutilización, en el cual los usuarios y familias de la fundación aprendieron las técnicas de embellecimiento de muros con papel de revistas y recortes de fotografías.</p>
                        <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                    </div>
                </div>
                <!-- Noticia 2 -->
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                    <img src="/ZicaroUnido.jpeg" class="card-img-top" alt="ZicaroUnido">
                    <div class="card-body">
                        <h5 class="card-title">Zicaropapel y acalis coventry se unen</h5>
                        <p class="card-text">En una alianza pensada para los residentes de Acalis Coventry en Chile, se realizaron los primeros talleres de reutilización y reciclaje, los cuales tienen objetivos específicos para contribuir al bienestar de los adultos mayores que aquí…</p>
                        <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                    </div>
                </div>
                <!-- Noticia 3 -->
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                    <img src="/ZicaroGladiador.jpg" class="card-img-top" alt="ZicaroGladiador">
                    <div class="card-body">
                        <h5 class="card-title">Visitamos a Gladiadores</h5>
                        <p class="card-text">Gracias a Radio Touch por invitarnos a su programa Gladiadores!! Estamos felices y agradecidas de la posibilidad de mostrar nuestro emprendimiento!! Gracias a su conductora Carolina Barbato!!! Te pasaste!!</p>
                        <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<style scoped>
.carousel-container img {
    max-height: 600px;
    object-fit: cover;
}
  
.card {
    border: none;
    transition: transform 0.3s;
}
  
.card:hover {
    transform: scale(1.05);
}
</style>