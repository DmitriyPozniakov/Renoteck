<template>
  <section v-if="!isMobile" class="financing-section">
    <div class="finance-wrapper">
      <div class="finance-container">
        <div class="text-container">
          <h3>Financing</h3>
          <p>
            At Renoteck, we feel that a quality roof shouldn't be out of reach.
            When investing in a new metal roof, you have access to flexible
            payment options through Financeit. Our team will carefully walk you
            through each financing plan in your initial consultation to help you
            choose which option works best for your budget. The pre-approval
            process only takes minutes, and many of our clients qualify for no
            payments for up to 12 months (O.A.C., fees apply).
          </p>
          <base-button>More about financing</base-button>
        </div>
        <div class="block-container" v-if="progress === 25">
          <div class="top">
            <img src="@/assets/images/CalendarBlank.svg" alt="" />
            <p class="top-info">No Payments First 12 Months</p>
          </div>
          <div class="article">
            <h3>No Credit Impact</h3>
            <p>
              Shop for your financing options with no risk. Our pre-approval
              process does not affect your credit score, so you can shop with
              absolute confidence for your new roof.
            </p>
          </div>
        </div>

        <div class="block-container" v-if="progress === 50">
          <div class="top">
            <img src="@/assets/images/ClockCountdown.svg" alt="" />
            <p class="top-info">Up To 60 Equal Payments</p>
          </div>
          <div class="article">
            <h3>5-Minute application</h3>
            <p>
              Fast, easy, and quick. Our online application takes only five
              minutes, getting you the financing to take you closer to that
              durable metal roof.
            </p>
          </div>
        </div>

        <div class="block-container" v-if="progress === 100">
          <div class="top">
            <img src="@/assets/images/Money.svg" alt="" />
            <p class="top-info">Low Monthly Payments Plan</p>
          </div>
          <div class="article">
            <h3>Quick Approval, Fast Installation</h3>
            <p>
              Once approved, we will take care of the rest-from scheduling your
              installation to ensuring a smooth process. Your new roof will be
              ready to take on Alberta's toughest weather.
            </p>
          </div>
        </div>
      </div>

      <div class="steps">
        <div class="step-cont first" @click="setProgress(25)">
          <p>01</p>
          <p>Up To 60 Equal Payments</p>
        </div>
        <div class="step-cont second" @click="setProgress(50)">
          <p>02</p>
          <p>5-Minute Application</p>
        </div>
        <div class="step-cont thrid" @click="setProgress(100)">
          <p>03</p>
          <p>Quick Approval, Fast Installation</p>
        </div>
      </div>
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </section>

  <section v-else class="financing-section mobile">
    <div class="finance-wrapper">
      <div class="finance-container finance-mobile">
        <div class="text-container">
          <h3>Financing</h3>
          <p>
            At Renoteck, we feel that a quality roof shouldn't be out of reach.
            When investing in a new metal roof, you have access to flexible
            payment options through Financeit. Our team will carefully walk you
            through each financing plan in your initial consultation to help you
            choose which option works best for your budget. The pre-approval
            process only takes minutes, and many of our clients qualify for no
            payments for up to 12 months (O.A.C., fees apply).
          </p>
          <base-button>More about financing</base-button>
        </div>
        <div class="block-container">
          <div class="top">
            <img src="@/assets/images/CalendarBlank.svg" alt="" />
            <p class="top-info">No Payments First 12 Months</p>
          </div>
          <div class="article">
            <h3>No Credit Impact</h3>
            <p>
              Shop for your financing options with no risk. Our pre-approval
              process does not affect your credit score, so you can shop with
              absolute confidence for your new roof.
            </p>
          </div>
        </div>

        <div class="block-container">
          <div class="top">
            <img src="@/assets/images/ClockCountdown.svg" alt="" />
            <p class="top-info">Up To 60 Equal Payments</p>
          </div>
          <div class="article">
            <h3>5-Minute application</h3>
            <p>
              Fast, easy, and quick. Our online application takes only five
              minutes, getting you the financing to take you closer to that
              durable metal roof.
            </p>
          </div>
        </div>

        <div class="block-container">
          <div class="top">
            <img src="@/assets/images/Money.svg" alt="" />
            <p class="top-info">Low Monthly Payments Plan</p>
          </div>
          <div class="article">
            <h3>Quick Approval, Fast Installation</h3>
            <p>
              Once approved, we will take care of the rest-from scheduling your
              installation to ensuring a smooth process. Your new roof will be
              ready to take on Alberta's toughest weather.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from "vue";

const progress = ref(25);

const setProgress = (value) => {
  progress.value = value;
};

const isMobile = ref(false);

onMounted(() => {
  const checkWidth = () => {
    isMobile.value = window.innerWidth <= 800;
  };
  checkWidth();
  window.addEventListener("resize", checkWidth);
});
</script>

<style lang="scss" scoped>
.financing-section {
  background: #111;
  position: relative;
  padding: 180px 60px 60px 60px;

  clip-path: polygon(0 6vw, 100% 0, 100% 100%, 0 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

  .finance-wrapper {
    width: 100%;
    max-width: 100%;
  }

  .finance-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 90px;
    margin-bottom: 180px;
    width: 100%;

    .text-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;

      h3 {
        color: #fbfbfb;
        font-family: "Inter-Medium";
        font-size: clamp(3rem, 6vw, 6rem);
        font-weight: 500;
      }
      p {
        color: #fbfbfb;
        font-weight: 500;
        font-family: "Inter-Medium";
        font-size: 1.6rem;
        max-width: 60rem;
        line-height: 1.6;
      }
    }

    .block-container {
      border-radius: 12px;
      background: rgba(41, 41, 41, 0.5);
      backdrop-filter: blur(8px);
      padding: 32px;

      display: flex;
      flex-direction: column;
      gap: 125px;

      .top {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        width: 100%;

        .top-info {
          color: #a3a3a3;
          font-family: "Inter-Medium";
          font-size: 1.6rem;
          font-weight: 500;
        }
      }

      .article {
        h3 {
          color: #fbfbfb;
          font-family: "Inter-Medium";
          font-size: clamp(2.4rem, 6vw, 4.8rem);
          font-weight: 500;
          margin-bottom: 24px;
        }

        p {
          color: #fbfbfb;
          font-family: "Inter-Medium";
          font-size: clamp(1.6rem, 6vw, 2.4rem);
          font-weight: 500;
          max-width: 69rem;
        }
      }
    }
  }
}

.steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 18px;

  .step-cont {
    display: flex;
    gap: 12px;
  }

  p {
    color: #fbfbfb;
    font-family: "Inter-Medium";
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
}

.progress-container {
  width: 100%;
  height: 28px;
  border-radius: 51px;
  background: rgba(41, 41, 41, 0.5);
  z-index: 100;

  .progress-bar {
    border-radius: 35px;
    background: #2e7bb2;
    height: 28px;
    transition: width 0.4s ease-in-out;
    z-index: 100;
  }
}

.financing-section.mobile {
  padding: 60px 20px 30px 20px;
}

.finance-mobile {
  gap: 24px !important;
}
</style>