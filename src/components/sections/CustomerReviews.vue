<template>
  <section class="reviews-section">
    <div class="heading">
      <h3>Why customers trust <span>Renoteck</span></h3>
      <div class="btn-container">
        <img src="@/assets/images/google.svg" alt="">
        <base-button>Write a review</base-button>
      </div>
    </div>
    <!-- <base-slider></base-slider> -->
     <review-slider></review-slider>
  </section>
</template>

<script setup>
// import BaseSlider from "../base/BaseSlider.vue";
import ReviewSlider from "../ReviewSlider.vue";
</script>

<style lang="scss" scoped>
.reviews-section {
    padding: 100px 32px;
}
.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
    flex-wrap: wrap;
  h3 {
    color: #fbfbfb;
    font-family: 'Inter-Medium';
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 500;
  }
  span {
    color: #A41C35;
  }
}

.btn-container {
    display: flex;
    align-items: center;
    gap: 48px;
}

@media (max-width: 640px) {
  /* sm */
  .reviews-section {
    padding: 30px;
  }
  h3 {
    margin-bottom: 24px;
  }
}

@media (max-width: 768px) {
  /* md */
  h3 {
    margin-bottom: 24px;
  }
}

@media (max-width: 1024px) {
  /* lg */
  
}

@media (max-width: 1280px) {
  /* xl */
 
}

@media (min-width: 1536px) {
  /* 2xl */
}
</style>