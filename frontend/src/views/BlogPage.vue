<template>
    <div>
      <section class="blog py-5">
        <div class="container">
          <h2 class="text-center mb-5">Blog</h2>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="post in posts" :key="post.id">
              <div class="card h-100">
                <img :src="post.image" class="card-img-top" :alt="post.title">
                <div class="card-body">
                  <h5 class="card-title">{{ post.title }}</h5>
                  <p class="card-text">{{ post.excerpt }}</p>
                  <router-link :to="`/blog/${post.id}`" class="btn btn-primary">Leer más</router-link>
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
        posts: [
          { id: 1, title: "ZicaroPapel apoyando la discapacidad ", excerpt: 'ZicaroPapel y Fundación Mar de Sonrisas realizaron un taller de reutilización, en el cual los usuarios y familias de la fundación aprendieron las técnicas de embellecimiento de muros con papel de revistas y recortes de fotografías...', image: "/blog1.jpeg" },
          { id: 2, title: "ZicaroPapel y Acalis Coventry se unen ", excerpt: "En una alianza pensada para los residentes de Acalis Coventry en Chile, se realizaron los primeros talleres de reutilización y reciclaje, los cuales tienen objetivos específicos para contribuir al bienestar de los adultos mayores que aquí residen.", image: "/blog2.jpeg" },
          { id: 3, title: "Vistamos a Gladiadores ", excerpt: "Gracias a Radio Touch por invitarnos a su programa Gladiadores!! Estamos felices y agradecidas de la posibilidad de mostrar nuestro emprendimiento!! Gracias a su conductora Carolina Barbato!!! Te pasaste!!...", image: "/blog3.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .blog img {
    max-height: 250px;
    object-fit: cover;
  }
  </style>
  