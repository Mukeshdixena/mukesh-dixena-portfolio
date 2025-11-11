<template>
  <section v-bind="$attrs" class="py-5 bg-body-tertiary" id="projects" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title mb-5 text-center text-primary fw-bold" data-aos="fade-right">
        Projects
      </h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div
          v-for="(p, index) in projects"
          :key="p.id"
          class="col"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >
          <div class="project-card card border-0 shadow-sm h-100 overflow-hidden rounded-4">
            <div class="card-img-wrapper position-relative">
              <img
                :src="p.img"
                :alt="p.title"
                class="card-img-top project-img"
              />
              <!-- Overlay -->
              <div class="overlay d-flex align-items-center justify-content-center gap-3">
                <a
                  :href="p.live"
                  target="_blank"
                  class="btn btn-sm btn-light fw-semibold rounded-pill px-3 shadow-sm"
                >
                  <i class="bi bi-box-arrow-up-right me-1"></i> Live
                </a>
                <a
                  :href="p.code"
                  target="_blank"
                  class="btn btn-sm btn-outline-light fw-semibold rounded-pill px-3"
                >
                  <i class="bi bi-github me-1"></i> Code
                </a>
              </div>
            </div>

            <div class="card-body d-flex flex-column">
              <h5 class="fw-semibold mb-2">{{ p.title }}</h5>
              <p class="text-muted small flex-grow-1">{{ p.desc }}</p>
              <div class="d-flex flex-wrap gap-1 mt-3">
                <span
                  v-for="t in p.tech"
                  :key="t"
                  class="badge bg-primary-subtle text-primary-emphasis rounded-pill small px-2"
                  :title="t"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects'
</script>

<style scoped>
.section-title {
  font-size: 1.8rem;
  position: relative;
}
.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background-color: var(--primary);
  border-radius: 2px;
  margin: 10px auto 0;
}

/* Image + overlay */
.card-img-wrapper {
  position: relative;
  overflow: hidden;
}
.project-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
}
.project-card:hover .project-img {
  transform: scale(1.1);
  filter: brightness(0.8);
}

/* Overlay for buttons */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.project-card:hover .overlay {
  opacity: 1;
}

/* Card hover lift */
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.1);
}

.badge {
  font-weight: 500;
}

@media (max-width: 576px) {
  .project-img {
    height: 180px;
  }
}
</style>
