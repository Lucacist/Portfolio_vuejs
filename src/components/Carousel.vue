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
    
    <div class="carousel-container">
      <div class="fade-overlay left"></div>
      <div class="carousel-content" ref="carouselContent">
        <div class="carousel-track">
          <!-- Premier ensemble d'éléments (pour l'effet infini) -->
          <div class="carousel-item" v-for="(skill, index) in skills" :key="'start-'+index">
            <div class="card">
              <div class="card-content">
                <img :src="getSkillImagePath(skill)" :alt="getSkillName(skill)" />
                <span class="skill-name">{{ getSkillName(skill) }}</span>
              </div>
            </div>
          </div>
          
          <!-- Deuxième ensemble d'éléments (pour l'effet infini) -->
          <div class="carousel-item" v-for="(skill, index) in skills" :key="'end-'+index">
            <div class="card">
              <div class="card-content">
                <img :src="getSkillImagePath(skill)" :alt="getSkillName(skill)" />
                <span class="skill-name">{{ getSkillName(skill) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fade-overlay right"></div>
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
import { ref, onMounted, onUnmounted, nextTick } from "vue";

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
const isScrolling = ref(false);
const animationId = ref(null);

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
  // S'assurer que le composant est complètement monté avant d'initialiser
  nextTick(() => {
    // Initialiser l'état du thème
    updateThemeState();
  });

  // Configurer l'observateur de mutations pour détecter les changements de thème
  if (typeof MutationObserver !== "undefined" && typeof document !== "undefined") {
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
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
  // Nettoyer les ressources
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  
  // Arrêter l'animation de défilement automatique
  stopAutoScroll();
});

// Fonction pour arrêter proprement l'animation
function stopAutoScroll() {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
    animationId.value = null;
  }
  isScrolling.value = false;
}

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
  // Pause l'animation CSS
  const track = document.querySelector('.carousel-track');
  if (track && !isScrolling.value) {
    isScrolling.value = true;
    
    // Mettre en pause l'animation
    track.style.animationPlayState = 'paused';
    
    // Obtenir la position actuelle
    const currentTransform = getComputedStyle(track).transform;
    const matrix = new DOMMatrixReadOnly(currentTransform);
    const currentX = matrix.m41; // La valeur translateX actuelle
    
    // Déplacer manuellement
    track.style.transform = `translateX(${currentX - 300}px)`;
    
    // Reprendre l'animation après un délai
    setTimeout(() => {
      track.style.animationPlayState = 'running';
      track.style.transform = ''; // Réinitialiser la transformation manuelle
      isScrolling.value = false;
    }, 800);
  }
}

function prev() {
  // Pause l'animation CSS
  const track = document.querySelector('.carousel-track');
  if (track && !isScrolling.value) {
    isScrolling.value = true;
    
    // Mettre en pause l'animation
    track.style.animationPlayState = 'paused';
    
    // Obtenir la position actuelle
    const currentTransform = getComputedStyle(track).transform;
    const matrix = new DOMMatrixReadOnly(currentTransform);
    const currentX = matrix.m41; // La valeur translateX actuelle
    
    // Déplacer manuellement
    track.style.transform = `translateX(${currentX + 300}px)`;
    
    // Reprendre l'animation après un délai
    setTimeout(() => {
      track.style.animationPlayState = 'running';
      track.style.transform = ''; // Réinitialiser la transformation manuelle
      isScrolling.value = false;
    }, 800);
  }
}

// Fonction pour vérifier et ajuster le défilement infini
// Note: Cette fonction n'est plus utilisée avec l'animation CSS
function checkInfiniteScroll() {
  // Animation gérée par CSS maintenant
  return;
}

// Fonction pour démarrer le défilement automatique
// Note: Cette fonction n'est plus utilisée car l'animation est gérée par CSS
function startAutoScroll() {
  // Animation gérée par CSS maintenant
  return;
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: auto;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-content {
  overflow-x: hidden; /* Empêcher le défilement manuel */
  padding: 2rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  user-select: none; /* Empêcher la sélection de texte */
  touch-action: none; /* Désactiver les gestes tactiles */
}

.carousel-track {
  display: flex;
  gap: 1rem;
  width: fit-content; /* S'assurer que le track prend toute la largeur nécessaire */
  animation: autoScroll 60s linear infinite; /* Animation CSS directe */
}

/* Pause l'animation au survol */
.carousel-content:hover .carousel-track {
  animation-play-state: paused;
}

@keyframes autoScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-120px * 21 - 1rem * 21)); /* Largeur totale de tous les éléments */
  }
}

.carousel-content::-webkit-scrollbar {
  display: none;
}

/* Overlays pour l'effet de fondu sur les côtés */
.fade-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 150px; /* Largeur du fondu */
  z-index: 10; /* Augmenter le z-index pour s'assurer que les overlays sont au-dessus du contenu */
  pointer-events: none;
}

.fade-overlay.left {
  left: 0;
  background: linear-gradient(to right, var(--background-color) 0%, var(--background-color) 20%, transparent 100%);
}

.fade-overlay.right {
  right: 0;
  background: linear-gradient(to left, var(--background-color) 0%, var(--background-color) 20%, transparent 100%);
}

/* Styles spécifiques au thème sombre */
.dark-theme .fade-overlay.left {
  background: linear-gradient(to right, var(--background-color) 0%, var(--background-color) 20%, transparent 100%);
}

.dark-theme .fade-overlay.right {
  background: linear-gradient(to left, var(--background-color) 0%, var(--background-color) 20%, transparent 100%);
}

.carousel-item {
  flex: 0 0 auto;
  width: 120px;
  scroll-snap-align: center; /* Améliorer le comportement de défilement */
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
