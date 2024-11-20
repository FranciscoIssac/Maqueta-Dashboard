<template>
    <button class="cancel-button">Cancelar</button>
</template>

<script setup>
</script>

<style scoped>
.cancel-button {
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: #00B2E3;
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

.cancel-button:hover {
    background-color: #0099cc;
}
</style>