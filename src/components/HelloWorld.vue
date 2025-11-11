<template>
  <div class="welcome-banner text-center py-5" data-aos="fade-up">
    <h2 class="fw-bold mb-3">{{ title }}</h2>
    <p class="text-muted lead">{{ subtitle }}</p>
    <button @click="showCount" class="btn btn-primary rounded-pill px-4 mt-3">
      {{ btnText }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref("👋 Welcome to My Portfolio")
const subtitle = ref("Explore my work, projects, and achievements below!")
const btnText = ref("Start Exploring 🚀")

function showCount() {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
}
</script>

<style scoped>
.welcome-banner {
  background: linear-gradient(90deg, var(--primary), #4f46e5);
  color: #fff;
  border-radius: 1.2rem;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}
button {
  transition: transform 0.3s ease;
}
button:hover {
  transform: translateY(-3px);
}
</style>
