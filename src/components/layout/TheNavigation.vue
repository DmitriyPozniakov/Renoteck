<template>
  <nav>
    <img src="@/assets/images/logo.svg" class="logo" alt="logo" />
    <ul>
      <li><a href="">About</a></li>
      <li @click="changeImage('item1')">
        <a href="" @click.prevent
          >Services
          <img
            :src="
              selectedItem === 'item1'
                ? require('@/assets/images/CaretUp.svg')
                : require('@/assets/images/CaretDown.svg')
            "
            alt="Item 1"
            class="item-image"
          />
        </a>
      </li>
      <li @click="changeImage('item2')">
        <a href="" @click.prevent
          >Type of roofing
          <img
            :src="
              selectedItem === 'item2'
                ? require('@/assets/images/CaretUp.svg')
                : require('@/assets/images/CaretDown.svg')
            "
            alt="Item 2"
            class="item-image"
          />
        </a>
      </li>
      <li @click="changeImage('item3')">
        <a href="" @click.prevent
          >Locations
          <img
            :src="
              selectedItem === 'item3'
                ? require('@/assets/images/CaretUp.svg')
                : require('@/assets/images/CaretDown.svg')
            "
            alt="Item 3"
            class="item-image"
          />
        </a>
      </li>
      <li><a href="" @click.prevent>Projects</a></li>
      <li><a href="" @click.prevent>3D Vizualization</a></li>
      <li><a href="" @click.prevent>Financing</a></li>
      <li><a href="" @click.prevent>Referral program</a></li>
      <li><a href="" @click.prevent>Blog</a></li>
      <li><a href="" @click.prevent>Contacts</a></li>
    </ul>
    <div class="nav-actions">
      <base-social platform="instagram"></base-social>
      <base-social platform="facebook"></base-social>
      <base-button
        ><img src="@/assets/images/Phone.svg" alt="phone" />
        877-235-9224</base-button
      >
    </div>
    <img
      @click="toggleForm"
      class="burger"
      src="@/assets/images/Menu.svg"
      alt=""
    />
    <burger-form class="form" v-if="showForm"></burger-form>

    <!-- Блоки с разным наполнением -->
    <div
      v-show="selectedItem === 'item1'"
      class="item-content"
      :key="selectedItem"
    >
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
    </div>

    <div
      v-show="selectedItem === 'item2'"
      class="item-content"
      :key="selectedItem"
    >
      <p>Content for Type of roofing</p>
    </div>

    <div
      v-show="selectedItem === 'item3'"
      class="item-content"
      :key="selectedItem"
    >
      <p>Content for Locations</p>
    </div>
  </nav>
</template>


<script setup>
import BurgerForm from "../BurgerForm.vue";
import { ref } from "vue";

const showForm = ref(false);
const selectedItem = ref(null);

const toggleForm = () => {
  console.log("toggleForm called");
  showForm.value = !showForm.value;
  console.log("showForm:", showForm.value);
};

const changeImage = (item) => {
  if (selectedItem.value === item) {
    console.log(`${item} is already open, closing it.`);
  } else {
    console.log(`${item} is opened.`);
  }
  selectedItem.value = selectedItem.value === item ? null : item;
};
</script>


<style lang="scss" scoped>
.item-content {
  background: #292929;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 10;
  transition: opacity 0.3s ease, max-height 0.3s ease;
  overflow: hidden;

  display: flex;

  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  padding: 16px 32px;

}

.form {
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  z-index: 999;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  background: #292929;
  border-radius: 12px;
  padding: 16px;

  ul {
    display: flex;
    gap: 24px;

    li a {
      color: #f9f9f9;
      font-family: "Inter-Medium";
      font-size: 1.6rem;

      display: flex;
      align-content: center;
      gap: 8px;
    }
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

.burger {
  display: none;
}

.services {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .service-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    border-radius: 12px;
    overflow: hidden;

    width: 100%;
    max-width: 55rem;
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

.floating-elements {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
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

@media (max-width: 640px) {
  /* sm */
  nav ul,
  nav .nav-actions {
    display: none;
  }

  .burger {
    display: block;
  }
}

@media (max-width: 768px) {
  /* md */
  nav ul,
  nav .nav-actions {
    display: none;
  }

  .burger {
    display: block;
  }
}

@media (max-width: 1024px) {
  /* lg */
  nav ul,
  nav .nav-actions {
    display: none;
  }
  .burger {
    display: block;
  }
}

@media (max-width: 1280px) {
  /* xl */
  nav ul,
  nav .nav-actions {
    display: none;
  }
  .burger {
    display: block;
  }
}

@media (min-width: 1536px) {
  /* 2xl */
}
</style>