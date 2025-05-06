<template>
  <a>
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
a {
  height: 24px;
  width: 24px;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: #a41c35;
  cursor: pointer;
}
</style>