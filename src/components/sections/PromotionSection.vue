<template>
  <section class="promotion-section">
    <div class="promotion-container">
      <div class="article">
        <img class="tag" src="@/assets/images/Tag.svg" alt="" />
        <h3>Promotions</h3>
        <p>
          We will gladly come to you, measure your roof, go over the options and
          provide a free quote.We will gladly come to you, measure your roof, go
          over the options and provide a free quote.
        </p>
        <base-button class="full-width-button">Get now</base-button>
      </div>
      <img src="@/assets/images/telega.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.promotion-section {
  background: #1c1c1c;
  padding: 100px 32px;
}

.promotion-container {
  padding: 0 0 0 64px;
  border-radius: 12px;
  background: #292929;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // flex-wrap: wrap;
  gap: 80px;

  img {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    height: auto;
    max-width: 100%;
  }
}

.article {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .tag {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: #2e7bb2;

    padding: 16px;
  }

  h3 {
    color: #fbfbfb;
    font-family: "Inter-Medium";
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 500;
  }

  p {
    color: #fbfbfb;
    font-family: "Inter-Medium";
    font-size: clamp(1.6rem, 6vw, 2.4rem);
    font-weight: 500;
    margin-bottom: 60px;
  }
}

@media (max-width: 1280px) {
  .promotion-container {
    flex-direction: column-reverse;
    padding: 0;
    gap: 32px;

    img {
      border-radius: 12px 12px 0 0;
      width: 100%;
    }

    .article {
      padding: 32px;

     

      p {
        margin-bottom: 32px;
      }

      .full-width-button {
        width: 100%;
      }

    }
  }
}
</style>