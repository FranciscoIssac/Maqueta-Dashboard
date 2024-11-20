<template>
    <button :class="buttonClass"
        :style="{ backgroundColor: backgroundColor, width: width + 'px', height: height + 'px', color: color }">
        <span>{{ text }}</span>
        <slot></slot>
    </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    text: {
        type: String,
        default: "Button",
    },
    backgroundColor: {
        type: String,
        default: "#004A98",
    },
    color: {
        type: String,
        default: "white",
    },
    width: {
        type: Number,
        default: 200,
    },
    height: {
        type: Number,
        default: 50,
    },
    buttonClass: {
        type: String,
        default: "",
    },
});
</script>

<style scoped>
button {
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 12px;
    transition: background-color 0.3s;
}

button:hover {
    filter: brightness(0.9);
}
</style>