import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery'
import './assets/css/sass/style.css'

const pinia = createPinia()
const app = createApp(App);

app.use(pinia);
app.use(router);


app.mount("#app");
