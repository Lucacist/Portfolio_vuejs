<template>
  <!-- Composant invisible qui gère le titre et les meta-données de la page -->
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { t, locale } = useI18n();
const route = useRoute();

// Fonction pour mettre à jour le titre et les meta-données de la page
const updatePageMetadata = () => {
  // Mise à jour du titre
  document.title = t('pageTitle');
  
  // Mise à jour des meta descriptions
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    const description = locale.value === 'fr' ?
      "Portfolio de Luca - Développeur Web spécialisé en création de sites web, applications et plugins. Découvrez mes projets et compétences." :
      "Luca's Portfolio - Web Developer specialized in creating websites, applications and plugins. Discover my projects and skills.";
    metaDescription.setAttribute('content', description);
  }
  
  // Mise à jour des meta Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  
  if (ogTitle) {
    ogTitle.setAttribute('content', t('pageTitle'));
  }
  
  if (ogDescription) {
    const ogDesc = locale.value === 'fr' ?
      "Portfolio de Luca - Développeur Web spécialisé en création de sites web, applications et plugins" :
      "Luca's Portfolio - Web Developer specialized in creating websites, applications and plugins";
    ogDescription.setAttribute('content', ogDesc);
  }
};

// Mettre à jour les meta-données au montage du composant
onMounted(() => {
  updatePageMetadata();
});

// Mettre à jour les meta-données lorsque la langue change
watch(locale, () => {
  updatePageMetadata();
});

// Mettre à jour les meta-données lorsque la route change
watch(() => route.path, () => {
  updatePageMetadata();
});
</script>
