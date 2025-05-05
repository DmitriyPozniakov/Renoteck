<template>
  <section class="hero-section">
    <div class="article">
      <h1>Alberta’s #1 metal roofing and exterior company</h1>
      <p>
        With 25 years of experience as Alberta's trusted metal roofing company,
        we combine premium materials with expert installation to protect your
        property through every season.
      </p>
    </div>
    <hero-form></hero-form>
  </section>
</template>

<script setup>
import HeroForm from "./HeroForm.vue";
</script>

<style lang="scss" scoped>
.hero-section {
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url("/src/assets/images/bg-hero.png") lightgray 50% / cover no-repeat;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 94px 40px 94px 80px;

  h1 {
    color: #fff;
    font-family: "Inter-Medium";
    font-size: 8.8rem;
    margin-bottom: 24px;
    font-weight: 500;
  }

  p {
    color: #fff;
    font-family: "Inter-Medium";
    font-size: 2.4rem;
    max-width: 85rem;
    text-align: justify;
  }
}
</style>