<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import GameOfLife from "./GameOfLife.vue";

const { t } = useI18n();


// Créer un tableau de projets pour vue3-masonry
const projects = ref([
  {
    id: 1,
    image: "/img/signal.png",
    tech: ["/img/competences/python.svg"],
    title: "Projet Escape no Game",
  },
  {
    id: 2,
    image: "/img/New-life.svg",
    tech: ["/img/competences/nodejs.svg", "/img/competences/CSS.svg"],
    title: "Projet New Life",
  },
  {
    id: 3,
    image: "/img/bdd.png",
    tech: ["/img/competences/MySQL.svg"],
    title: "Projet Base de Données",
  },
  {
    id: 4,
    image: "/img/strongbox.svg",
    tech: ["/img/competences/C++.svg", "/img/competences/Arduino.svg"],
    title: "Projet Strongbox 3000",
  },
  {
    id: 5,
    tech: ["/img/competences/C++.svg", "/img/competences/C.svg"],
    title: "Jeu de la Vie de Conway",
  },
  {
    id: 6,
    image: "/img/signal.png",
    tech: [],
    title: "Projet Escape no Game",
  },
  {
    id: 7,
    image: "/img/signal.png",
    tech: [],
    title: "Projet Escape no Game",
  },
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
            {{ item.title }}
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
  width: 50%;
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
