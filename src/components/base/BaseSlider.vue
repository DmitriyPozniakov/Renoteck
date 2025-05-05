<template>
    <div class="slider-container">
      <div class="slider-controls">
      </div>
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
          :title="slide.title"
        >
          <template #content>
            <div class="slide-content" :class="{ active: currentSlide === i }">
              <div class="slide-image-container">
                <img :src="slide.image" :alt="slide.title" class="slide-image" />
                <div class="slide-overlay"></div>
              </div>
              <div class="slide-title">{{ slide.title }}</div>
              <base-floating>About project</base-floating>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
      <div class="slider-buttons">
          <button @click="previous" class="slider-control-button prev">
            Previous
          </button>
          <button @click="next" class="slider-control-button next">Next</button>
        </div>
    </div>
  </template>
  
  <script>
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";
  import HouseImg1 from "@/assets/images/house-img-1.png";
  import HouseImg2 from "@/assets/images/house-img-2.png";
  import HouseImg3 from "@/assets/images/house-img-3.png";
  
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
            title: "Town house",
            image: HouseImg1,
          },
          {
            title: "Town house",
            image: HouseImg2,
          },
          {
            title: "Town house",
            image: HouseImg3,
          },
        ],
        breakpoints: {
          768: {
            visibleSlides: 1,
            slideRatio: 1,
          },
          992: {
            visibleSlides: 3,
            slideRatio: 1 / 3,
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
  transform: scale(0.8); // Уменьшаем размер неактивных слайдов
  opacity: 0.5;
  filter: blur(2px);
  border-radius: 12px;
  z-index: 1; // Неактивные слайды находятся ниже
}

:deep(.vueperslide--active) {
  transform: scale(1);
  opacity: 1;
  filter: none;
  z-index: 2; // Активный слайд будет на переднем плане
}

.vueperslide--prev,
.vueperslide--next {
  transform: scale(0.9); // Слайды слева и справа будут чуть меньше
}

.slide-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  object-fit: cover;
  border-radius: 12px;
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

.slide-title {
  color: #fff;
  font-size: 2.6rem;
  font-family: 'Inter-Medium';
  padding: 20px;
  font-weight: 500;
  position: relative;
  z-index: 2;
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
  gap: 10px;
  justify-content: center;  /* Центрируем кнопки */
  width: 100%;  /* Обеспечиваем, что контейнер кнопок растягивается на всю ширину */
}

.slider-control-button {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.slider-control-button:hover {
  background-color: #e0e0e0;
}

</style>