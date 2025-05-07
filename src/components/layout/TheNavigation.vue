<template>
  <nav>
    <img src="@/assets/images/logo.svg" class="logo" alt="logo" />
    <ul class="nav-list">
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
      <div class="additional" @click="openAdditional">
        <p>Additional Services</p>
        <img
          :src="
            showAdditional
              ? require('@/assets/images/CaretUp.svg')
              : require('@/assets/images/CaretDown.svg')
          "
        />
      </div>
      <div v-if="showAdditional" class="roofs">
        <div class="roof">
          <img src="@/assets/images/add-1.png" alt="">
          <p>Commercial roofing</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/add-2.png" alt="">
          <p>Emergency roofing</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/add-3.png" alt="">
          <p>Asphalt shingles</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/add-4.png" alt="">
          <p>Green roofing</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/add-5.png" alt="">
          <p>Flat roofing</p>
        </div>
      </div>
    </div>

    <div
      v-show="selectedItem === 'item2'"
      class="item-content"
      :key="selectedItem"
    >
      <div class="roofs">
        <div class="roof">
          <img src="@/assets/images/roof-1.png" alt="" />
          <p>Galvalume</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-2.png" alt="" />
          <p>Aluminium</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-3.png" alt="" />
          <p>Copper</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-4.png" alt="" />
          <p>Terne</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-5.png" alt="" />
          <p>Zink</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-6.png" alt="" />
          <p>Stainless Steel</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-7.png" alt="" />
          <p>Brass</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-8.png" alt="" />
          <p>Titanium Nitride</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-9.png" alt="" />
          <p>Chromium Oxide</p>
        </div>
        <div class="roof">
          <img src="@/assets/images/roof-10.png" alt="" />
          <p>Titanium</p>
        </div>
      </div>
    </div>

    <div
      v-show="selectedItem === 'item3'"
      class="item-content"
      :key="selectedItem"
    >
      <div class="locations">
        <p class="location">Locations</p>
        <div class="service-options">
          <div
            v-for="(service, index) in serviceTypes"
            :key="index"
            :class="[
              'service-option',
              { active: formData.serviceType === service.value },
            ]"
            @click="formData.serviceType = service.value"
          >
            {{ service.label }}
          </div>
        </div>
        <div class="links">
          <ul class="list">
            <li>Calgary</li>
            <li>Cochrane</li>
            <li>Airdrie</li>
            <li>De Winton</li>
          </ul>
          <ul class="list">
            <li>Chestermere</li>
            <li>Red Deer</li>
            <li>Okotoks</li>
            <li>High River</li>
          </ul>
          <ul class="list">
            <li>Edmonton</li>
            <li>Spruce Grove</li>
            <li>Sherwood Park</li>
            <li>Fort Saskatchewan</li>
          </ul>
          <ul class="list">
            <li>St. Albert</li>
            <li>Brag Creek</li>
            <li>Whitecourt</li>
            <li>Fort McMurray</li>
          </ul>
          <ul class="list">
            <li>Drumheller</li>
            <li>Lethbridge</li>
            <li>Banff</li>
            <li>Leduc</li>
          </ul>
          <ul class="list">
            <li>Brooks</li>
            <li>Canmore</li>
            <li>Medicine Hat</li>
            <li>Rocky Mountain House</li>
          </ul>
        </div>
      </div>
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

const showAdditional = ref(false);

const openAdditional = () => {
  showAdditional.value = !showAdditional.value;
};

const formData = ref({
  serviceType: "alberta",
});
const serviceTypes = [
  { label: "Alberta", value: "alberta" },
  { label: "Britain Columbia", value: "britain columbia" },
];
</script>


<style lang="scss" scoped>
.roofs {
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  gap: 12px;
}
.roofs::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
.roof {
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    color: #fbfbfb;
    font-family: "Inter-Medium";
    font-size: 1.6rem;
    font-weight: 500;
  }
}

.card-heading {
  color: #fbfbfb;
  font-family: "Inter-Medium";
  font-size: 1.6rem;
  font-weight: 500;
}

.additional {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
  margin-bottom: 30px;
}

nav {
  .location {
    color: #fbfbfb;
    font-family: "Inter-Medium";
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 12px;
    margin-top: 12px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 36px;
    width: 100%;

    .list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}

.service-options {
  display: inline-flex;
  border-radius: 8px;

  padding: 4px;
  border: 1px solid rgba(237, 237, 237, 0.5);
  margin-bottom: 24px;
}

.service-option {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 20px;
  cursor: pointer;
  color: #ededed;
  opacity: 0.65;
  font-size: 1.6rem;
  font-family: "Inter-Medium";
  border-radius: 5px;
  transition: background-color 0.3s;

  &.active {
    background-color: #2e7bb2;
    color: #fbfbfb;
    opacity: 1;
  }
}

li {
  color: #a3a3a3;
  font-family: "Inter-Medium";
  font-size: 1.6rem;
  font-weight: 500;
}

.item-content {
  background: #292929;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  width: 100%;

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

  .nav-list {
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

.additional {
  color: #fbfbfb;
  font-family: "Inter-Medium";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.services {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 30px;

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
  nav .nav-list,
  nav .nav-actions {
    display: none;
  }

  .item-content {
    display: none;
  }

  .burger {
    display: block;
  }
}

@media (max-width: 768px) {
  /* md */
  nav .nav-list,
  nav .nav-actions {
    display: none;
  }

  .item-content {
    display: none;
  }

  .burger {
    display: block;
  }
  .item-content {
    display: none;
  }
}

@media (max-width: 1024px) {
  /* lg */
  nav .nav-list,
  nav .nav-actions {
    display: none;
  }
  .burger {
    display: block;
  }

  .item-content {
    display: none;
  }
}

@media (max-width: 1280px) {
  /* xl */
  nav .nav-list,
  nav .nav-actions {
    display: none;
  }
  .burger {
    display: block;
  }

  .item-content {
    display: none;
  }
}

@media (max-width: 1536px) {
  /* 2xl */
  nav .nav-list,
  nav .nav-actions {
    display: none;
  }
  .burger {
    display: block;
  }

  .item-content {
    display: none;
  }
}
</style>