<template>
  <div class="carousel">
    <button class="nav prev" @click="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>

    <div class="carousel-content" ref="carouselContent">
      <div class="carousel-item" v-for="(skill, index) in skills" :key="index">
        <div class="card">
          <div class="card-content">
            <img :src="getSkillImagePath(skill)" :alt="getSkillName(skill)" />
            <span class="skill-name">{{ getSkillName(skill) }}</span>
          </div>
        </div>
      </div>
    </div>

    <button class="nav next" @click="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const skills = [
  "Adobe_XD.svg",
  "Arduino.svg",
  "C++.svg",
  "C.svg",
  "CSS.svg",
  "Figma.svg",
  "HTML.svg",
  "Inkscape.svg",
  "MySQL.svg",
  "React.svg",
  "Vue.js.svg",
  "bash.svg",
  "blender.svg",
  "github.svg",
  "javascript.svg",
  "next.svg",
  "nodejs.svg",
  "notion.svg",
  "php.svg",
  "Postgresql.svg",
  "python.svg",
];

const carouselContent = ref(null);
const isDarkTheme = ref(false);

// Fonction pour mettre à jour l'état du thème
function updateThemeState() {
  if (typeof document !== "undefined") {
    isDarkTheme.value =
      document.documentElement.getAttribute("data-theme") === "dark";
  }
}

// Observer les changements d'attribut sur l'élément HTML
let observer = null;

onMounted(() => {
  // Initialiser l'état du thème
  updateThemeState();

  // Configurer l'observateur de mutations pour détecter les changements de thème
  if (typeof MutationObserver !== "undefined") {
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          updateThemeState();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }
});

onUnmounted(() => {
  // Nettoyer l'observateur lors du démontage du composant
  if (observer) {
    observer.disconnect();
  }
});

function getSkillName(filename) {
  return filename.replace(".svg", "");
}

function getSkillImagePath(filename) {
  // Liste des icônes qui doivent s'adapter au thème
  const adaptiveIcons = ["github.svg", "notion.svg"];

  if (adaptiveIcons.includes(filename)) {
    // Pour les icônes adaptatives, créer des versions spécifiques au thème
    const baseName = filename.replace(".svg", "");
    const themeSuffix = isDarkTheme.value ? "-light" : "-dark";
    return `/img/competences/${baseName}${themeSuffix}.svg`;
  }

  // Pour les autres icônes, utiliser le chemin normal
  return `/img/competences/${filename}`;
}

function next() {
  if (carouselContent.value) {
    carouselContent.value.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  }
}

function prev() {
  if (carouselContent.value) {
    carouselContent.value.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: auto;
  overflow: hidden;
}

.carousel-content {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 2rem;
  scrollbar-width: none;
}

.carousel-content::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  flex: 0 0 auto;
  width: 100px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.card-content img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color);
}

.nav {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  background: var(--background-color);
  border: 1px solid var(--text-color);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1;
  opacity: 0.7;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

.prev svg {
margin-right: 3px;
}

.next svg {
margin-left: 3px;
}

.nav svg {
  color: var(--text-color);
  width: 18px;
  
}
</style>
