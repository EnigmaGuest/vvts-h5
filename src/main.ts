import {createApp} from 'vue'

import App from './App.vue'
import router from './router'
import {setupStore} from "@/store";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "tailwindcss/tailwind.css"
import "./assets/index"
import "amfe-flexible/index.js"

const app = createApp(App)
setupStore(app)
app.use(router)
app.mount('#app');