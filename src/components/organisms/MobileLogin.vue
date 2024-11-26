<!-- Este componente fue creado con la finalidad de poder agregar responsividad a la vista de 
 login ya que cambiaba en su estructura y en su estilo lo que implico crear este organismo a la par con el de MobileLogin -->
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

<!-- en este y en el organismo anterior se utiliza practiacamente el mismo display flex -->
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
