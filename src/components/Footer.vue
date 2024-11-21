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
      font-family: "Open Sans";
      margin: 10px;
    }
  }
}
</style>
