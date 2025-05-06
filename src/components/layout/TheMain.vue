<template>
    <main>
        <about-us></about-us>
        <our-services></our-services>
        <our-projects></our-projects>
        <roofing-section></roofing-section>
        <metal-roof></metal-roof>
        <reach-out></reach-out>
        <financing-section></financing-section>
        <promotion-section></promotion-section>
        <customer-reviews></customer-reviews>
        <contact-section></contact-section>
    </main>
</template>

<script setup>
import AboutUs from '../sections/AboutUs.vue';
import OurServices from '../sections/OurServices.vue';
import OurProjects from '../sections/OurProjects.vue';
import RoofingSection from '../sections/RoofingSection.vue';
import MetalRoof from '../sections/MetalRoof.vue';
import ReachOut from '../sections/ReachOut.vue';
import FinancingSection from '../sections/FinancingSection.vue';
import PromotionSection from '../sections/PromotionSection.vue';
import CustomerReviews from '../sections/CustomerReviews.vue';
import ContactSection from '../sections/ContactSection.vue';
</script>

<style lang="scss" scoped>
main {
    background: #1C1C1C;
}
</style>