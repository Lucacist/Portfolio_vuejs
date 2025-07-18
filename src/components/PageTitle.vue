<template>
  <!-- Composant invisible qui gère uniquement le titre de la page -->
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { t, locale } = useI18n();
const route = useRoute();

// Fonction pour mettre à jour le titre de la page
const updatePageTitle = () => {
  document.title = t('pageTitle');
};

// Mettre à jour le titre au montage du composant
onMounted(() => {
  updatePageTitle();
});

// Mettre à jour le titre lorsque la langue change
watch(locale, () => {
  updatePageTitle();
});

// Optionnel: Mettre à jour le titre lorsque la route change
// Vous pourriez ajouter des titres spécifiques pour chaque page
watch(() => route.path, () => {
  updatePageTitle();
});
</script>
