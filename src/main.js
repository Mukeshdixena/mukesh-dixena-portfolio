// main.js
import { createApp, nextTick } from 'vue'
import App from './App.vue'

// Bootstrap core
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap' // ensures JS components work

// Icons (recommended)
import 'bootstrap-icons/font/bootstrap-icons.css'

// AOS (Animate On Scroll)
import 'aos/dist/aos.css'
import AOS from 'aos'

// Custom global styles
import './styles.css'

// Create Vue app
const app = createApp(App)

// Mount app
app.mount('#app')

// Initialize AOS after Vue render
nextTick(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
    offset: 80,
  })
})

// Re-init AOS on updates (e.g. when content changes)
document.addEventListener('DOMContentLoaded', () => AOS.refresh())

// Enable Bootstrap tooltips globally
document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el))
})
