# Portfolio Luca

![Portfolio Screenshot](/public/img/site.png)

## 📋 Description

Portfolio personnel développé avec Vue.js 3 et Vite, présentant mes projets, compétences et expériences professionnelles. Le site est entièrement responsive, optimisé pour le SEO et disponible en français et en anglais.

🌐 [Voir le site en ligne](https://porfolioluca.netlify.app)

## ✨ Fonctionnalités

- **Design responsive** adapté à tous les appareils
- **Mode sombre/clair** avec détection automatique des préférences système
- **Multilangue** (français et anglais) avec vue-i18n
- **Animations fluides** pour une expérience utilisateur agréable
- **Présentation détaillée des projets** avec cartes interactives
- **Optimisation SEO** avec sitemap.xml, robots.txt et données structurées
- **Indicateur de projets en développement** pour les projets en cours
- **Formulaire de contact** fonctionnel

## 🛠️ Technologies utilisées

- **Vue.js 3** avec Composition API
- **Vite** comme outil de build
- **Vue Router** pour la navigation
- **Vue I18n** pour l'internationalisation
- **EmailJS** pour le formulaire de contact
- **CSS personnalisé** (pas de framework CSS)
- **Netlify** pour l'hébergement et le déploiement continu

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/Lucacist/Portfolio_vuejs.git
cd Portfolio_vuejs

# Installer les dépendances
npm install
# ou
yarn install

# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
```

L'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173).

### Construction pour la production

```bash
npm run build
# ou
yarn build
```

## 📁 Structure du projet

```
├── public/              # Fichiers statiques
│   ├── img/             # Images et icônes
│   └── favicon.ico      # Favicon
├── src/                 # Code source
│   ├── components/      # Composants Vue
│   ├── locales/         # Fichiers de traduction (fr.json, en.json)
│   ├── router/          # Configuration de Vue Router
│   ├── views/           # Pages de l'application
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée de l'application
├── index.html           # Template HTML
├── package.json         # Dépendances et scripts
├── vite.config.js       # Configuration de Vite
└── README.md            # Documentation
```

## 🔄 Déploiement

Le site est automatiquement déployé sur Netlify à chaque push sur la branche principale.

## 📱 Compatibilité

Le portfolio est compatible avec :
- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)
- Mobile browsers (iOS Safari, Android Chrome)

## 📝 Licence

Ce projet est sous licence MIT.

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter via le formulaire de contact sur le site ou directement par email.
