<template>
  <section class="roofing-section">
    <div class="wrapper">
      <div class="heading">
        <h3><span>Renoteck</span> roofing service areas</h3>
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
      <p class="county">City in Alberta</p>
      <div class="cities">
        <base-city>Calgary</base-city>
        <base-city>Cochrane</base-city>
        <base-city>Airdrie</base-city>
        <base-city>De Winton</base-city>
        <base-city>Chestermere</base-city>
        <base-city>Red Deer</base-city>
        <base-city>Okotoks</base-city>
        <base-city>High River</base-city>
        <base-city>Edmonton</base-city>
        <base-city>Spruce Grove</base-city>
        <base-city>Sherwood Park</base-city>
        <base-city>St. Albert</base-city>
        <base-city>Brag Creek</base-city>
        <base-city>Whitecourt</base-city>
        <base-city>Fort Saskatchewan</base-city>
        <base-city>Drumheller</base-city>
        <base-city>Lethbridge</base-city>
        <base-city>Brooks</base-city>
        <base-city>Medicine Hat</base-city>
        <base-city>Canmore</base-city>
        <base-city>Banff</base-city>
        <base-city>Rocky Mountain House</base-city>
        <base-city>Leduc</base-city>
      </div>
      <img src="@/assets/images/map.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        serviceType: "alberta",
      },
      serviceTypes: [
        { label: "Alberta", value: "alberta" },
        { label: "Britain Columbia", value: "britain columbia" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.roofing-section {
  background: #111;
  position: relative;
  padding: 180px 32px 60px 32px;

  clip-path: polygon(100% 5vw, 0 0, 0 100%, 100% 100%);

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

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
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

.county {
  color: #a3a3a3;
  font-family: 'Inter-Medium';
  font-size: 1.6rem;
  font-weight: 500;
}

.cities {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 90%;
}
</style>