<template>
    <button class="evaluate-button">Evaluar
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector 5" d="M0.5 0.5L11.5 11.5L0.5 22.5" stroke="black"/>
        </svg>
    </button>
</template>

<script setup>
</script>

<style scoped>
.evaluate-button {
    display: flex;
    width: 191px;
    padding: 9px 23px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: #ffc600;
    color: black;
    border: none;
    cursor: pointer;
}

.evaluate-button:hover {
    background-color: #d4ac0d;
}
</style>
