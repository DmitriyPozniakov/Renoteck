<template>
  <div class="slider-container">
    <div class="slider-controls"></div>
    <vueper-slides
      ref="vueperSlides"
      :visible-slides="3"
      :slide-ratio="1 / 3"
      :gap="1"
      :dragging-distance="70"
      :breakpoints="breakpoints"
      center-mode
      fixed-height="400px"
      :touchable="true"
      @slide-change="onSlideChange"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
      >
        <template #content>
          <div class="slide-content" :class="{ active: currentSlide === i }">
            <div class="slide-image-container">
              <img :src="slide.image" :alt="slide.title" class="slide-image" />
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    <div class="slider-buttons">
      <button @click="previous" class="slider-control-button prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            d="M20.7073 25.7925C20.8002 25.8854 20.8739 25.9957 20.9242 26.1171C20.9745 26.2385 21.0004 26.3686 21.0004 26.5C21.0004 26.6314 20.9745 26.7615 20.9242 26.8829C20.8739 27.0043 20.8002 27.1146 20.7073 27.2075C20.6144 27.3004 20.5041 27.3741 20.3827 27.4244C20.2613 27.4747 20.1312 27.5006 19.9998 27.5006C19.8684 27.5006 19.7383 27.4747 19.6169 27.4244C19.4955 27.3741 19.3852 27.3004 19.2923 27.2075L9.29231 17.2075C9.19933 17.1146 9.12557 17.0043 9.07525 16.8829C9.02493 16.7615 8.99902 16.6314 8.99902 16.5C8.99902 16.3686 9.02493 16.2385 9.07525 16.1171C9.12557 15.9957 9.19933 15.8854 9.29231 15.7925L19.2923 5.79251C19.4799 5.60487 19.7344 5.49945 19.9998 5.49945C20.2652 5.49945 20.5197 5.60487 20.7073 5.79251C20.895 5.98015 21.0004 6.23464 21.0004 6.50001C21.0004 6.76537 20.895 7.01987 20.7073 7.20751L11.4136 16.5L20.7073 25.7925Z"
            fill="white"
          />
        </svg>
      </button>
      <button @click="next" class="slider-control-button next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            d="M11.2927 7.20749C11.1998 7.11458 11.1261 7.00428 11.0758 6.88289C11.0255 6.76149 10.9996 6.63139 10.9996 6.49999C10.9996 6.3686 11.0255 6.23849 11.0758 6.11709C11.1261 5.9957 11.1998 5.8854 11.2927 5.79249C11.3856 5.69958 11.4959 5.62588 11.6173 5.5756C11.7387 5.52532 11.8688 5.49943 12.0002 5.49943C12.1316 5.49943 12.2617 5.52532 12.3831 5.5756C12.5045 5.62588 12.6148 5.69958 12.7077 5.79249L22.7077 15.7925C22.8007 15.8854 22.8744 15.9957 22.9248 16.1171C22.9751 16.2385 23.001 16.3686 23.001 16.5C23.001 16.6314 22.9751 16.7615 22.9248 16.8829C22.8744 17.0043 22.8007 17.1146 22.7077 17.2075L12.7077 27.2075C12.5201 27.3951 12.2656 27.5005 12.0002 27.5005C11.7348 27.5005 11.4803 27.3951 11.2927 27.2075C11.105 27.0199 10.9996 26.7654 10.9996 26.5C10.9996 26.2346 11.105 25.9801 11.2927 25.7925L20.5864 16.5L11.2927 7.20749Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
    
    <script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import CommentImg from "@/assets/images/comment.png";

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      currentSlide: 1,
      slides: [
        {
          image: CommentImg,
        },
        {
          image: CommentImg,
        },
        {
          image: CommentImg,
        },
      ],
      breakpoints: {
        768: {
          visibleSlides: 1,
          slideRatio: 1,
        },
        992: {
          visibleSlides: 1,
          slideRatio: 1,
        },
      },
    };
  },
  methods: {
    onSlideChange(index) {
      this.currentSlide = index.currentSlide;
    },
    goToSlide(index) {
      if (this.$refs.vueperSlides) {
        this.$refs.vueperSlides.goToSlide(index);
      }
    },
    next() {
      if (this.$refs.vueperSlides) {
        this.$refs.vueperSlides.next();
      }
    },
    previous() {
      if (this.$refs.vueperSlides) {
        this.$refs.vueperSlides.previous();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.vueperSlides) {
        this.$refs.vueperSlides.goToSlide(1); // Переход ко второму слайду
      }
    });
  },
};
</script>
    
    
  <style lang="scss" scoped>
.slider-container {
  width: 100%;
  height: 50rem;
  height: auto;
  margin: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.vueper-slides {
  position: relative;
  z-index: 10;
}

:deep(.vueperslide) {
  position: relative;
  transition: all 0.3s ease;
  transform: scale(0.8);
  opacity: 0.5;
  filter: blur(2px);
  border-radius: 12px;
  z-index: 1;
}

:deep(.vueperslide--active) {
  transform: scale(1);
  opacity: 1;
  filter: none;
  z-index: 2;
}

.vueperslide--prev,
.vueperslide--next {
  transform: scale(0.9);
}

.slide-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.slide-image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  object-position: center;
  background-color: #1C1C1C
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.heading {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
}

.slide-title {
  color: #fff;
  font-size: 2.6rem;
  font-family: "Inter-Medium";
  padding: 20px;
  font-weight: 500;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.slide-actions {
  display: flex;
  justify-content: flex-start;
  padding: 0 20px 20px;
  position: relative;
  z-index: 2;
  gap: 10px;
}

.action-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.details {
  background-color: rgba(59, 130, 246, 0.8);
}

.custom-arrow {
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-arrow:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.slider-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  margin-bottom: 10px;
}

.slider-dots {
  display: flex;
  gap: 8px;
}

.slider-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-dot.active {
  background-color: #333;
  transform: scale(1.2);
}

.slider-buttons {
  display: flex;
  // gap: 10px;
  justify-content: center;
  // width: 100%;
}

.slider-control-button {
  padding: 12px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  border-radius: 12px;
  border: 2px solid #505050;

  background: #262626;
}

.slider-control-button:hover {
  background-color: #e0e0e0;
}

@media (max-width: 640px) {
  /* sm */
  .slider-buttons {
    display: none;
  }
}

@media (max-width: 768px) {
  /* md */
  .slider-buttons {
    display: none;
  }
}
</style>