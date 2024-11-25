<script setup>
import Button from "../AcceptButton.vue";
</script>

<template>
  <div class="form-container">
    <h2>Ingresar al sistema:</h2>
    <input type="text" placeholder="Usuario" />
    <input type="password" placeholder="Contraseña" />
    <Button></Button>
  </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  & h2 {
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Open Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & input {
    background-color: #a9a9a9;
    height: 1.5rem;
  }
}
</style>
