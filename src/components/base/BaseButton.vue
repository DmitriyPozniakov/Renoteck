<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  cursor: pointer;

  color:#fbfbfb;
  font-family: 'Inter-Medium';
  font-size: 16px;

  padding: 12px 24px;
  border-radius: 12px;
  border: 2px solid #a41c35;
  background: #a41c35;

  &:hover {
    background: #c23a53;
    border: 2px solid #c23a53;
  }

  &:active {
    background: #900821;
    border: 2px solid #900821;
  }

  &:disabled {
    opacity: 0.5;
    background: #a41c35;
    border: 2px solid #a41c35;
  }
}
</style>