<script setup></script>

<template>
  <div class="subject-header">
    <h2><slot name="materia"></slot></h2>
    <h3><slot name="descripcion"></slot></h3>
  </div>
</template>

<style>
.subject-header {
  display: flex;
  position: relative;
  align-items: center;
  background-color: #004a98;
  padding: 0 10px;
  width: 100%;
  & h2 {
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
    padding: 0 8px;
  }
  & h3 {
    color: #fff;
    font-family: "Open Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 66%;
    margin-left: 10px;
    padding: 0 8px;
  }
}
</style>
