<template>
  <div class="project-detail">
    <div class="project-container">
      <div v-if="project" class="project-content">
        <div class="project-actions">
          <div class="retour-container">
            <router-link to="/projects" class="back-button">
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>

              {{ $t("projects.backToProjects") }}
            </router-link>
          </div>
        </div>
        <h1 class="project-title">
          {{ getLocalizedProjectTitle(project.id) }}
        </h1>

        <div class="project-image">
          <img
            v-if="project.id !== 5 && project.id !== 4"
            :src="project.image"
            alt="Image du projet"
          />
          <GameOfLife v-if="project.id === 5" />
          <StrongboxDemo v-if="project.id === 4" />
        </div>

        <div class="project-technologies">
          <h3>{{ $t("projects.technologiesUsed") }}</h3>
          <div class="tech-icons">
            <img
              v-for="(tech, index) in project.tech"
              :key="index"
              :src="tech"
              :alt="`Technologie ${index + 1}`"
              class="tech-icon"
            />
          </div>
        </div>

        <div class="project-description">
          <h3 class="project-description-title">
            {{ $t("projects.description") }}
          </h3>
          <p
            v-if="project.description"
            v-html="
              getLocalizedProjectDescription(project.id).replace(/\n/g, '<br>')
            "
          ></p>
          <p v-else>
            {{ $t("projects.descriptionComingSoon") }}
          </p>
        </div>

        <!-- Composant de détails techniques supplémentaires -->
        <ProjectDetails v-if="project" :projectId="project.id" />

        <div class="project-links">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-button github-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
            {{ $t("projects.viewOnGithub") }}
          </a>

          <a
            v-if="project.hasDownload"
            :href="project.downloadFile"
            download
            class="project-button download-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {{ $t("projects.downloadCode") }}
          </a>

          <a
            v-if="project.siteUrl"
            :href="project.siteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="project-button site-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {{ $t("projects.visitSite") }}
          </a>
        </div>
      </div>

      <div v-else class="project-not-found">
        <h2>{{ $t("projects.projectNotFound") }}</h2>
        <p>{{ $t("projects.projectDoesNotExist") }}</p>
        <router-link to="/projects" class="back-button">{{
          $t("projects.backToProjects")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import GameOfLife from "../components/GameOfLife.vue";
import StrongboxDemo from "../components/StrongboxDemo.vue";
import ProjectDetails from "../components/ProjectDetails.vue";

// Récupérer l'ID du projet depuis les paramètres de l'URL
const route = useRoute();
const { t } = useI18n();
const projectId = computed(() => parseInt(route.params.id));

// Fonction pour récupérer le titre localisé d'un projet
const getLocalizedProjectTitle = (projectId) => {
  return t(`projects.project${projectId}.title`) || `Projet ${projectId}`;
};

// Fonction pour récupérer la description localisée d'un projet
const getLocalizedProjectDescription = (projectId) => {
  return t(`projects.project${projectId}.description`) || "";
};

// Liste des projets (à terme, cette liste pourrait être importée d'un store ou d'un service)
const projectsList = ref([
  {
    id: 1,
    image: "/img/illustration.png",
    tech: ["/img/competences/python.svg"],
    description:
      "/",
    github: "",
    hasDownload: true,
    downloadFile: "/downloads/Escape-no-game.ipynb",
  },
  {
    id: 2,
    image: "/img/New-life.svg",
    tech: ["/img/competences/next.svg", "/img/competences/CSS.svg"],
    description:
      "/",
    github: "https://github.com/username/new-life",
    hasDownload: false,
  },
  {
    id: 3,
    image: "/img/bdd.png",
    tech: ["/img/competences/MySQL.svg"],
    description:
      "/",
    github: "",
    hasDownload: false,
  },
  {
    id: 4,
    image: "/img/strongbox.svg",
    tech: ["/img/competences/C++.svg", "/img/competences/Arduino.svg"],
    description:
      "/",
    github: "",
    hasDownload: true,
    downloadFile: "/downloads/strongbox.ino",
  },
  {
    id: 5,
    tech: ["/img/competences/C++.svg", "/img/competences/C.svg"],
    description:
      "/",
    github: "https://github.com/Lucacist/jeu-de-Conway-projet",
    hasDownload: false,
  },
  {
    id: 6,
    image: "/img/formation-tel-tab.png",
    tech: ["/img/competences/React.svg", "/img/competences/nodejs.svg"],
    description:
      "/",
    github: "",
    hasDownload: true,
    downloadFile: "/downloads/formation-site.zip",
  },
  {
    id: 7,
    image: "/img/ancien-portfolio.png",
    tech: [
      "/img/competences/HTML.svg",
      "/img/competences/CSS.svg",
      "/img/competences/javascript.svg",
    ],
    description:
      "/",
    github: "https://github.com/username/old-portfolio",
    hasDownload: false,
    siteUrl: "https://lucacist.github.io/Portfolio/src/Home.html",
  },
  {
    id: 8,
    image: "/img/Stagelink.png",
    tech: [
      "/img/competences/php.svg",
      "/img/competences/CSS.svg",
      "/img/competences/MySQL.svg",
    ],
    description:
      "/",
    github: "https://github.com/Lucacist/StageLinkV1",
    hasDownload: false,
  },
  {
    id: 9,
    image: "/img/guest_wifi.png",
    tech: [
      "/img/competences/php.svg",
      "/img/competences/CSS.svg",
      "/img/competences/MySQL.svg",
    ],
    description: "/",
    github: "",
    hasDownload: false,
  },
  {
    id: 10,
    image: "",
    tech: [
      "/img/competences/php.svg",
      "/img/competences/CSS.svg",
      "/img/competences/MySQL.svg",
    ],
    description: "/",
    github: "",
    hasDownload: false,
  },
  {
    id: 11,
    image: "",
    tech: [
      "/img/competences/php.svg",
      "/img/competences/CSS.svg",
      "/img/competences/MySQL.svg",
    ],
    description: "/",
    github: "",
    hasDownload: false,
  },
]);

// Trouver le projet correspondant à l'ID
const project = computed(() => {
  return projectsList.value.find((p) => p.id === projectId.value) || null;
});

// Titre de la page
onMounted(() => {
  if (project.value) {
    document.title = `${getLocalizedProjectTitle(
      project.value.id
    )} | Portfolio`;
  } else {
    document.title = `${t("projects.projectNotFound")} | Portfolio`;
  }
});
</script>

<style scoped>
.project-detail {
  padding: 2rem 1rem;
  height: auto;
  padding-top: 80px;
}

.project-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.project-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-align: center;
}

.project-image {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.project-image img {
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.project-technologies {
  margin: 2rem 0;
}

.tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.tech-icon {
  height: 40px;
  width: auto;
}

.project-description {
  margin: 2rem 0;
  line-height: 1.6;
}

.project-description-title {
  margin-bottom: 0.8rem;
}

.project-description p {
  text-align: justify;
  margin-bottom: 1rem;
}

.project-description ul,
.project-description ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.project-description li {
  margin-bottom: 0.5rem;
}

.project-actions {
  display: flex;
  justify-content: center;
}

.retour-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  padding: 0.75rem 0;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.back-button svg {
  width: 20px;
  height: 20px;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.project-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.project-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.github-button svg,
.download-button svg,
.site-button svg {
  width: 20px;
  height: 20px;
}

.project-not-found {
  text-align: center;
  padding: 3rem 1rem;
}

@media (max-width: 768px) {
  .project-container {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
