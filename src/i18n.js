import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';
import en from './locales/en.json';

// Récupérer la langue du localStorage ou utiliser le français par défaut
const getStoredLanguage = () => {
  const storedLang = localStorage.getItem('language');
  if (storedLang && ['fr', 'en'].includes(storedLang)) {
    return storedLang;
  }
  
  // Détecter la langue du navigateur
  const browserLang = navigator.language.split('-')[0];
  if (['fr', 'en'].includes(browserLang)) {
    return browserLang;
  }
  
  // Français par défaut
  return 'fr';
};

const i18n = createI18n({
  legacy: false, // Utiliser la Composition API
  globalInjection: true, // Injecter $t, $d, etc. globalement
  locale: getStoredLanguage(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en
  }
});

export default i18n;

// Fonction utilitaire pour changer de langue
export function setLanguage(lang) {
  if (['fr', 'en'].includes(lang)) {
    i18n.global.locale.value = lang;
    localStorage.setItem('language', lang);
    document.querySelector('html').setAttribute('lang', lang);
  }
}
