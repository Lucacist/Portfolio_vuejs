<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import Carousel from "../components/Carousel.vue";
import projetetcv from "../components/projetetcv.vue";
import propositions_projets from "../components/propositions_projets.vue";
import SplitText from "../components/SplitText.vue";

const { t } = useI18n();
const showSubtitle = ref(false);
const showButtons = ref(false);

const handleTitleComplete = () => {
  showSubtitle.value = true;
};

const handleSubtitleComplete = () => {
  // Afficher les boutons après l'animation du sous-titre
  showButtons.value = true;
};
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <div class="hauteur">
          <h1>
            <SplitText
              :text="t('home.title')"
              className="my-text"
              :splitType="'chars'"
              :delay="80"
              :duration="0.5"
              :from="{ opacity: 0, y: 30 }"
              :to="{ opacity: 1, y: 0 }"
              :onLetterAnimationComplete="handleTitleComplete"
            />
          </h1>
          <p class="subtitle">
            <SplitText
              v-if="showSubtitle"
              :text="t('home.subtitle')"
              className="subtitle-text"
              :splitType="'chars'"
              :delay="80"
              :duration="0.5"
              :from="{ opacity: 0, y: 30 }"
              :to="{ opacity: 1, y: 0 }"
              :onLetterAnimationComplete="handleSubtitleComplete"
            />
          </p>
          <div class="hero-buttons" v-if="showButtons">
            <a
              href="https://www.linkedin.com/in/luca-fourfooz-593978336/"
              class="button-animation linkedin-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                fill="none"
                viewBox="0 0 54 54"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="var(--background-color)"
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
            <a
              href="https://github.com/Lucacist"
              class="button-animation github-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="58"
                fill="none"
                viewBox="0 0 60 58"
              >
                <path
                  fill="var(--background-color)"
                  d="M55.976 14.806c-2.683-4.555-6.322-8.161-10.918-10.82C40.461 1.33 35.443 0 30 0S19.537 1.33 14.94 3.987C10.345 6.645 6.706 10.25 4.023 14.806 1.341 19.36 0 24.334 0 29.725c0 6.478 1.907 12.303 5.723 17.476 3.815 5.174 8.743 8.754 14.784 10.741.703.13 1.224.038 1.563-.27a1.51 1.51 0 0 0 .507-1.161c0-.078-.006-.774-.02-2.09a356.31 356.31 0 0 1-.02-3.445l-.897.154c-.573.104-1.296.148-2.169.136a16.676 16.676 0 0 1-2.714-.271 6.093 6.093 0 0 1-2.618-1.16 4.913 4.913 0 0 1-1.718-2.38l-.39-.891c-.26-.593-.67-1.252-1.23-1.974-.56-.723-1.127-1.213-1.7-1.47l-.273-.195a2.858 2.858 0 0 1-.508-.465 2.123 2.123 0 0 1-.351-.542c-.079-.18-.014-.329.195-.445.208-.117.585-.173 1.133-.173l.78.115c.521.104 1.166.413 1.934.929a6.268 6.268 0 0 1 1.895 2.012c.599 1.058 1.32 1.865 2.167 2.42.847.554 1.7.831 2.559.831.859 0 1.601-.064 2.226-.192a7.826 7.826 0 0 0 1.758-.581c.234-1.73.872-3.059 1.914-3.988-1.484-.154-2.819-.387-4.004-.696-1.184-.31-2.409-.813-3.671-1.51-1.264-.697-2.312-1.562-3.145-2.593-.833-1.033-1.517-2.388-2.05-4.065-.534-1.677-.801-3.612-.801-5.806 0-3.123 1.029-5.78 3.086-7.974-.964-2.348-.873-4.98.273-7.895.755-.233 1.875-.058 3.36.522 1.484.58 2.57 1.078 3.261 1.49.69.413 1.244.762 1.66 1.045A27.975 27.975 0 0 1 30 14.36c2.578 0 5.079.336 7.501 1.006l1.484-.928c1.015-.62 2.214-1.188 3.593-1.704 1.38-.515 2.436-.658 3.166-.425 1.171 2.916 1.275 5.548.311 7.896 2.057 2.193 3.087 4.851 3.087 7.974 0 2.193-.268 4.134-.801 5.825-.534 1.69-1.223 3.044-2.07 4.064-.846 1.02-1.901 1.877-3.164 2.574-1.263.697-2.488 1.2-3.672 1.51-1.185.31-2.52.542-4.004.697 1.354 1.161 2.03 2.993 2.03 5.496v8.166c0 .465.164.852.49 1.161.325.31.839.4 1.542.27 6.043-1.986 10.97-5.566 14.786-10.74C58.092 42.027 60 36.203 60 29.725c-.001-5.392-1.343-10.365-4.024-14.92Z"
                />
              </svg>
              GitHub</a
            >
          </div>
        </div>
      </div>
      <img src="/img/fr.svg" alt="" />
    </div>
    <div class="hero-fleche">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="81"
        fill="none"
        viewBox="0 0 80 81"
      >
        <mask
          id="a"
          width="80"
          height="81"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style="mask-type: luminance"
        >
          <path fill="#fff" d="M80 .96H0v80h80v-80Z" />
        </mask>
        <g mask="url(#a)">
          <mask
            id="b"
            width="56"
            height="81"
            x="12"
            y="0"
            maskUnits="userSpaceOnUse"
            style="mask-type: luminance"
          >
            <path fill="#fff" d="M67.335.96h-54.67v80h54.67v-80Z" />
          </mask>
          <g mask="url(#b)">
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.936"
              d="M35.423 16.473c-.885 4.84-4.12 9.209-8.517 11.42a17.655 17.655 0 0 1 6.968 6.776c.968 1.687 1.632 3.733.94 5.53-.995 2.517-4.258 3.346-6.94 2.931-4.895-.746-8.96-4.313-11.642-8.489-.968-1.493-1.798-3.125-2.074-4.894-.415-2.323.166-4.757.995-7.024a36.963 36.963 0 0 1 9.679-14.629c2.378-2.212 5.116-4.12 8.213-4.977 3.097-.858 13.522-.387 20.684 3.07 7.964 4.202 9.983 10.618 11.227 31.91M33.847 49.325c-.802 7.355 1.19 14.739 1.05 22.122-.027 1.66-.165 3.374-.884 4.895-.719 1.52-2.074 2.793-3.733 3.014-2.655.332-4.84-2.102-6-4.535-2.296-4.84-2.49-10.398-2.517-15.735-.028-5.862.138-11.724.47-17.587"
            />
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.936"
              d="M32.686 42.522c-.138 1.853-.055 3.457.58 5.199.637 1.742 1.881 3.346 3.623 4.01 2.904 1.133 6.305-.664 7.91-3.319 1.63-2.654 1.852-5.917 1.741-9.014-.083-2.517-.36-5.144-1.687-7.3-1.327-2.158-3.954-3.679-6.388-3.015-2.516.691-3.954 3.374-4.286 5.973"
            />
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.936"
              d="M44.798 48.523c.691 1.963 2.102 3.927 4.148 4.286 2.184.387 4.286-1.244 5.475-3.097 2.655-4.176 2.295-9.762.221-14.241-.857-1.88-2.101-3.706-3.982-4.535-1.88-.83-4.507-.222-5.281 1.686"
            />
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.936"
              d="M54.56 49.463c.691 1.963 1.631 2.987 3.705 3.319 2.185.387 4.286-1.245 5.475-3.098 2.655-4.175 2.296-9.761.222-14.24-.858-1.881-2.102-3.706-3.982-4.536-1.88-.83-4.922-.028-5.697 2.295"
            />
          </g>
        </g>
      </svg>
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
  min-height: calc(100vh - 80px - 4rem);
  text-align: center;
  padding: 2rem;
  gap: 1rem;
}

