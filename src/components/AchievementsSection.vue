<template>
  <section v-bind="$attrs" class="py-5 bg-body-tertiary" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title mb-5 text-primary fw-bold" data-aos="fade-right">
        Achievements
      </h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="col"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >
          <div class="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white-subtle">
            <div class="d-flex align-items-start mb-2">
              <i class="bi bi-trophy-fill text-primary fs-3 me-3"></i>
              <h5 class="fw-semibold mb-0">{{ achievement.title }}</h5>
            </div>
            <p class="text-muted small mb-0">{{ achievement.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const achievements = [
  {
    title: "Runner-up at IIT Bombay Techfest (CoDeCode)",
    desc: "Recognized for designing high-performance algorithms and optimizing code efficiency under timed conditions."
  },
  {
    title: "5★ on HackerRank & 600+ CodeChef Problems",
    desc: "Proven DSA proficiency with consistent top-tier performance across multiple competitive programming platforms."
  },
  {
    title: "30+ Competitive Coding Contests",
    desc: "Regular participant in national-level contests to strengthen problem-solving and algorithmic thinking."
  }
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
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
</style>
