<template>
  <section
    id="about"
    v-bind="$attrs"
    class="py-5 bg-body-tertiary"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
  >
    <div class="container">
      <!-- Title -->
      <h2
        class="section-title mb-4 text-primary fw-bold"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        About Me
      </h2>

      <!-- Description -->
      <p
        class="lead text-muted mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I'm a <strong>Full-Stack Developer</strong> who builds scalable web apps and AI pipelines.
        I love tackling complex problems using <strong>Java + Spring Boot</strong> on the backend and
        <strong>Vue 3</strong> on the frontend — focusing on clean architecture,
        performance, and developer experience.
      </p>

      <!-- Skills badges -->
      <div
        class="d-flex flex-wrap gap-2 mt-3"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <span
          v-for="(skill, index) in skillsShort"
          :key="index"
          class="badge rounded-pill bg-primary-subtle text-primary-emphasis px-3 py-2 shadow-sm"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillsShort = [
  "Java",
  "Spring Boot",
  "Vue 3",
  "Node.js",
  "PostgreSQL",
  "TensorFlow",
  "Docker",
  "AWS"
]
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

.lead {
  line-height: 1.8;
  transition: color 0.3s ease;
}

[data-bs-theme="dark"] .lead {
  color: var(--text-muted);
}

/* Badge hover */
.badge {
  transition: all 0.3s ease;
}
.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}
</style>
