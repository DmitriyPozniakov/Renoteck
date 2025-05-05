<template>
  <button :class="{active: isActive}" @click="setActive">
    <slot></slot>
  </button>
</template>

<script setup>
import {ref} from 'vue';

const isActive = ref(false);

const setActive = function() {
    isActive.value = !isActive.value
}

</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  border-radius: 36px;
  background: #262626;
  color: #fff;

  font-size: 1.6rem;
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #A3A3A3;
  cursor: pointer;

  &.active {
    background: #a41c35;
    color: #fff;
  }
}
</style>