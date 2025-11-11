<template>
  <section v-bind="$attrs" class="py-5 bg-body-tertiary" data-aos="fade-up">
    <div class="container text-center">
      <h2 class="section-title mb-5 text-primary fw-bold" data-aos="fade-right">
        Get in Touch
      </h2>

      <div class="card border-0 shadow-sm p-5 mx-auto rounded-4 bg-white-subtle" style="max-width: 600px;">
        <p class="lead text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
          I’m open to new opportunities, freelance projects, or collaboration ideas.
          Let’s build something impactful together 🚀
        </p>

        <div class="d-flex justify-content-center gap-3 mb-4" data-aos="fade-up" data-aos-delay="150">
          <a :href="mailto" class="btn btn-primary rounded-pill">
            <i class="bi bi-envelope-fill me-2"></i>Email Me
          </a>
          <a :href="linkedin" target="_blank" class="btn btn-outline-primary rounded-pill">
            <i class="bi bi-linkedin me-2"></i>LinkedIn
          </a>
          <a :href="github" target="_blank" class="btn btn-outline-dark rounded-pill">
            <i class="bi bi-github me-2"></i>GitHub
          </a>
        </div>

        <p class="small text-muted mb-0">
          📍 Based in India · Available for remote work
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const mailto = 'mailto:mukesh.dixena2002@gmail.com'
const linkedin = 'https://linkedin.com/in/mukesh-dixena'
const github = 'https://github.com/Mukeshdixena'
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
  margin: 8px auto 0;
}
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}
</style>
