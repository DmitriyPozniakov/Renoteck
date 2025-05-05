<template>
    <header>
        <the-navigation></the-navigation>
        <hero-section></hero-section>
    </header>
</template>

<script setup>
import TheNavigation from "./TheNavigation.vue";
import HeroSection from "../HeroSection.vue"
</script>

<style lang="scss" scoped>
header {
    padding: 12px 32px 24px 32px;
    background: #111;

    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>