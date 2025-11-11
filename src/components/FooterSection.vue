<template>
  <footer v-bind="$attrs" class="footer-section bg-dark text-white py-5 text-center" data-aos="fade-up">
    <div class="container">
      <div class="mb-3">
        <a :href="github" target="_blank" class="social-link mx-2" aria-label="GitHub">
          <i class="bi bi-github fs-4"></i>
        </a>
        <a :href="linkedin" target="_blank" class="social-link mx-2" aria-label="LinkedIn">
          <i class="bi bi-linkedin fs-4"></i>
        </a>
        <a :href="mailto" class="social-link mx-2" aria-label="Email">
          <i class="bi bi-envelope-fill fs-4"></i>
        </a>
      </div>

      <p class="mb-1 small fw-semibold">
        © 2025 Mukesh Dixena — Full-Stack Developer
      </p>
      <p class="small text-secondary mb-0">
        Made with ❤️ using <span class="text-primary">Vue 3</span> & Bootstrap 5
      </p>
    </div>
  </footer>
</template>

<script setup>
const github = 'https://github.com/Mukeshdixena'
const linkedin = 'https://linkedin.com/in/mukesh-dixena'
const mailto = 'mailto:mukesh.dixena2002@gmail.com'
</script>

<style scoped>
.footer-section {
  position: relative;
  overflow: hidden;
}

.social-link {
  color: #ffffff;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.social-link:hover {
  opacity: 1;
  color: var(--primary);
  transform: translateY(-2px);
}

footer p {
  letter-spacing: 0.3px;
}
</style>
