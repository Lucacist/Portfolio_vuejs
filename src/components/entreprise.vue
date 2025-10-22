<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="entreprise">
    <div class="entreprise-content">
      <h2>{{ t("home.entreprise.title") }}</h2>
      <p class="subtitle">{{ t("home.entreprise.subtitle") }}</p>
      <a href="https://www.assystem.com/fr/">
        <span>👀</span> ​{{ t("home.entreprise.text") }}
      </a>
    </div>
    <div class="entreprise-image">
      <img
        class="assystem-logo"
        src="/img/entreprise/Logo_Assystem_2.svg"
        alt=""
      />
      <div class="entreprise-image2">
        <img class="assystem-logo" src="/img/entreprise/edf.svg" alt="" />

        <img
          class="assystem-logo"
          src="/img/entreprise/Logo_Orano.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.entreprise {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  margin: 5rem auto;
  gap: 1rem;
  width: 90%;
}
.entreprise-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
.assystem-logo {
  height: 150px;
}

.entreprise-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.entreprise-image2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}
.entreprise-image2 img {
  height: 50px;
}

a {
  color: var(--background-color);
  background-color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1rem;
  width: fit-content;
  border-radius: 5px;
  transition: all 0.3s ease;
}

a:hover span {
  transform: rotate(-10deg);
}

a span {
    font-size: 1.3rem;
}
</style>
