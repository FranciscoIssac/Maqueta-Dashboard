<script setup>
import Button from "./AcceptButton.vue";
</script>

<template>
  <div class="modalframe-container">
    <h2>WARNING!</h2>
    <h3>
      Everything this modal says it´s useless for now. By clicking OK below, you
      agree to sell your soul
    </h3>
    <div class="modalframe-buttons">
      <Button></Button>
      <Button></Button>
    </div>
  </div>
</template>

<style>
.modalframe-container {
  background-color: #dcc8c8;

  & h2 {
    color: #000;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 37px;
    padding-left: 52px;
    padding-right: 52px;
    padding-bottom: 20px;
  }
  & h3 {
    color: #000;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 52px;
    padding-right: 52px;
  }
}
.modalframe-buttons {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  padding-top: 40px;
}
</style>
