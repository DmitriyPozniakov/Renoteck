<template>
    <main>
        <about-us></about-us>
        <our-services></our-services>
        <our-projects></our-projects>
        <roofing-section></roofing-section>
        <metal-roof></metal-roof>
    </main>
</template>

<script setup>
import AboutUs from '../sections/AboutUs.vue';
import OurServices from '../sections/OurServices.vue';
import OurProjects from '../sections/OurProjects.vue';
import RoofingSection from '../sections/RoofingSection.vue';
import MetalRoof from '../sections/MetalRoof.vue';
</script>

<style lang="scss" scoped>
main {
    background: #1C1C1C;
}
</style>