<template>
    <button class="accept-button">Aceptar</button>
</template>

<script setup>
</script>

<style scoped>
.accept-button {
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: #004A98;
    color: white;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    display: flex;
    width: 206px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}

.accept-button:hover {
    background-color: #00254d;
}
</style>