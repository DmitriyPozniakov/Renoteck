<template>
  <div class="advantage-item">
    <img :src="icon" alt="" />
    <div class="text">
      <h3 class="value">{{ value }}</h3>
      <p class="label">{{ label }}</p>
    </div>
  </div>
</template>
  
  <script setup>
import { defineProps } from "vue";
defineProps({
  icon: String,
  value: String,
  label: String,
});
</script>

<style lang="scss" scoped>
.advantage-item {
  display: flex;
  gap: 48px;
  flex: 1 0 0;

  padding: 32px;
  border-radius: 12px;
  background: #292929;
}

.text {
  display: flex;
  flex-direction: column;

  .value {
    color: #a41c35;
    font-family: 'Inter-Medium';
    font-size: clamp(1.6rem, 6vw, 3.2rem);
    margin-bottom: 5px;
  }

  .label {
    color: #fbfbfb;
    font-family: 'Inter-Medium';
    font-size: clamp(1.2rem, 6vw, 2.4em);
  }
}
</style>