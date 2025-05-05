import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss';
import BaseSocial from './components/base/BaseSocial.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseAdvantage from './components/base/BaseAdvantage.vue';
import BaseFloating from './components/base/BaseFloating.vue';
import BaseCity from './components/base/BaseCity.vue';

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const app = createApp(App);

app.component('base-social', BaseSocial);
app.component('base-button', BaseButton);
app.component('base-advantage', BaseAdvantage);
app.component('base-floating', BaseFloating);
app.component('base-city', BaseCity);
app.component('VueperSlides', VueperSlides);
app.component('VueperSlide', VueperSlide);

app.mount('#app');
