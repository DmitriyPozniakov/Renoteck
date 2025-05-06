<template>
  <section class="reach-out-section">
    <div class="img-container">
      <div class="article">
        <h3>Reach Out to RenoTeck for Your Custom Free Estimate</h3>
        <p>
          Get a detailed, no-commitment quote from our experienced metal roofing
          team, tailored just to your needs.
        </p>
      </div>
      <div class="buttons">
        <base-button class="btn">Get now</base-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.reach-out-section {
  padding: 0 32px 90px 32px;
}

.img-container {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("@/assets/images/reachOut.png") lightgray 50% / cover no-repeat;

  border-radius: 32px;
  padding: 80px;

  .article {
    h3 {
      color: #fff;
      font-family: "Inter-Medium";
      font-size: clamp(3rem, 6vw, 6rem);
      font-weight: 500;
      max-width: 80rem;
      margin-bottom: 24px;
    }
    p {
      color: #fff;
      font-family: "Inter-Medium";
      font-size: clamp(1.6rem, 6vw, 2.4rem);
      font-weight: 500;
      max-width: 70rem;
      margin-bottom: 80px;
    }
  }
}



@media (max-width: 640px) {
  /* sm */
  .reach-out-section {
    padding: 0;
  }
  .img-container {
    padding: 60px 12px 24px 12px;
    border-radius: 0;
    height: 50rem
  } 
  .buttons {
    width: 100%;

    .btn {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  /* md */
  .reach-out-section {
    padding: 0;
  }
  .img-container {
    padding: 60px 12px 24px 12px;
    border-radius: 0;
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  } 
  .buttons {
    width: 100%;

    .btn {
      width: 100%;
    }
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