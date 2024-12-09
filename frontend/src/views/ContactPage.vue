<template>
    <div>
      <section class="contact py-5">
        <div class="container">
          <h2 class="text-center mb-4">Mantengamos el contacto</h2>
          <p class="text-center mb-5">
            Completa el formulario y te contactaremos a la brevedad.
            Muchas Gracias
          </p>
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6 mb-3">
                <input type="text" class="form-control" placeholder="Nombre" v-model="form.name" required>
              </div>
              <div class="col-md-6 mb-3">
                <input type="email" class="form-control" placeholder="Email" v-model="form.email" required>
              </div>
              <div class="col-12 mb-3">
                <textarea class="form-control" rows="5" placeholder="Mensaje" v-model="form.message" required></textarea>
              </div>
              <div class="col-md-6 mb-3">
                <input type="text" class="form-control" placeholder="Telefono" v-model="form.fono" required>
              </div>
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          fono: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        console.log("Form submitted:", this.form);
        alert("Thank you for contacting us!");
      },
    },
  };
  </script>
  