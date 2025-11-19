// main.js
import { createApp, nextTick } from "vue";
import App from "./App.vue";

// =============================
// 🧩 Bootstrap Core & Icons
// =============================
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // enables JS components like Collapse, Tooltip, Modal
import "bootstrap-icons/font/bootstrap-icons.css";

// =============================
// 🎞️ AOS (Animate On Scroll)
// =============================
import "aos/dist/aos.css";
import AOS from "aos";

// =============================
// 🎨 Custom Global Styles
// =============================
import "./styles.css";

// =============================
// 🚀 Create & Mount Vue App
// =============================
const app = createApp(App);
app.mount("#app");

// =============================
// ✨ Initialize AOS
// =============================
nextTick(() => {
  AOS.init({
    duration: 800,           // Animation duration (ms)
    once: false,             // 👈 Animations replay when re-entering viewport
    mirror: true,            // 👈 Trigger on scroll-up
    offset: 80,              // Distance from viewport to start animation
    easing: "ease-out-cubic" // Smooth easing
  });

  // Make sure all dynamically loaded elements get AOS applied
  AOS.refreshHard();
});

// Ensure AOS refreshes after DOM fully loaded
document.addEventListener("DOMContentLoaded", () => {
  AOS.refresh();
});

// =============================
// 💬 Enable Bootstrap Tooltips
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
});
