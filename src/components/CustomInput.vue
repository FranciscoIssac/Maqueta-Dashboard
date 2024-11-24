<template>
    <textarea type="text" :placeholder="placeholder" class="custom-input" />
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
.custom-input::placeholder {
    color: #838383;
}

.custom-input {
    resize: none;
    display: flex;
    width: 457px;
    height: 50px;
    padding: 8px 4px;
    align-items: flex-start;
    vertical-align: top;
    gap: 10px;
    flex-shrink: 0;
    border: 1px solid var(--TextBox, rgba(131, 131, 131, 0.25));
    background: rgba(255, 255, 255, 0.50);


    color: #838383;

    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>