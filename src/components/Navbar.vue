<template>
  <nav
    class="navbar navbar-expand-lg fixed-top shadow-sm bg-body border-bottom"
    style="backdrop-filter: blur(10px); z-index: 1050;"
    data-aos="fade-down"
  >
    <div class="container">
      <!-- Brand -->
      <a
        class="navbar-brand fw-bold"
        :class="theme === 'dark' ? 'text-light' : 'text-primary'"
        href="#home"
        @click="scrollTo($event, '#home')"
      >
        <i class="bi bi-code-slash me-1"></i> Mukesh Dixena
      </a>

      <!-- Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto align-items-center">
          <li v-for="l in links" :key="l.href" class="nav-item mx-1">
            <a
              class="nav-link fw-semibold position-relative"
              :href="l.href"
              @click="scrollTo($event, l.href)"
              :class="theme === 'dark' ? 'text-light' : 'text-dark'"
            >
              {{ l.name }}
              <span class="underline"></span>
            </a>
          </li>

          <!-- Theme Toggle -->
          <li class="nav-item ms-3">
            <button
              class="btn btn-sm btn-outline-secondary rounded-circle theme-toggle-btn"
              @click="toggleTheme"
              :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              data-bs-toggle="tooltip"
            >
              <i
                :class="theme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-dark'"
                class="fs-5"
              ></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Tooltip } from 'bootstrap'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

const theme = ref(localStorage.getItem('theme') || 'light')

function applyTheme(t) {
  document.documentElement.setAttribute('data-bs-theme', t)
  localStorage.setItem('theme', t)
}

onMounted(() => {
  applyTheme(theme.value)
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new Tooltip(el))
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  applyTheme(theme.value)
}

function scrollTo(e, href) {
  e.preventDefault()
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const bsCollapse = document.querySelector('.navbar-collapse')
    if (bsCollapse && bsCollapse.classList.contains('show')) {
      new bootstrap.Collapse(bsCollapse).toggle()
    }
  } else {
    window.location = href
  }
}
</script>

<style scoped>
/* Base transition for dark/light switch */
.navbar {
  transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
  backdrop-filter: blur(10px);
}

/* Nav links */
.nav-link {
  position: relative;
  transition: color 0.25s ease;
}

.nav-link:hover {
  color: var(--primary) !important;
}

.nav-link .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover .underline {
  width: 100%;
}

/* Theme toggle button */
.theme-toggle-btn {
  border-color: rgba(108, 117, 125, 0.4);
  transition: all 0.3s ease;
}

.theme-toggle-btn:hover {
  background-color: var(--primary);
  color: #fff;
  border-color: var(--primary);
  transform: rotate(10deg);
}

/* Light mode */
[data-bs-theme='light'] .navbar {
  background-color: rgba(255, 255, 255, 0.9);
  color: #222;
}

/* Dark mode */
[data-bs-theme='dark'] .navbar {
  background-color: rgba(17, 24, 39, 0.9);
  color: #e5e7eb;
}

[data-bs-theme='dark'] .nav-link {
  color: #e5e7eb !important;
}

[data-bs-theme='dark'] .nav-link:hover {
  color: #a5b4fc !important;
}

[data-bs-theme='dark'] .theme-toggle-btn {
  border-color: rgba(255, 255, 255, 0.4);
  color: #e5e7eb;
}

[data-bs-theme='dark'] .theme-toggle-btn:hover {
  background-color: #a5b4fc;
  color: #111;
  border-color: #a5b4fc;
}

/* Brand hover */
.navbar-brand {
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: translateY(-2px);
}
</style>
