<template>
    <div class="store container py-5">
        <h1 class="text-center mb-4">Nuestra Tienda</h1>
        <div class="row">
            <!-- Card 1 -->
            <div class="col-md-4 mb-4" v-for="(item, index) in products" :key="index">
                <div class="card">
                    <img :src="item.image" class="card-img-top" :alt="item.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                        <p class="text-success fw-bold">$ {{ item.price }}</p>
                        <button class="btn btn-primary" @click="addToCart(item)">Añadir al Carrito</button>
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
            products: [
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
                },
                {
                    title: "Aros Reciclados",
                    description: "Unos Aros reciclados realizados por artesanas de Zicaropapel.",
                    price: 14990,
                    image: "/images/Aros3.jpg"
                }
            ]
        };
    },
    methods: {
        addToCart(item) {
            alert(`${item.title} añadido al carrito`);
            // Lógica para añadir el producto al carrito
        }
    }
};
</script>