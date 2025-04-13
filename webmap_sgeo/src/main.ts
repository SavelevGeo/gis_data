import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "vue3-openlayers/dist/vue3-openlayers.css";

import OpenLayersMap from "vue3-openlayers";

const app = createApp(App);

app.use(OpenLayersMap);

app.mount('#app')
