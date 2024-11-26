<!-- este componente de igual forma es estatico -->
<template>
  <button class="download-button">Descargar</button>
</template>

<script setup></script>

<style scoped>
.download-button {
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  width: 200px;
  height: 50px;
}

.download-button:hover {
  background-color: #004a98;
}
</style>
