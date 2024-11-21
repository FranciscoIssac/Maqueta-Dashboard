<script setup></script>

<template>
  <div class="tostframe-container">
    <h2>Notification</h2>
    <h3>You just pressed the "Toast" button!</h3>
  </div>
</template>

<style>
.tostframe-container {
  background: rgba(154, 132, 255, 0.5);
  max-width: 400px;
  width: 400px;
  padding: 0 27px;
  & h2 {
    color: #000;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 20px;
    padding-bottom: 36px;
  }

  & h3 {
    color: #000;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 42px;
  }
}
</style>
