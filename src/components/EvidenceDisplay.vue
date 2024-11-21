<template>
    <div class="evidence-card">
        <p class="description">{{ description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    description: {
        type: String,
        default: "Preview",
    },
});
</script>

<style scoped>
.evidence-card {
    display: flex;
    width: 363px;
    height: 359px;
    padding: 94px 124px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border: 1px solid #000;
    background: #FFF;
}

.description {
    color: #000;
    text-align: center;

    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>