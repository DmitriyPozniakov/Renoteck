<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <h2 class="contact-form__title">Contact Renotech today</h2>

    <div class="contact-form__row">
      <div class="contact-form__column">
        <label for="name" class="contact-form__label required">Your name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="contact-form__input"
          placeholder="John Doe"
          required
        />
      </div>

      <div class="contact-form__column">
        <label for="email" class="contact-form__label required"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="contact-form__input"
          placeholder="example@mail.com"
          required
        />
      </div>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__column">
        <label for="phone" class="contact-form__label required">Phone</label>
        <input
          type="tel"
          id="phone"
          v-model="formData.phone"
          class="contact-form__input"
          placeholder="xxx-xxx-xxxx"
          required
        />
      </div>

      <div class="contact-form__column">
        <label for="address" class="contact-form__label required"
          >Address</label
        >
        <input
          type="text"
          id="address"
          v-model="formData.address"
          class="contact-form__input"
          placeholder="Street"
          required
        />
      </div>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__column">
        <label for="city" class="contact-form__label required">City</label>
        <input
          type="text"
          id="city"
          v-model="formData.city"
          class="contact-form__input"
          placeholder="City"
          required
        />
      </div>

      <div class="contact-form__column">
        <label for="province" class="contact-form__label required"
          >Province</label
        >
        <select
          id="province"
          v-model="formData.province"
          class="contact-form__select"
          required
        >
          <option value="" disabled>Select province</option>
          <option
            v-for="(province, code) in provinces"
            :key="code"
            :value="code"
          >
            {{ province }}
          </option>
        </select>
      </div>
    </div>

    <div class="contact-form__column">
      <label class="contact-form__label">Type of service</label>
      <div class="contact-form__service-options">
        <div
          v-for="(service, index) in serviceTypes"
          :key="index"
          :class="[
            'contact-form__service-option',
            { active: formData.serviceType === service.value },
          ]"
          @click="formData.serviceType = service.value"
        >
          {{ service.label }}
        </div>
      </div>
    </div>

    <div class="contact-form__column">
      <label for="project-details" class="contact-form__label"
        >Details of your project</label
      >
      <textarea
        id="project-details"
        v-model="formData.projectDetails"
        class="contact-form__textarea"
        placeholder="Type here..."
      ></textarea>
    </div>

    <button type="submit" class="contact-form__submit-btn">Send</button>
  </form>
</template>
  
  
  <script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        serviceType: "residential",
        projectDetails: "",
      },
      serviceTypes: [
        { label: "Residential", value: "residential" },
        { label: "Commercial", value: "commercial" },
        { label: "Industrial", value: "industrial" },
      ],
    };
  },
};
</script>
  
  <style lang="scss" scoped>
.contact-form {
  width: 100%;
  max-width: 62rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__title {
    font-family: "Inter-Medium";
    font-size: 2.4rem;
    font-weight: 500;
  }

  &__row {
    display: flex;
    gap: 12px; /* Уменьшил промежутки для более плотного расположения */
    flex-wrap: wrap; /* Позволяет элементам переходить на новую строку при необходимости */
  }

  &__column {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__label {
    display: block;
    margin-bottom: 8px;
    font-size: 1.6rem;
    font-family: "Inter-Medium";
    color: #ededed;
    opacity: 0.65;
    font-weight: 500;
  }

  &__input,
  &__select,
  &__textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(237, 237, 237, 0.5);
    background-color: rgba(255, 255, 255, 0.05);
    color: #ededed;
    opacity: 0.65;
    font-size: 1.6rem;
    font-family: "Inter-Medium";

    &::placeholder {
      color: #ededed;
      font-family: "Inter-Medium";
      font-size: 1.6rem;
      opacity: 0.65;
    }
  }

  &__select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - 12px) center;
    padding-right: 30px;
  }

  &__service-options {
    display: flex;
    border-radius: 8px;
    padding: 4px;
    border: 1px solid rgba(237, 237, 237, 0.5);
  }

  &__service-option {
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    color: #ededed;
    opacity: 0.65;
    font-size: 1.6rem;
    font-family: "Inter-Medium";
    transition: background-color 0.3s;

    &.active {
      background-color: #2e7bb2;
      border-radius: 5px;
      color: #fbfbfb;
      opacity: 1;
    }
  }

  &__textarea {
    resize: none;
    height: 96px;
    padding: 12px;
  }

  &__submit-btn {
    width: 100%;
    padding: 12px 24px;
    background-color: #a41c35;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.6rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c23a53;
    }
  }
}

@media (max-width: 640px) {
  .contact-form__row {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
}

@media (max-width: 1024px) {
}
</style>
  