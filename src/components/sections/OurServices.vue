<template>
  <section class="our-services">
    <h2>Our <span>services</span></h2>
    <div class="services">
      <div class="service-card card-residental">
        <div class="floating-elements">
          <base-floating class="floating">
            <p>Standing Seam</p>
          </base-floating>
          <base-floating class="floating">
            <p>Metal Shingles</p>
          </base-floating>
          <base-floating class="floating">
            <p>Custom</p>
          </base-floating>
          <base-floating class="floating">
            <p>Metal Cladding</p>
          </base-floating>
        </div>
        <p class="card-heading">Residental</p>
      </div>

      <div class="service-card card-commercial">
        <div class="floating-elements">
          <base-floating class="floating">
            <p>Metal Roofing</p>
          </base-floating>
          <base-floating class="floating">
            <p>Metal Cladding</p>
          </base-floating>
        </div>
        <p class="card-heading">Commercial</p>
      </div>

      <div class="service-card card-industrial">
        <div class="floating-elements">
          <base-floating class="floating">
            <p>Metal Roofing</p>
          </base-floating>
          <base-floating class="floating">
            <p>Metal Cladding</p>
          </base-floating>
        </div>
        <p class="card-heading">Industrial</p>
      </div>
    </div>
    <base-button class="btn">Get in touch!</base-button>
  </section>
</template>

<style lang="scss" scoped>
.our-services {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 48px;
}

h2 {
  color: #fbfbfb;
  text-align: center;
  font-family: "Inter-Medium";
  font-size: 6rem;
  font-weight: 500;
  margin-bottom: 48px;

  span {
    color: #a41c35;
  }
}

.services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  .service-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    border-radius: 12px;
    overflow: hidden;

    width: 100%;
    max-width: 60rem;
    aspect-ratio: 4 / 3;
    max-height: 60rem;
    min-height: 32rem;
    height: auto;
    padding: 16px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    img {
      border-radius: 12px;
      display: block;
      position: relative;
    }
  }
}

.card-residental {
  background: url("@/assets/images/residental.png");
}
.card-commercial {
  background: url("@/assets/images/commercial.png");
}
.card-industrial {
  background: url("@/assets/images/industrial.png");
}

.btn {
  align-self: center; 
  margin-bottom: 48px;
}

.floating-elements {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

.card-heading {
  color: #fbfbfb;
  font-family: "Inter-Medium";
  font-size: 3.2rem;
  font-weight: 500;
}
</style>