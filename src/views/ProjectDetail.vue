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

              Retour aux projets
            </router-link>
          </div>
        </div>
        <h1 class="project-title">{{ project.title }}</h1>

        <div class="project-image">
          <img
            v-if="project.id !== 5"
            :src="project.image"
            alt="Image du projet"
          />
          <GameOfLife v-else />
        </div>

        <div class="project-technologies">
          <h3>Technologies utilisées</h3>
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
          <h3>Description</h3>
          <p v-if="project.description" v-html="project.description.replace(/\n/g, '<br>')">
          </p>
          <p v-else>
            Description détaillée du projet à venir...
          </p>
        </div>
        
        <div class="project-links">
          <a 
            v-if="project.github" 
            :href="project.github" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="project-button github-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Voir sur GitHub
          </a>
          
          <a 
            v-if="project.hasDownload" 
            :href="project.downloadFile" 
            download 
            class="project-button download-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Télécharger le code
          </a>
        </div>
      </div>

      <div v-else class="project-not-found">
        <h2>Projet non trouvé</h2>
        <p>Le projet que vous recherchez n'existe pas.</p>
        <router-link to="/projects" class="back-button"
          >Retour aux projets</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import GameOfLife from "../components/GameOfLife.vue";

// Récupérer l'ID du projet depuis les paramètres de l'URL
const route = useRoute();
const projectId = computed(() => parseInt(route.params.id));

// Liste des projets (à terme, cette liste pourrait être importée d'un store ou d'un service)
const projectsList = ref([
  {
    id: 1,
    image: "/img/illustration.png",
    tech: ["/img/competences/python.svg"],
    title: "Projet Escape no Game",
    description:
      "Ce projet vise à développer une solution garantissant la communication en zones sans réseau, comme celles où les ondes sont bloquées. Suite à l'infiltration de l'agent K57, capturé dans une base de cyberpirates inaccessible aux méthodes classiques, l'objectif est d'éviter que de telles situations se reproduisent en concevant une technologie adaptée à ces environnements critiques. Comment ça fonctionne ? L'agent parle dans un micro, où le son est converti en un signal qui varie selon ce qu'il dit et la manière dont il le dit. Ce signal est caractérisé par son intensité, sa fréquence et son amplitude. Ce signal est ensuite transmis par un émetteur sur une fréquence inaudible, ce qui permet d'envoyer des messages sans risque d'être détecté. L'agent chargé de l'écoute intercepte ce signal, le décode, et retranscrit la voix et le message de l'émetteur. Pour analyser le signal sonore, il est d'abord converti en signal électrique, dont la tension évolue en synchronisation avec le signal sonore et partage la même période Cette méthode permet non seulement de retranscrire le message, mais aussi de capter les émotions exprimées au moment de l'enregistrement, en observant les variations des différentes courbes.",
    github: "",
    hasDownload: true,
    downloadFile: "/downloads/Escape-no-game.ipynb"
  },
  {
    id: 2,
    image: "/img/New-life.svg",
    tech: ["/img/competences/next.svg", "/img/competences/CSS.svg"],
    title: "Projet New Life",
    description:
      "Application web moderne développée avec Next.js et CSS avancé.",
    github: "https://github.com/username/new-life",
    hasDownload: false
  },
  {
    id: 3,
    image: "/img/bdd.png",
    tech: ["/img/competences/MySQL.svg"],
    title: "Projet Base de Données",
    description:
      "Conception et implémentation d'une base de données MySQL optimisée pour les performances.",
    github: "",
    hasDownload: true,
    downloadFile: "/downloads/database-project.zip"
  },
  {
    id: 4,
    image: "/img/strongbox.svg",
    tech: ["/img/competences/C++.svg", "/img/competences/Arduino.svg"],
    title: "Projet Strongbox 3000",
    description:
      "Un système de sécurité physique développé avec C++ et Arduino.",
    github: "https://github.com/username/strongbox-3000",
    hasDownload: false
  },
  {
    id: 5,
    tech: ["/img/competences/C++.svg", "/img/competences/C.svg"],
    title: "Jeu de la Vie de Conway",
    description: "Le Jeu de la Vie est un automate cellulaire fascinant créé par le mathématicien John Conway en 1970. Ce projet est une implémentation interactive qui permet d'explorer les motifs émergents et les comportements complexes qui peuvent naître de règles très simples.<br><br>Il a été réalisé en moins d'une semaine dans le cadre d'un travail en groupe de deux personnes, en utilisant la programmation orientée objet (POO) avec le langage C++.<br><br>Le fonctionnement du jeu repose sur quelques règles simples :<br>- Une cellule morte entourée exactement de trois voisines vivantes devient vivante<br>- Une cellule vivante reste en vie si elle a deux ou trois voisines vivantes<br>- Elle meurt de solitude si elle a moins de deux voisines vivantes<br>- Elle meurt de surpopulation si elle en a plus de trois<br><br>Le jeu s'effectue sur une grille bidimensionnelle, chaque cellule étant influencée par ses huit voisines adjacentes. Deux modes d'exécution sont disponibles : un mode console et un mode graphique. Ce dernier offre la possibilité d'interagir directement avec la grille, en ajoutant ou supprimant des cellules par simple clic, et de régler la vitesse de simulation à l'aide des touches '&lt;' et '&gt;'.<br><br>Une fonctionnalité supplémentaire permet d'activer le mode torique, dans lequel les bords de la grille sont connectés entre eux, comme si la grille était repliée sur elle-même. Enfin, des cellules obstacles peuvent être placées sur la grille ; celles-ci restent figées et ne subissent aucune évolution au fil des itérations.",
    github: "https://github.com/Lucacist/jeu-de-Conway-projet",
    hasDownload: false
  },
  {
    id: 6,
    image: "/img/formation-tel-tab.png",
    tech: ["/img/competences/React.svg", "/img/competences/nodejs.svg"],
    title: "Projet site de Formation",
    description:
      "Plateforme de formation en ligne développée avec React et Node.js.",
    github: "",
    hasDownload: true,
    downloadFile: "/downloads/formation-site.zip"
  },
  {
    id: 7,
    image: "/img/ancien-portfolio.png",
    tech: [
      "/img/competences/HTML.svg",
      "/img/competences/CSS.svg",
      "/img/competences/javascript.svg",
    ],
    title: "Ancien Portfolio",
    description: "Mon précédent portfolio créé avec HTML, CSS et JavaScript.",
    github: "https://github.com/username/old-portfolio",
    hasDownload: false
  },
]);

// Trouver le projet correspondant à l'ID
const project = computed(() => {
  return projectsList.value.find((p) => p.id === projectId.value) || null;
});

// Titre de la page
onMounted(() => {
  if (project.value) {
    document.title = `${project.value.title} | Portfolio`;
  } else {
    document.title = "Projet non trouvé | Portfolio";
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

.project-description p {
  text-align: justify;
  margin-bottom: 1rem;
}

.project-description ul, .project-description ol {
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
  padding: 0.75rem 1.5rem;
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

.github-button svg, .download-button svg {
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
