<template>
  <header v-bind="$attrs" class="hero-section text-white text-center py-5 position-relative overflow-hidden"
    data-aos="fade-down">
    <div class="container position-relative">
      <img :src="photo" alt="Mukesh Dixena"
        class="rounded-circle mb-4 shadow-lg border border-4 border-white hero-photo" data-aos="zoom-in"
        data-aos-delay="100" />


      <h1 class="display-5 fw-bold mb-1" data-aos="fade-up" data-aos-delay="150">
        Mukesh Dixena
      </h1>

      <p class="lead mb-4" data-aos="fade-up" data-aos-delay="200">
        <span id="typed-subtitle"></span>
      </p>

      <div class="d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="250">
        <a :href="mailto" class="btn btn-outline-light btn-sm rounded-pill px-3">
          <i class="bi bi-envelope-fill me-1"></i>Email
        </a>
        <a :href="github" target="_blank" class="btn btn-outline-light btn-sm rounded-pill px-3">
          <i class="bi bi-github me-1"></i>GitHub
        </a>
        <a :href="linkedin" target="_blank" class="btn btn-outline-light btn-sm rounded-pill px-3">
          <i class="bi bi-linkedin me-1"></i>LinkedIn
        </a>
        <a :href="resume" target="_blank"
          class="btn btn-light btn-sm rounded-pill text-primary px-3 fw-semibold shadow-sm">
          <i class="bi bi-file-earmark-arrow-down me-1"></i>Resume
        </a>
      </div>
    </div>

    <!-- Background gradient overlay -->
    <div class="hero-overlay"></div>
  </header>
</template>

<script setup>
import Typed from 'typed.js'
import { onMounted, onBeforeUnmount } from 'vue'

import photo from '../assets/mukesh.jpg'

const mailto = 'mailto:mukesh.dixena2002@gmail.com'
const github = 'https://github.com/Mukeshdixena'
const linkedin = 'https://linkedin.com/in/mukesh-dixena'
const resume = '/resume/Mukesh_Dixena_Resume.pdf'

let typedInstance = null

onMounted(() => {
  typedInstance = new Typed('#typed-subtitle', {
    strings: [
      'Full-Stack Developer',
      'Java · Vue · Node · AI',
      'Microservices & Cloud Enthusiast'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1800,
    loop: true
  })
})

onBeforeUnmount(() => {
  if (typedInstance) typedInstance.destroy()
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(120deg, var(--primary) 0%, #4f46e5 50%, #4338ca 100%);
  position: relative;
  color: white;
  z-index: 1;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top center, rgba(255, 255, 255, 0.1), transparent 70%);
  z-index: 0;
}

h1 {
  font-size: 2.4rem;
}

.lead {
  font-size: 1.35rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.9rem;
  }

  .lead {
    font-size: 1rem;
  }
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.hero-section img {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.hero-section img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.hero-photo {
  width: 160px;
  height: auto;
  aspect-ratio: auto;
  object-fit: cover;
}
</style>
