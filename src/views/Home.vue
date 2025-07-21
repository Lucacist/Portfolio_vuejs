<script setup>
import { useI18n } from "vue-i18n";
import Carousel from "../components/Carousel.vue";
import projetetcv from "../components/projetetcv.vue";
import propositions_projets from "../components/propositions_projets.vue";

const { t } = useI18n();
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <h1>{{ t("home.title") }}</h1>
        <p>{{ t("home.subtitle") }}</p>
        <div class="hero-buttons">
          <a href="https://www.linkedin.com/in/luca-fourfooz-593978336/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              fill="none"
              viewBox="0 0 54 54"
            >
              <g clip-path="url(#a)">
                <path
                  fill="#fff"
                  d="M45 49.5h-3.758a4.5 4.5 0 0 1-4.5-4.5V32.918a2.07 2.07 0 0 0-1.552-2.093 1.889 1.889 0 0 0-1.508.428 1.913 1.913 0 0 0-.675 1.462V45a4.5 4.5 0 0 1-4.5 4.5H24.75a4.5 4.5 0 0 1-4.5-4.5V32.715a14.625 14.625 0 1 1 29.25 0V45a4.5 4.5 0 0 1-4.5 4.5ZM34.875 26.303a8.404 8.404 0 0 1 1.057 0 6.547 6.547 0 0 1 5.31 6.525V45H45V32.715a10.125 10.125 0 1 0-20.25 0V45h3.758V32.715a6.413 6.413 0 0 1 6.367-6.412ZM13.5 49.5H9A4.5 4.5 0 0 1 4.5 45V22.5A4.5 4.5 0 0 1 9 18h4.5a4.5 4.5 0 0 1 4.5 4.5V45a4.5 4.5 0 0 1-4.5 4.5ZM9 22.5V45h4.5V22.5H9Zm2.25-6.75a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5Zm0-9a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h54v54H0z" />
                </clipPath>
              </defs>
            </svg>

            Linkedin</a
          >
          <a href="https://github.com/Lucacist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="58"
              fill="none"
              viewBox="0 0 60 58"
            >
              <path
                fill="#fff"
                d="M55.976 14.806c-2.683-4.555-6.322-8.161-10.918-10.82C40.461 1.33 35.443 0 30 0S19.537 1.33 14.94 3.987C10.345 6.645 6.706 10.25 4.023 14.806 1.341 19.36 0 24.334 0 29.725c0 6.478 1.907 12.303 5.723 17.476 3.815 5.174 8.743 8.754 14.784 10.741.703.13 1.224.038 1.563-.27a1.51 1.51 0 0 0 .507-1.161c0-.078-.006-.774-.02-2.09a356.31 356.31 0 0 1-.02-3.445l-.897.154c-.573.104-1.296.148-2.169.136a16.676 16.676 0 0 1-2.714-.271 6.093 6.093 0 0 1-2.618-1.16 4.913 4.913 0 0 1-1.718-2.38l-.39-.891c-.26-.593-.67-1.252-1.23-1.974-.56-.723-1.127-1.213-1.7-1.47l-.273-.195a2.858 2.858 0 0 1-.508-.465 2.123 2.123 0 0 1-.351-.542c-.079-.18-.014-.329.195-.445.208-.117.585-.173 1.133-.173l.78.115c.521.104 1.166.413 1.934.929a6.268 6.268 0 0 1 1.895 2.012c.599 1.058 1.32 1.865 2.167 2.42.847.554 1.7.831 2.559.831.859 0 1.601-.064 2.226-.192a7.826 7.826 0 0 0 1.758-.581c.234-1.73.872-3.059 1.914-3.988-1.484-.154-2.819-.387-4.004-.696-1.184-.31-2.409-.813-3.671-1.51-1.264-.697-2.312-1.562-3.145-2.593-.833-1.033-1.517-2.388-2.05-4.065-.534-1.677-.801-3.612-.801-5.806 0-3.123 1.029-5.78 3.086-7.974-.964-2.348-.873-4.98.273-7.895.755-.233 1.875-.058 3.36.522 1.484.58 2.57 1.078 3.261 1.49.69.413 1.244.762 1.66 1.045A27.975 27.975 0 0 1 30 14.36c2.578 0 5.079.336 7.501 1.006l1.484-.928c1.015-.62 2.214-1.188 3.593-1.704 1.38-.515 2.436-.658 3.166-.425 1.171 2.916 1.275 5.548.311 7.896 2.057 2.193 3.087 4.851 3.087 7.974 0 2.193-.268 4.134-.801 5.825-.534 1.69-1.223 3.044-2.07 4.064-.846 1.02-1.901 1.877-3.164 2.574-1.263.697-2.488 1.2-3.672 1.51-1.185.31-2.52.542-4.004.697 1.354 1.161 2.03 2.993 2.03 5.496v8.166c0 .465.164.852.49 1.161.325.31.839.4 1.542.27 6.043-1.986 10.97-5.566 14.786-10.74C58.092 42.027 60 36.203 60 29.725c-.001-5.392-1.343-10.365-4.024-14.92Z"
              />
            </svg>
            GitHub</a
          >
        </div>
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
    <propositions_projets />
    <projetetcv />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding-top: 80px;
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
  gap: 1rem;
}

.hero-section h1 {
  font-size: 3rem;
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

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-buttons a {
  font-size: 1rem;
  background-color: var(--text-color);
  color: var(--background-color);
  padding: 0.3rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.hero-buttons a svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.hero-buttons a:hover svg{
  transform: rotate(-10deg);
}

.hero-buttons a:hover {
  transform: scale(1.05);
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
  margin: 5rem auto;
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
