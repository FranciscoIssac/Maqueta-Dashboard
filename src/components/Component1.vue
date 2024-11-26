<!-- este es un componente de apoyo utilizado para el header; este deberia dividirse
en dos componentes de imagenes e inlcuirlo para ser una molecula pero no se hizo de esta manera para seguir el disño del sistema y ser lo mas fiable posible -->
<script setup></script>

<template>
  <div id="component-body">
    <div>
      <img src="../../public/download.png" alt="UASLP Logo" />
    </div>
    <hr />
    <div>
      <img src="../../public/download (1).png" alt="Ingeniería Logo" />
    </div>
  </div>
</template>

<style>
#component-body {
  display: flex;
  width: 100%;
  padding: 20px 25px;
  /* flex: 1; */
}

hr {
  height: 100%;
  width: 1px;
  border-width: 0;
  background-color: white;
  margin: 0 25px;
}
</style>
