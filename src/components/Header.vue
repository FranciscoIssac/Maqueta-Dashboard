<script setup>
import Component1 from "./Component1.vue";
</script>

<template>
  <div id="container">
    <Component1></Component1>
    <div id="portal-profesor">
      <h2>PORTAL PROFESOR</h2>
    </div>
    <img src="../../public/image 1.png" alt="" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#container {
  display: flex;
  background-color: #004a98;
  margin: 0;
  padding: 0;
}
#portal-profesor {
  display: flex;
  background-color: #00b2e3;
  color: white;
  align-items: center;
  padding: 0 20px;
}
</style>
