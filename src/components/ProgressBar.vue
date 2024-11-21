<template>
    <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        <div class="progress-text">
            {{ progress + '%' }}
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    progress: {
        type: Number,
        default: 0
    },
});
</script>

<style scoped>
.progress-container {
    width: 720px;
    position: relative;
    display: flex;
    align-items: center;
    align-self: stretch;
    background: var(--Primary3, #5B7897);
    overflow: hidden;


    color: #FFF;

    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.progress-bar {
    height: 26px;
    background: var(--Primary1, #004A98);
}

.progress-text {
    position: absolute;
    right: 4px;
}
</style>