.hero-section .hauteur {
  min-height: 252px;
  display: flex;
  align-items: center;
  flex-direction: column;
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

.subtitle {
  min-height: 5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  min-height: 36px;
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

.hero-fleche {
  height: 4rem;
  display: flex;
  justify-content: center;
}

.hero-fleche svg {
  width: 50px;
  height: 50px;
  animation: translate 2s infinite;
}

@keyframes translate {
  0% {
    transform: translateY(0px);
  }
  15% {
    transform: translateY(10px);
  }
  30% {
    transform: translateY(3px);
  }
  40% {
    transform: translateY(10px);
  }
  55% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
}

.hero-buttons a svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.hero-buttons a:hover svg {
  transform: rotate(-10deg);
}

.hero-buttons a:hover {
  transform: scale(1.05);
}

.presentation {
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
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
    height: calc(100vh - 80px - 2rem);
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
  }
}

.placeholder {
  opacity: 0;
  visibility: hidden;
  user-select: none;
  display: inline-block;
}

.button-animation {
  opacity: 0;
  transform: translateY(20px);
  animation-fill-mode: forwards;
}

.linkedin-button {
  animation: fadeInUp 0.6s ease 0.1s forwards;
}

.github-button {
  animation: fadeInUp 0.6s ease 0.3s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
