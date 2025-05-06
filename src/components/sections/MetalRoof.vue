<template>
  <section class="metal-roof-section">
    <div class="img-container">
      <div class="top">
        <base-floating class="float" background="rgba(255, 255, 255, 0.24)"
          >What we do</base-floating
        >
      </div>
      <div class="article">
        <h3>Metal roofing</h3>
        <p>
          Renoteck’s specialty is lifetime warranty metal roofing. We offer full
          installation service in Calgary, Edmonton, Red Deer, Lethbridge,
          Medicine Hat and surrounding communities. Metal roofing is a trademark
          of Renoteck and we believe it is the best material to use in Alberta’s
          harsh climate, where heat, hail, snow and high winds are common place.
          With the superior coating used on steel roofing products you can rest
          assured that your roof with look the same in 50 years. Metal roofs are
          very affordable, they are ¼ the cost of real clay roofing tiles or
          genuine slate roofs. Read more
        </p>
      </div>
      <div class="buttons">
        <base-button>Read more</base-button>
        <base-button background="#2e7bb2">Get in touch</base-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.metal-roof-section {
  padding: 90px 32px;
}
.img-container {
  background: url("@/assets/images/house-img-1.png");
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 32px;
  padding: 80px;

  .top {
    margin-bottom: 130px;

    .float {
      display: inline-flex;
    }
  }

  .article {
    h3 {
      color: #fff;
      font-family: "Inter-Medium";
      font-size: clamp(3rem, 6vw, 6rem);
      font-weight: 500;
      margin-bottom: 24px;
    }
    p {
      color: #fff;
      font-family: "Inter-Medium";
      font-size: clamp(1.6rem, 6vw, 2.4rem);
      font-weight: 500;
      line-height: 36px;
      max-width: 100rem;
      margin-bottom: 80px;
    }
  }

  .buttons {
    display: flex;
    gap: 24px;
  }
}

@media (max-width: 640px) {
  /* sm */
  .metal-roof-section {
    padding: 0;
  }
  .img-container {
    padding: 24px 12px;
    border-radius: 0;
  }
  .buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  /* md */
  .metal-roof-section {
    padding: 0;
  }
  .img-container {
    padding: 24px 12px;
    border-radius: 0;
  }
  .buttons {
    justify-content: center;
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