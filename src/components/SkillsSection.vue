<template>
  <section v-bind="$attrs" class="py-5 bg-body-tertiary" id="skills" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title mb-5 text-primary fw-bold" data-aos="fade-right">
        Technical Skills
      </h2>

      <div class="row g-4">
        <!-- Left column -->
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="skill-card card border-0 shadow-sm rounded-4 p-4 bg-white-subtle">
            <h6 class="fw-semibold mb-3 text-primary">
              <i class="bi bi-code-slash me-2"></i>Languages & Frameworks
            </h6>
            <div class="d-flex flex-wrap gap-2">
              <span
                v-for="(l, i) in skills.languages"
                :key="i"
                class="badge rounded-pill px-3 py-2 bg-primary-subtle text-primary-emphasis shadow-sm"
                data-aos="zoom-in"
                :data-aos-delay="i * 60"
              >
                {{ l }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right column -->
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="skill-card card border-0 shadow-sm rounded-4 p-4 bg-white-subtle">
            <h6 class="fw-semibold mb-3 text-primary">
              <i class="bi bi-cloud-check-fill me-2"></i>Cloud & Tools
            </h6>
            <div class="d-flex flex-wrap gap-2">
              <span
                v-for="(t, i) in skills.tools"
                :key="i"
                class="badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary-emphasis shadow-sm"
                data-aos="zoom-in"
                :data-aos-delay="i * 80"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/skills'
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
  margin-top: 8px;
}

/* Card style */
.skill-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

/* Badges */
.badge {
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.badge:hover {
  transform: scale(1.05);
  background-color: var(--primary);
  color: #fff !important;
}

/* Responsive tweaks */
@media (max-width: 576px) {
  .section-title {
    font-size: 1.6rem;
  }
  .badge {
    font-size: 0.85rem;
  }
}
</style>
