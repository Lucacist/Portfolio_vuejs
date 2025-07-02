<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="home">
    <div class="hero-section">
      <h1>{{ t('home.title') }}</h1>
      <p>{{ t('home.subtitle') }}</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding-top: 80px; /* Pour la navbar fixe */
}

.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: 2rem;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.hero-section p {
  font-size: 1.5rem;
  color: var(--text-color-light);
  max-width: 600px;
  margin: 0 auto;
  transition: color 0.3s ease;
}
</style>
