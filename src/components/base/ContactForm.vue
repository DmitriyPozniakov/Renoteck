<template>
    <form class="contact-form" @submit.prevent="submitForm">
      <h2 class="contact-form__title">Contact Renotech today</h2>
  
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
        <label for="email" class="contact-form__label required">Your email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="contact-form__input"
          placeholder="example@mail.com"
          required
        />
      </div>
  
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
        <label for="address" class="contact-form__label required">Address</label>
        <input
          type="text"
          id="address"
          v-model="formData.address"
          class="contact-form__input"
          placeholder="City + Province + Postal Code"
          required
        />
      </div>
  
      <div class="contact-form__column">
        <label for="project-details" class="contact-form__label">Details of your project</label>
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
    methods: {
      submitForm() {
        // Здесь логика отправки данных формы
        console.log("Form submitted:", this.formData);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .contact-form {
    width: 100%;
    max-width: 50rem;
    min-width: 30rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 12px;
  
    &__title {
      font-family: "Inter-Medium";
      font-size: 2.4rem;
      font-weight: 500;
    }
  
    &__column {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  
    &__label {
      font-size: 1.6rem;
      font-family: "Inter-Medium";
      color: #ededed;
      opacity: 0.65;
      font-weight: 500;
    }
  
    &__input,
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
  
    &__textarea {
      resize: none;
      height: 96px;
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
</style>
  