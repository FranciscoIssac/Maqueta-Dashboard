<script setup>
import Button from "./AcceptButton.vue";
</script>

<template>
  <div class="subject-card">
    <div>Materia</div>
    <section>
      Información
      <container class="subject-button">
        <Button></Button>
      </container>
    </section>
  </div>
</template>

<style>
.subject-card {
  display: flex;
  position: relative;
  background-color: #5b7897;
  padding: 0 10px;
  width: 100%;
  min-height: 240px;
  & div {
    overflow: hidden;
    color: #fff;
    text-overflow: ellipsis;
    font-family: "Open Sans";
    font-size: 20px;
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
    font-size: 20px;
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
