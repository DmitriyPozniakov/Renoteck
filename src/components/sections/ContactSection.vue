<template>
  <section class="contact-us-section">
    <div class="contact-us-container">
      <div class="article">
        <h3>
          Don't wait for the next storm - book your free consultation today
        </h3>
        <p class="label">Contact our team at:</p>
        <div class="buttons">
          <base-button background="#2e7bb2"
            ><img src="@/assets/images/Phone.svg" alt="phone" />
            877-235-9224</base-button
          >
          <base-button background="#2e7bb2"
            ><img src="@/assets/images/Envelope.svg" alt="phone" />
            info@renoteck.ca</base-button
          >
        </div>
      </div>
      <contact-form></contact-form>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '../base/ContactForm.vue';
</script>

<style lang="scss" scoped>
.contact-us-section {
  padding: 100px 32px 150px 32px;
  background: #111;
  position: relative;
  z-index: 0; // важно
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);

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
    z-index: -1; // псевдоэлемент позад
  }
}

.contact-us-container {
  background: url("@/assets/images/contact-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  z-index: 100;
  padding: 80px 0 80px 40px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
}

.article {
  h3 {
    color: #fff;
    font-family: "Inter-Medium";
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 500;
    margin-bottom: 80px;
    max-width: 100rem;
  }
  .label {
    color: #fbfbfb;
    font-family: "Inter-Medium";
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 12px;
  }
}

.buttons {
  display: flex;
  gap: 24px;
}

@media (max-width: 640px) {
  /* sm */
  .contact-us-section {
    padding: 50px 0;
  }
  .contact-us-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px !important;
  }
  .buttons {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  /* md */
  .contact-us-section {
    padding: 50px 0;
  }
  .contact-us-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px !important;
  }
  .buttons {
    flex-direction: column;
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