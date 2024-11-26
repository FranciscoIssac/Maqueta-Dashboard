<!-- este mas que componente lo consideramos una molecula o un organizmo ya que se deberia de componer de moleculas pero no fue 
dividido de esa manera por el diseño del sistema -->
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
  box-sizing: border-box;
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
  flex: 1; /* Supose to allow the div grow */
}
img {
  max-width: 100%;
  height: auto;
  flex: 1;
}

/* apartir de aqui se definio un mediaquery esto debido a que el texo se comenzaba a hacer muy
grande y se opto por utilizar valores de tipo fixed como el diseño del sistema */
@media (max-width: 768px) {
  #container {
    height: 59.241px;
  }
  #portal-profesor > h2 {
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}
</style>
