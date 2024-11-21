<template>
    <input type="text" :placeholder="placeholder" class="custom-input" />
</template>

<script setup>
defineProps({
    placeholder: {
        type: String,
        default: "Escribe aquí...",
    },
});

</script>

<style scoped>
.custom-input {
    display: flex;
    width: 457px;
    height: 44px;
    padding: 8px 4px;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--TextBox, rgba(131, 131, 131, 0.25));
    background: var(--TextBox, rgba(131, 131, 131, 0.25));


    color: var(--EditableText, rgba(131, 131, 131, 0.50));

    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>