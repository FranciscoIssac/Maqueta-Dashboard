<template>
    <textarea class="text-area" :style="{ height: height + 'px' }" :placeholder="text"></textarea>
</template>

<script setup>
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
    padding: 8px 4px;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid var(--TextBox, rgba(131, 131, 131, 0.25));
    background: var(--TextBox, rgba(131, 131, 131, 0.25));
    resize: none;
    
    color: var(--EditableText, rgba(131, 131, 131, 0.50));
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.text-area::placeholder {
    color: var(--EditableText, rgba(131, 131, 131, 0.50));
}
</style>