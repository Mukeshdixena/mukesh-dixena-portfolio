<template>
  <section v-bind="$attrs" class="py-5 bg-body-tertiary" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title mb-4 text-primary fw-bold" data-aos="fade-right">About Me</h2>
      
      <p class="lead text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
        I'm a <strong>Full-Stack Developer</strong> who builds scalable web apps and AI pipelines. 
        I enjoy tackling complex engineering challenges with <strong>Java + Spring Boot</strong> on the backend 
        and <strong>Vue.js</strong> on the frontend — delivering clean, maintainable, and high-performing solutions.
      </p>

      <div class="d-flex flex-wrap gap-2 mt-3" data-aos="fade-up" data-aos-delay="150">
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
  "Vue 3",
  "Node.js",
  "Spring Boot",
  "TensorFlow",
  "PostgreSQL",
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
}
</style>
