<template>
    <div class="text-area" :style="{ height: height + 'px' }">
        <p class="text">{{ text }}</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    height: {
        type: Number,
        default: 111,
    },
    text: {
        type: String,
        default: "Aquí va tu texto.",
    },
});
</script>

<style scoped>
.text-area {
    display: flex;
    width: 457px;
    height: 108px;
    padding: 8px 4px;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    border: 1px solid var(--TextBox, rgba(131, 131, 131, 0.25));
    background: var(--TextBox, rgba(131, 131, 131, 0.25));
}


.text {
    color: var(--EditableText, rgba(131, 131, 131, 0.50));
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>