<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      inputData: "",
    };
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await fetch("http://localhost:5000/api/hello");
        const data = await response.json();
        this.message = data.message;
      } catch (error) {
        console.error("Error obteniendo mensaje:", error);
      }
    },
    async sendData() {
      try {
        const response = await fetch("http://localhost:5000/api/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: this.inputData }),
        });
        const result = await response.json();
        console.log(result);
        alert(result.message);
      } catch (error) {
        console.error("Error enviando datos:", error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>