<script setup>
import Counter from "./components/Counter.vue";
import Lista from "./components/ListReactive.vue";
import Card from "./components/Card.vue";
</script>

<!-- <template>
  <Counter></Counter>
</template> -->

<!-- <template>
  <Lista></Lista>
</template> -->

<template>
  <Card>
    <template #title>Welcome</template>
    <template #description>This is a simple card for example.</template>
  </Card>
</template>

<style scoped></style>
