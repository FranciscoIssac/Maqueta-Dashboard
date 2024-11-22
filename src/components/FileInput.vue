<template>
    <div class="file-input">
        <p class="text">{{ text }}</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    text: {
        type: String,
        default: "Ingresa el archivo aquí",
    },
});
</script>

<style scoped>
.file-input {
    display: flex;
    width: 457px;
    height: 66px;
    padding: 8px 4px;
    align-items: flex-start;
    border: 1px solid var(--TextBox, rgba(131, 131, 131, 0.25));
    background: rgba(255, 255, 255, 0.50);
}


.text {
    color: #838383;
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>