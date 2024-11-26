<!-- el footer se hizo como componente como venia en el diseño del sistema, 
asi mismo se creo para que reciba como parametro un texto o tenga  un espacio para que desde el componente padre se pudiera colocar texto -->
<script setup></script>

<template>
  <div class="footer-container">
    <div class="footer-line"></div>
    <div class="footer-body">
      <h3><slot name="text"></slot></h3>
    </div>
  </div>
</template>

<style>
.footer-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  & .footer-line {
    height: 23px;
    background-color: #00b2e3;
  }
  & .footer-body {
    height: 110px;
    background-color: #004a98;
    & h3 {
      margin: 10px;
      color: var(--TextNormal, #fff);
      font-family: "Open Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
