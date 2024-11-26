<!-- Este componente fue creado con la finalidad de poder agregar responsividad a la vista de 
 login ya que cambiaba en su estructura y en su estilo lo que implico crear este organismo a la par con el de MobileLogin -->
<script setup>
import Button from "../AcceptButton.vue";
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
      <!-- se llama al componente botton el cual fue creado apartir del diseño del sistema -->
      <Button></Button>
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
