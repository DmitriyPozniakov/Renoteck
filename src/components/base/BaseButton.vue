<template>
  <button
    :class="[
      isBlue ? 'blue' : 'default',
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: '#a41c35',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isBlue = computed(() => props.background.toLowerCase() === '#2e7bb2')
</script>

<style lang="scss" scoped>
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  color: #fbfbfb;
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 16px;

  padding: 12px 24px;
  border-radius: 12px;
  border: 2px solid;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
  }
}

//Красная по умолчанию
.default {
  background: #a41c35;
  border-color: #a41c35;
}

.default:hover {
  background: #c23a53;
  border-color: #c23a53;
}

.default:active {
  background: #900821;
  border-color: #900821;
}

// Синяя
.blue {
  background: #2e7bb2;
  border-color: #2e7bb2;
}

.blue:hover {
  background: #3c8bcc;
  border-color: #3c8bcc;
}

.blue:active {
  background: #256395;
  border-color: #256395;
}
</style>
