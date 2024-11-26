<!-- este componente al igual que el de aceptar es estatico, es decir, no puede ser cambiado el texto ni tampoco su estilo -->
<template>
  <button class="cancel-button">Cancelar</button>
</template>

<script setup></script>

<style scoped>
.cancel-button {
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: #00b2e3;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  width: 206px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.cancel-button:hover {
  background-color: #0099cc;
}
</style>
