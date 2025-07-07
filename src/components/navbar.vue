<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
import BtnDark from "./btn-dark.vue";
import LanguageModal from "./language-modal.vue";

const { t, locale } = useI18n();

const isMenuOpen = ref(false);
const isLanguageModalOpen = ref(false);
const languageBtnRef = ref(null);

// Utiliser la locale actuelle de i18n
const currentLanguage = computed(() => locale.value);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const modalPosition = ref({ top: 0, right: 0 });

const toggleLanguageModal = () => {
  if (!isLanguageModalOpen.value) {
    // Calculer la position du modal par rapport au bouton
    if (languageBtnRef.value) {
      const rect = languageBtnRef.value.getBoundingClientRect();
      modalPosition.value = {
        top: rect.bottom + window.scrollY,
        right: window.innerWidth - rect.right
      };
    }
  }
  isLanguageModalOpen.value = !isLanguageModalOpen.value;
};

const changeLanguage = (lang) => {
  // La logique de changement de langue est maintenant gérée dans le composant language-modal
  console.log(`Langue changée en: ${lang}`);
};

// Items de navigation traduits dynamiquement
const navItems = computed(() => [
  { name: t('nav.home'), to: "/" },
  { name: t('nav.projects'), to: "/projects" },
  { name: t('nav.contact'), to: "/contact" },
]);
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <button
          class="menu-toggle"
          @click="toggleMenu"
          aria-label="Toggle menu"
          :class="{ active: isMenuOpen }"
        >
          <span></span>
          <span></span>
        </button>

        <nav :class="['nav-links', { active: isMenuOpen }]">
          <ul>
            <li v-for="item in navItems" :key="item.name">
              <router-link :to="item.to" @click="closeMenu">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="container-btn">
          <div class="flex">
            <BtnDark />
          </div>
          <button 
            class="flex language-btn" 
            @mouseenter="toggleLanguageModal" 
            @click="toggleLanguageModal"
            ref="languageBtnRef"
            :title="t('language.switchLanguage')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="svg-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            <span class="language-indicator">{{ t(`language.${currentLanguage}`) }}</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Modal de sélection de langue -->
    <LanguageModal 
      :is-open="isLanguageModalOpen" 
      :position="modalPosition"
      @close="isLanguageModalOpen = false"
      @change-language="changeLanguage"
    />
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--background-color);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px var(--shadow-color);
  padding: 1rem 0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color-hover);
}

.container-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.flex {
  display: flex;
  align-items: center;
}

.svg-icon {
  width: 24px;
  height: 24px;
  color: var(--text-color);
}

.language-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  position: relative;
  transition: background-color 0.2s ease;
}

.language-btn:hover {
  background-color: var(--border-color);
}

.language-indicator {
  font-size: 0.80rem;
  font-weight: 600;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 20px;
  position: relative;
  z-index: 1001;
}

.menu-toggle.active  span:nth-child(1){
    transform: rotate(45deg) translateY(5px);
}

.menu-toggle.active  span:nth-child(2){
    transform: rotate(-45deg) translateY(-5px);
}
  


.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  transition: all 0.3s ease;
  border-radius: 50px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100vh;
    background-color: var(--background-color);
    box-shadow: -2px 0 10px var(--shadow-color);
    transition: left 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }

  .nav-links.active {
    left: 0;
  }

  .nav-links ul {
    flex-direction: column;
    align-items: center;
  }

  .nav-links li {
    margin: 1rem 0;
  }
}
</style>
