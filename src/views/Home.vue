<script setup>
import { useI18n } from "vue-i18n";
import Carousel from "../components/Carousel.vue";

const { t } = useI18n();
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <h1>{{ t("home.title") }}</h1>
        <p>{{ t("home.subtitle") }}</p>
      </div>
      <img src="/img/fr.svg" alt="" />
    </div>
    <div class="presentation">
      <p>{{ t("home.presentationText") }}</p>
    </div>
    <div class="carousell">
      <h2>{{ t("home.carouselTitle") }}</h2>
    <Carousel />
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding-top: 80px; /* Pour la navbar fixe */
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.container img {
  width: 80%;
  margin: 0 auto;
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

.presentation {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4.5rem;
  text-align: center;
  font-style: italic;
  font-size: 1rem;
  color: var(--text-color);
  font-weight: 500;
}

.carousell {
    width: 90%;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1200px;
    margin:5rem auto;
  }

@media (max-width: 950px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    height: calc(100vh - 80px);
  }
  .hero-section {
    min-height: 0;
  }
  .container img {
    width: 40%;
    margin: 0 auto;
  }
}

@media (max-width: 700px) {
  .container img {
    width: 70%;
    margin: 0 auto;
  }
  .hero-section h1 {
    font-size: 2.5rem;
  }
  .hero-section p {
    font-size: 1.5rem;
  }
}

@media (max-width: 600px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  .hero-section p {
    font-size: 1rem;
  }
  .container {
    height: calc(100vh - 150px);
    margin-bottom: 80px;
  }
}
</style>
