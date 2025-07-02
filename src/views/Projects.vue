<script setup>
import { useI18n } from 'vue-i18n';
import ContProjets from '../components/cont-projets.vue';

const { t } = useI18n();
</script>

<template>
  <div class="projects-page">
    <ContProjets />
  </div>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding-top: 80px;
  
}

</style>
