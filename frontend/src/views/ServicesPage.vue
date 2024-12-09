<template>
    <div>
      <section class="services py-5">
        <div class="container">
          <h2 class="text-center mb-4">Nuestros Servicios</h2>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="service in services" :key="service.id">
              <div class="card h-100 text-center">
                <img :src="service.image" class="card-img-top" :alt="service.title">
                <div class="card-body">
                  <h5 class="card-title">{{ service.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { id: 1, title: "Papeleria Sustentable", image: "/PapeleríaSustentableIcono.png" },
          { id: 2, title: "Talleres y Proyectos", image: "/TalleresyProyectosIcono.png" },
          { id: 3, title: "Cartertas y Accesorios", image: "/TiendaIcono.png" },
        ],
      };
    },
  };
  </script>
  