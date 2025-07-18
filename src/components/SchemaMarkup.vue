<template>
  <!-- Composant invisible qui ajoute les données structurées Schema.org -->
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, watch } from 'vue';

const { locale } = useI18n();

// Fonction pour mettre à jour les données structurées
const updateSchemaMarkup = () => {
  // Supprimer l'ancien script s'il existe
  const oldScript = document.getElementById('schema-script');
  if (oldScript) {
    oldScript.remove();
  }

  // Créer les données structurées en fonction de la langue
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Luca',
    'url': 'https://porfolioluca.netlify.app',
    'image': 'https://porfolioluca.netlify.app/img/logo.svg',
    'jobTitle': locale.value === 'fr' ? 'Développeur Web' : 'Web Developer',
    'description': locale.value === 'fr' 
      ? 'Développeur Web spécialisé en création de sites web, applications et plugins' 
      : 'Web Developer specialized in creating websites, applications and plugins',
    'sameAs': [
      'https://github.com/Lucacist', // Remplacez par vos liens réels
      'https://linkedin.com/in/votre-profil' // Remplacez par vos liens réels
    ],
    'knowsAbout': [
      'Web Development',
      'Vue.js',
      'JavaScript',
      'CSS',
      'HTML',
      'PHP'
    ]
  };

  // Créer un nouvel élément script pour les données structurées
  const script = document.createElement('script');
  script.id = 'schema-script';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(personSchema);
  document.head.appendChild(script);
};

// Mettre à jour les données structurées au montage du composant
onMounted(() => {
  updateSchemaMarkup();
});

// Mettre à jour les données structurées lorsque la langue change
watch(locale, () => {
  updateSchemaMarkup();
});
</script>
