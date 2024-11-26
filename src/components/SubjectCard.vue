<!-- dentro de este componente se tuvo que definir directamente el tamaño de un botton de mala manera pero con un tamaño fixed 
tambien porque asi venia definido en figma -->
<script setup>
import Button from "./CustomButton.vue";
</script>

<template>
  <div class="subject-card">
    <div><slot name="materia"></slot></div>
    <section>
      <slot name="descripcion"></slot>
      <container class="subject-button">
        <Button width="184.608px">Ver más</Button>
      </container>
    </section>
  </div>
</template>

<style>
/* para hacerlo mas responsivo se opto por usar tamaños relativos como el .em y el .rem */
.subject-card {
  display: flex;
  position: relative;
  background-color: #5b7897;
  padding: 0 10px;
  width: 100%;
  min-height: 141px;
  & div {
    overflow: hidden;
    color: #fff;
    text-overflow: ellipsis;
    font-family: "Open Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 33%;
    border-right: 1px solid white;
    padding: 8px;
  }
  & section {
    color: #fff;
    font-family: "Open Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 66%;
    margin-left: 10px;
    padding: 8px;
    & .subject-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>
