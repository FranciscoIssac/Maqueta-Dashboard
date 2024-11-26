<template>
    <button @click="handleClick" :class="['custom-button', variantClass]" :style="{ width: width }" :disabled="disabled"
        @mouseover="isHover = true" @mouseleave="isHover = false">
        <slot />
    </button>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const emit = defineEmits(['click'])

const handleClick = () => {
    emit('click')
}

const props = defineProps({
    variant: {
        type: String,
        default: 'default',
    },
    width: {
        type: String,
        default: '200px'
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const isHover = ref(false);

const variantClass = computed(() => {
    if (props.disabled) {
        return props.variant === 'alternative' ? 'alt-disabled' : 'default-disabled';
    } else if (isHover.value) {
        return props.variant === 'alternative' ? 'alt-hover' : 'default-hover';
    } else {
        return props.variant === 'alternative' ? 'alt' : 'default';
    }
});
</script>

<style scoped>
.custom-button {
    color: #FFF;
    text-align: center;

    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 10px 20px;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.default {
    background-color: #004A98;
}

.default-hover {
    background-color: #002043;
}

.default-disabled {
    background-color: #5B7897;
    cursor: not-allowed;
}

.alt {
    background-color: #00B2E3;
}

.alt-hover {
    background-color: #005971;
}

.alt-disabled {
    background-color: #9BD4E4;
    cursor: not-allowed;
}
</style>
