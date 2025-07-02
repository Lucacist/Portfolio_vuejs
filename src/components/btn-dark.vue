<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const isDarkMode = ref(false);

// Fonction pour appliquer le thème
const applyTheme = (isDark) => {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
};

// Fonction pour changer le thème
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value);
};

// Fonction pour désactiver explicitement le mode sombre
const disableDarkMode = () => {
  isDarkMode.value = false;
  applyTheme(false);
};

// Fonction pour activer explicitement le mode sombre
const enableDarkMode = () => {
  isDarkMode.value = true;
  applyTheme(true);
};

// Vérifier le thème au chargement du composant
onMounted(() => {
  // Récupérer le thème depuis localStorage ou utiliser la préférence du système
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    enableDarkMode();
  } else if (savedTheme === 'light') {
    disableDarkMode();
  } else {
    // Si aucun thème n'est enregistré, utiliser la préférence du système
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
});

// Exposer les fonctions pour permettre le contrôle externe
defineExpose({
  enableDarkMode,
  disableDarkMode,
  toggleDarkMode
});
</script>

<template>
  <button class="switch" :title="t('theme.switchTheme')" @click="toggleDarkMode">
    <span class="slider" :class="{ 'active': isDarkMode }"></span>
  </button>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  /* Variables */
  --switch_width: 2em;
  --switch_height: 1em;
  --thumb_color: var(--background-color);
  --track_color: #e8e8e8;
  --track_active_color: #888;
  --outline_color: var(--text-color);
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: var(--switch_width);
  height: var(--switch_height);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* The slider */
.slider {
  box-sizing: border-box;
  border: 2px solid var(--outline_color);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--track_color);
  transition: background-color 0.3s ease;
  border-radius: var(--switch_height);
}

.slider:before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  height: var(--switch_height);
  width: var(--switch_height);
  border: 2px solid var(--outline_color);
  border-radius: 100%;
  left: -2px;
  bottom: -2px;
  background-color: var(--thumb_color);
  transform: translateY(-0.2em);
  box-shadow: 0 0.2em 0 var(--outline_color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.slider.active {
  background-color: var(--track_active_color);
}

.switch:focus-visible .slider {
  box-shadow: 0 0 0 2px var(--track_active_color);
}

/* Raise thumb when hovered */
.switch:hover .slider:before {
  transform: translateY(-0.3em);
  box-shadow: 0 0.3em 0 var(--outline_color);
}

.slider.active:before {
  transform: translateX(calc(var(--switch_width) - var(--switch_height)))
    translateY(-0.2em);
}

/* Raise thumb when hovered & active */
.switch:hover .slider.active:before {
  transform: translateX(calc(var(--switch_width) - var(--switch_height)))
    translateY(-0.3em);
  box-shadow: 0 0.3em 0 var(--outline_color);
}
</style>
