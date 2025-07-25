<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import GameOfLife from "./GameOfLife.vue";

const { t } = useI18n();

// Fonction pour récupérer le titre localisé d'un projet
const getLocalizedProjectTitle = (projectId) => {
  return t(`projects.project${projectId}.title`) || "";
};

// État pour suivre le thème actuel
const isDarkMode = ref(false);

// Mettre à jour l'état du thème
const updateThemeState = () => {
  isDarkMode.value = document.documentElement.getAttribute('data-theme') === 'dark';
};

// Observer les changements de thème
onMounted(() => {
  // Initialiser l'état du thème
  updateThemeState();
  
  // Configurer l'observateur pour détecter les changements de thème
  const observer = new MutationObserver(updateThemeState);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
  
  // Nettoyer l'observateur lors du démontage
  onUnmounted(() => {
    observer.disconnect();
  });
});

// Créer un tableau de projets pour vue3-masonry
const projects = ref([
  {
    id: 1,
    image: "/img/signal.png",
    tech: ["/img/competences/python.svg"]
  },
  {
    id: 2,
    image: "/img/New-life.svg",
    tech: ["/img/competences/next.svg", "/img/competences/CSS.svg", "/img/competences/Postgresql.svg"]
  },
  {
    id: 3,
    image: "/img/bdd.png",
    tech: ["/img/competences/MySQL.svg"]
  },
  {
    id: 4,
    image: "/img/strongbox.svg",
    tech: ["/img/competences/C++.svg", "/img/competences/Arduino.svg"]
  },
  {
    id: 5,
    tech: ["/img/competences/C++.svg", "/img/competences/C.svg"]
  },
  {
    id: 6,
    image: "/img/formation-tel-tab.png",
    tech: ["/img/competences/next.svg", "/img/competences/CSS.svg", "/img/competences/Postgresql.svg"]
  },
  {
    id: 7,
    image: "/img/ancien-portfolio.png",
    tech: ["/img/competences/HTML.svg", "/img/competences/CSS.svg", "/img/competences/javascript.svg"]
  },
  {
    id: 8,
    image: "/img/Stagelink.png",
    tech: ["/img/competences/php.svg", "/img/competences/CSS.svg", "/img/competences/MySQL.svg"]
  },
  {
    id: 9,
    get image() { return isDarkMode.value ? "/img/guest-wifi.svg" : "/img/dark-guest-wifi.svg"; },
    tech: ["/img/competences/php.svg", "/img/competences/CSS.svg", "/img/competences/MySQL.svg"]
  },
  {
    id: 10,
    get image() { return isDarkMode.value ? "/img/CET.svg" : "/img/Dark-cet.svg"; },
    tech: ["/img/competences/php.svg", "/img/competences/CSS.svg", "/img/competences/MySQL.svg"]
  },
  {
    id: 11,
    image: "/img/portail-assystem.png",
    tech: ["/img/competences/Vue.js.svg", "/img/competences/Microsoft_.NET_logo.svg", "/img/competences/CSS.svg", "/img/competences/Postgresql.svg"]
  },
  {
    id: 12,
    image: "/img/clock.png",
    tech: ["/img/competences/HTML.svg", "/img/competences/CSS.svg"]
  },
  {
    id: 13,
    image: "/img/weather-station.png",
    tech: ["/img/competences/Arduino.svg", "/img/competences/C++.svg"]
  }
]);
</script>

<template>
  <div class="cont-projets-wrapper">
    <masonry-wall
      :items="projects"
      :column-width="300"
      :gap="16"
      class="cont-projets"
    >
      <template #default="{ item }">
        <router-link :to="{ name: 'project-detail', params: { id: item.id } }" class="objet-link">
          <div class="objet">
            <div class="image">
              <img v-if="item.id !== 5" :src="item.image" alt="img" />
              <GameOfLife v-else />
            </div>
            <div class="icone">
              <img
                v-for="(tech, index) in item.tech"
                :key="index"
                :src="tech"
                alt="tech"
              />
            </div>
            <div class="description">
              {{ getLocalizedProjectTitle(item.id) }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </router-link>
      </template>
    </masonry-wall>
  </div>
</template>

<style scoped>
.cont-projets-wrapper {
  padding: 2rem 4vw;
  max-width: 1500px;
  margin: 0 auto;
}

.cont-projets {
  margin: 0 auto;
}

.objet-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
}

.objet {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
}
.objet:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px var(--shadow-color);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
.objet:hover svg {
  transform: rotate(0deg);
}
.image img {
  width: 70%;
}
.icone {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.icone img {
  height: 30px;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.description {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: var(--text-color);
}
.description svg {
  width: 20px;
  color: var(--text-color);
  transform: rotate(45deg);
  border: 1px solid var(--text-color);
  border-radius: 50%;
  padding: 0.2rem;
  transition: transform 0.3s ease;
}
</style>
