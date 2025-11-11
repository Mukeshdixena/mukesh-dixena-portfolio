<template>
  <section v-bind="$attrs" class="py-5 bg-body-tertiary" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title mb-5 text-primary fw-bold" data-aos="fade-right">
        Experience
      </h2>

      <div class="timeline position-relative ms-2">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.company"
          class="timeline-item position-relative ps-5 mb-5"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Timeline connector -->
          <div class="timeline-dot bg-primary"></div>

          <!-- Experience card -->
          <div class="card border-0 shadow-sm rounded-4 p-4 bg-white-subtle">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h5 class="fw-semibold mb-0 text-dark">
                {{ exp.role }}
                <small class="text-muted"> @ {{ exp.company }}</small>
              </h5>
              <small class="text-muted">{{ exp.duration }}</small>
            </div>

            <p class="small text-muted mb-2">
              <i class="bi bi-geo-alt-fill me-1 text-primary"></i>{{ exp.location }}
            </p>

            <ul class="mb-0 text-start">
              <li v-for="(point, i) in exp.points" :key="i" class="text-muted small">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '../data/experience'
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

/* Timeline structure */
.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  width: 3px;
  background: rgba(99, 102, 241, 0.3);
  border-radius: 3px;
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  top: 1rem;
  left: -2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px var(--primary);
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
