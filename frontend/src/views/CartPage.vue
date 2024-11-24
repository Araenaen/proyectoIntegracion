<template>
    <div class="cart-page container py-5">
      <h1 class="text-center mb-4">Carrito de Compras</h1>
  
      <!-- Si el carrito está vacío -->
      <div v-if="cartItems.length === 0" class="text-center">
        <p class="text-muted">Tu carrito está vacío.</p>
        <router-link to="/store" class="btn btn-primary">Volver a la Tienda</router-link>
      </div>
  
      <!-- Lista de productos en el carrito -->
      <div v-else>
        <div class="row mb-4">
          <div class="col-md-8">
            <ul class="list-group">
              <li v-for="(item, index) in cartItems" :key="index" class="list-group-item d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img :src="item.image" alt="Producto" class="img-thumbnail me-3" style="width: 80px; height: 80px; object-fit: cover;">
                  <div>
                    <h5 class="mb-1">{{ item.title }}</h5>
                    <p class="mb-1 text-muted">{{ item.description }}</p>
                    <p class="text-success fw-bold mb-0">$ {{ item.price }}</p>
                  </div>
                </div>
                <div>
                  <button class="btn btn-outline-danger btn-sm" @click="removeFromCart(index)">
                    Eliminar
                  </button>
                </div>
              </li>
            </ul>
          </div>
  
          <!-- Resumen del total -->
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Resumen</h5>
                <p class="card-text">Productos: {{ cartItems.length }}</p>
                <p class="card-text">Total: <span class="fw-bold text-success">$ {{ totalPrice }}</span></p>
                <button class="btn btn-primary w-100" @click="checkout">
                  Proceder al Pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Productos simulados en el carrito
        cartItems: [
          {
            title: "Aros Reciclados",
            description: "Unos Aros reciclados realizados por artesanas de Zicaropapel.",
            price: 19990,
            image: "/images/Aros1.jpg"
          },
          {
            title: "Aros Reciclados",
            description: "Unos Aros reciclados realizados por artesanas de Zicaropapel.",
            price: 29990,
            image: "/images/Aros2.jpg"
          }
        ]
      };
    },
    computed: {
      // Calcula el precio total de los productos en el carrito
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
      }
    },
    methods: {
      // Elimina un producto del carrito
      removeFromCart(index) {
        this.cartItems.splice(index, 1);
      },
      // Acción al presionar "Proceder al Pago"
      checkout() {
        alert("Redirigiendo a la pasarela de pago...");
        // Implementar la lógica de pago aquí
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-page {
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .list-group-item {
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .img-thumbnail {
    border: none;
    background-color: #f5f5f5;
  }
  
  .card {
    border-radius: 8px;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .btn-primary {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-primary:hover {
    background-color: #218838;
    border-color: #218838;
  }
  </style>