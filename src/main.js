import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Sidebar from "primevue/sidebar"
import InputText from "primevue/inputtext";

import 'primevue/resources/themes/lara-dark-teal/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'
import router from './router'


createApp(App).use(router)
    .use(PrimeVue)
    .component('Button', Button)
    .component('Sidebar', Sidebar)
    .component('InputText', InputText)
    .mount('#app')
