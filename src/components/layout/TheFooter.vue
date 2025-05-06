<template>
  <footer>
    <div class="article">
      <div class="social-media">
        <social-media
          ><img src="@/assets/images/TiktokLogo.svg" alt=""
        /></social-media>
        <social-media
          ><img src="@/assets/images/InstagramLogo.svg" alt=""
        /></social-media>
        <social-media
          ><img src="@/assets/images/LinkedinLogo.svg" alt=""
        /></social-media>
        <social-media
          ><img src="@/assets/images/FacebookLogo.svg" alt=""
        /></social-media>
      </div>
      <h3>Your next partner <span> in metal roofing</span></h3>
      <base-button>Contact us</base-button>
    </div>

    <div class="center-links">
      <div class="links">
        <div class="links column-1">
          <ul>
            <li>Servicrs</li>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Industrial</li>
          </ul>
          <ul>
            <li>Navigation</li>
            <li>About</li>
            <li>Services</li>
            <li>Type of roofing</li>
            <li>Locations</li>
            <li>Projects</li>
            <li>3D Vizualization</li>
            <li>Financing</li>
            <li>Referral program</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div class="links column-2">
          <ul>
            <li>Contacts</li>
            <li>+ 1 877-235-9224</li>
            <li>info@renoteck.ca</li>
          </ul>
          <ul>
            <li>Type of roofing</li>
            <li>Galvalume</li>
            <li>Aluminium</li>
            <li>Copper</li>
            <li>Terne</li>
            <li>Zink</li>
            <li>Stainless Steel</li>
            <li>Brass</li>
            <li>Titanium Nitride</li>
            <li>Chromium Oxide</li>
            <li>Titanium</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="locations">
      <p class="location">Locations</p>
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
      <div class="links">
        <ul>
          <li>Calagary</li>
          <li>Cochrane</li>
          <li>Airdrie</li>
          <li>De Winton</li>
          <li>Chestermere</li>
          <li>Red Deer</li>
          <li>Okotoks</li>
          <li>High River</li>
          <li>Edmonton</li>
          <li>Spruce Grove</li>
        </ul>
        <ul>
          <li>Sherwood Park</li>
          <li>St. Albert</li>
          <li>Fort Saskatchewan</li>
          <li>Brag Creek</li>
          <li>Whitecourt</li>
          <li>Fort McMurray</li>
          <li>Drumheller</li>
          <li>Lethbridge</li>
          <li>Brooks</li>
          <li>Medicine Hat</li>
        </ul>
        <ul>
          <li>Canmore</li>
          <li>Banff</li>
          <li>Rocky Mountain House</li>
          <li>Leduc</li>
        </ul>
      </div>
    </div>
  </footer>
</template>


<script>
import SocialMedia from "../base/SocialMedia.vue";

export default {
  components: { SocialMedia },
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
footer {
  background: #1c1c1c;
  padding: 60px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 30px;

  h3 {
    color: #fbfbfb;
    font-family: "Inter-Medium";
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 500;
    max-width: 50rem;

    span {
      color: #a41c35;
    }
  }
}

.service-options {
  display: inline-flex;
  border-radius: 8px;

  padding: 4px;
  border: 1px solid rgba(237, 237, 237, 0.5);
  margin-bottom: 24px;
}

.service-option {
  display: flex;
  align-items: center;
  justify-content: center;

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

.social-media {
  display: flex;
  gap: 12px;
}

.links {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 36px;
}

.location {
  color: #fbfbfb;
  font-family: "Inter-Medium";
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 12px;
  margin-top: 12px;
}

li {
  color: #a3a3a3;
  font-family: "Inter-Medium";
  font-size: 1.6rem;
  font-weight: 500;
}

li:first-child{
    color: #fbfbfb;
}

.column-1,
.column-2 {
  display: flex;
  flex-direction: column;
}

ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
