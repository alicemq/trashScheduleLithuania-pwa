import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/steps.css'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import custom CSS
import './assets/css/styles.css'
import './assets/css/generate.css' // Import generate component specific styles

const app = createApp(App)

app.use(router)

app.mount('#app')

// Initialize Bootstrap JS - must be after app is mounted
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Make Bootstrap modal accessible globally
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap
