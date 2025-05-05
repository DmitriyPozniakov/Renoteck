<template>
    <div class="floating-element" :style="{backgroundColor: background}">
        <slot></slot>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
defineProps({
    background: {
        type: String,
        default: '#2E7BB2'
    }
})
</script>

<style lang="scss" scoped>
.floating-element {
    color: #fbfbfb;
    font-family: 'Inter-Medium';
    font-size: 1.6rem;
    padding: 10px;
    border-radius: 36px;
    backdrop-filter: blur(26px);
}
</style>