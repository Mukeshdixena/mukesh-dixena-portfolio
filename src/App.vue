<template>
  <div id="app">
    <!-- Fixed Navbar -->
    <Navbar />

    <!-- Hero -->
    <HeroSection id="home" />

    <!-- Main Content -->
    <main>
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
      <AchievementsSection id="achievements" />
      <CertificatesSection id="certificates" />
      <ContactSection id="contact" />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Prevent sections from being hidden behind navbar */
section {
  scroll-margin-top: 80px;
}

/* Add a nice fade-in when navigating or loading */
body {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Global text rendering polish */
body,
html {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Give the app consistent vertical rhythm */
main > section {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
}
</style>
