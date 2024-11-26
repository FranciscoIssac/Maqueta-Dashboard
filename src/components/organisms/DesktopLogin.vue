<script setup>
import Button from "../AcceptButton.vue";
import { ref } from "vue";

const goToGoodMainPage = (event) => {
  event.preventDefault();
  window.location.href = "/goodmainpage.html";
};
</script>

<template>
  <div id="content">
    <h2>¡Bienvenido!</h2>
    <div id="text">
      Este sistema permite a los profesores de la Facultad de ingeniería manejar
      los datos de sus materias con mayor facilidad
    </div>
    <div id="button">
      <h2>Ingresa al sistema</h2>
      <Button @click="goToGoodMainPage"></Button>
    </div>
  </div>
</template>

<style>
#content {
  flex: 1;
  display: grid;
  grid-template-columns: 2, 1fr;
  grid-template-rows: repeat(2, 1fr);
  margin: 2em 25em;
  & h2 {
    grid-row: 1 / span 1;
    color: #000;
    font-family: "Open Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & #text {
    grid-row: 2 / span 1;
    color: #000;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & #button {
    grid-row: 1 / span 2;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
