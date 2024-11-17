<script setup>
import { ref } from "vue";
const contador = ref(0);
const increment = () => {
  contador.value++;
};
const decrement = () => {
  contador.value--;
};
</script>

<template>
  <button @click="decrement">Decrement</button>
  <h1>{{ contador }}</h1>
  <button @click="increment">Increment</button>
</template>

<style scoped>
button {
  background-color: gray;
}
</style>
