<template>
  <section v-bind="$attrs" class="py-5 bg-body-tertiary" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title mb-5 text-primary fw-bold" data-aos="fade-right">
        Certificates
      </h2>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div
          v-for="(cert, i) in certificates"
          :key="i"
          class="col"
          data-aos="zoom-in"
          :data-aos-delay="i * 100"
        >
          <div class="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white-subtle hover-card">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-award-fill text-primary fs-4 me-2"></i>
              <h6 class="fw-semibold mb-0">{{ cert.title }}</h6>
            </div>
            <p class="small text-muted mb-3">{{ cert.org }}</p>
            <a
              :href="cert.link"
              target="_blank"
              class="btn btn-sm btn-outline-primary rounded-pill fw-semibold"
            >
              View Certificate →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { certificates } from '../data/certificates'
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

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}
</style>
