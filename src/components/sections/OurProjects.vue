<template>
  <section class="our-projects-section">
    <div class="heading">
      <h3>Our <span>projects</span></h3>
      <div class="service-options">
        <div
          v-for="(service, index) in serviceTypes"
          :key="index"
          :class="[
            'service-option',
            { active: formData.serviceType === service.value },
          ]"
          @click="formData.serviceType = service.value"
        >
          {{ service.label }}
        </div>
      </div>
    </div>
    <div>
      <base-slider></base-slider>
    </div>
  </section>
</template>

<script>
import BaseSlider from "../base/BaseSlider.vue";
export default {
  components: { BaseSlider },
  data() {
    return {
      formData: {
        serviceType: "residential",
      },
      serviceTypes: [
        { label: "Residential", value: "residential" },
        { label: "Commercial", value: "commercial" },
        { label: "Industrial", value: "industrial" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.our-projects-section {
  background: #111;
  position: relative;
  padding: 180px 32px;

//   clip-path: polygon(0 6vw, 100% 0, 100% 100%, 0 100%);
clip-path: polygon(0 6vw, 100% 0, 100% 94vw, 0 100%);


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/Line.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    h3 {
      color: #fbfbfb;
      font-family: "Inter-Medium";
      font-size: 6rem;
      font-weight: 500;
      span {
        color: #a41c35;
      }
    }
  }
}

.service-options {
  display: flex;
  border-radius: 8px;

  padding: 4px;
  border: 1px solid rgba(237, 237, 237, 0.5);
}

.service-option {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 150px;
  padding: 12px 20px;
  cursor: pointer;
  color: #ededed;
  opacity: 0.65;
  font-size: 1.6rem;
  font-family: "Inter-Medium";
  border-radius: 5px;
  transition: background-color 0.3s;

  &.active {
    background-color: #2e7bb2;
    color: #fbfbfb;
    opacity: 1;
  }
}
</style>