<template>
    <div class="layout">
      <Header />
      <main class="content">
        <router-view />  <!-- Aquí se cargarán las vistas segun la ruta -->
      </main>
      <Footer />
    </div>
</template>
  
<script>
import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";

export default {
components: {
    Header,
    Footer,
},
};
</script>

<style>
</style>