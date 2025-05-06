<template>
  <section class="about-us-section">
    <div class="info">
      <div class="text-info">
        <h2>A proudly <span>Albertan</span> metal roofing company</h2>
        <p>
          Our reputation is built on one thing: mastering metal in Alberta's
          demanding climate. Unlike companies that work with every material, we
          focus exclusively on metal roofing and cladding - it’s not just what
          we do—it’s what we excel at. This specialization matters when you're
          dealing with -40°C cold snaps that make other materials brittle, or
          calculating exact expansion gaps for those 30-degree summer swings.
        </p>
        <p>
          Our metal expertise serves projects across Calgary and Edmonton, from
          restoring century-old cornices with custom metal work to cladding
          modern commercial developments with precision panel systems. We've
          developed specific techniques for Alberta's unique challenges - like
          how to detail metal roofing valleys that handle sudden chinook melts,
          or install cladding systems that manage aggressive snow loads without
          compromising ventilation.
        </p>
        <base-button class="btn">Who We Are</base-button>
      </div>
      <div class="img-info">
        <img src="@/assets/images/video.png" alt="" />
      </div>
    </div>
    <div class="advantages">
      <base-advantage
        :icon="BagIcon"
        value="25+"
        label="Years of experience"
      ></base-advantage>
      <base-advantage :icon="HomeIcon" value="15K+" label="Projects completed"></base-advantage>
      <base-advantage :icon="HeadsetIcon" value="24/7" label="Customer support"></base-advantage>
    </div>
  </section>
</template>

<script setup>
import BagIcon from '@/assets/images/BagSimple.svg';
import HomeIcon from '@/assets/images/HouseLine.svg';
import HeadsetIcon from '@/assets/images/Headset.svg';
</script>

<style lang="scss" scoped>

.about-us-section {
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 12px 32px 200px 32px;
  background: #111;
  
  //(x,y) 0 0 - верхний левый угол
  // 100% 0 - верхний правый 
  // 100% 95% немного выше нижнего правого угла (создает наклон)
  // 0 100% - нижний левый
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  
  .info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 48px;

    padding: 24px;
    border-radius: 12px;
    background: #292929;
  }
}

h2 {
  color: #fbfbfb;
  font-family: "Inter-Medium";
  font-size: clamp(3rem, 6vw, 6rem);
  margin-bottom: 24px;
  font-weight: 500;

  span {
    color: #a41c35;
  }
}

.text-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 75rem;
}

p {
  color: #fbfbfb;
  font-family: "Inter-Medium";
  font-size: 1.6rem;
  line-height: 1.3;
}

.text-info p:nth-of-type(2) {
  margin-bottom: 40px;
}

.btn {
  align-self: flex-start;
}

img {
  border-radius: 12px;
  height: auto;
  width: 100%;
}

.advantages {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>