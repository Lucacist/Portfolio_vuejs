<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="projects-page">
    <div class="page-header">
      <h1>{{ t('projects.title') }}</h1>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding-top: 80px; /* Pour la navbar fixe */
}

.page-header {
  background: var(--background-color-alt);
  padding: 3rem 0;
  text-align: center;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.page-header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
  transition: background-color 0.3s ease;
}
</style>
