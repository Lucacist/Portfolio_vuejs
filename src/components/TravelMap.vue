<template>
  <div class="travel-section">
    <h2 class="travel-title">{{ $t('travel.title') }}</h2>
    <p class="travel-subtitle">{{ $t('travel.subtitle') }}</p>
    
    <div class="map-container">
      <div class="map-wrapper">
        <img src="/img/world.svg" alt="World Map" class="world-map-bg" />
        <div class="markers-container">
          <!-- Londres, UK (51.5074° N, 0.1278° W) -->
          <div class="marker-wrapper" style="left: 47%; top: 44%;">
            <div class="city-marker" :title="$t('travel.cities.london')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Dublin, Irlande (53.3498° N, 6.2603° W) -->
          <div class="marker-wrapper" style="left: 44.5%; top: 41%;">
            <div class="city-marker" :title="$t('travel.cities.dublin')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- New York, USA (40.7128° N, 74.0060° W) -->
          <div class="marker-wrapper" style="left: 22%; top: 46%;">
            <div class="city-marker" :title="$t('travel.cities.newyork')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Bangkok, Thaïlande (13.7563° N, 100.5018° E) -->
          <div class="marker-wrapper" style="left: 75%; top: 56%;">
            <div class="city-marker" :title="$t('travel.cities.bangkok')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Bali, Indonésie (8.3405° S, 115.0920° E) -->
          <div class="marker-wrapper" style="left: 79%; top: 60%;">
            <div class="city-marker" :title="$t('travel.cities.bali')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Helsinki, Finlande (60.1699° N, 24.9384° E) -->
          <div class="marker-wrapper" style="left: 51%; top: 36%;">
            <div class="city-marker" :title="$t('travel.cities.helsinki')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Madrid, Espagne (40.4168° N, 3.7038° W) -->
          <div class="marker-wrapper" style="left: 46%; top: 48%;">
            <div class="city-marker" :title="$t('travel.cities.madrid')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Rome, Italie (41.9028° N, 12.4964° E) -->
          <div class="marker-wrapper" style="left: 50%; top: 48%;">
            <div class="city-marker" :title="$t('travel.cities.rome')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Bruxelles, Belgique (50.8503° N, 4.3517° E) -->
          <div class="marker-wrapper" style="left: 47.5%; top: 43%;">
            <div class="city-marker" :title="$t('travel.cities.brussels')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Lisbonne, Portugal (38.7223° N, 9.1393° W) -->
          <div class="marker-wrapper" style="left: 44%; top: 49%;">
            <div class="city-marker" :title="$t('travel.cities.lisbon')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Héraklion, Crète (35.3387° N, 25.1442° E) -->
          <div class="marker-wrapper" style="left: 53%; top: 51%;">
            <div class="city-marker" :title="$t('travel.cities.crete')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Dubrovnik, Croatie (42.6507° N, 18.0944° E) -->
          <div class="marker-wrapper" style="left: 51.5%; top: 47%;">
            <div class="city-marker" :title="$t('travel.cities.dubrovnik')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
          
          <!-- Pointe-à-Pitre, Guadeloupe (16.2410° N, 61.5330° W) -->
          <div class="marker-wrapper" style="left: 30%; top: 55%;">
            <div class="city-marker" :title="$t('travel.cities.guadeloupe')">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="destinations-grid">
      <div v-for="destination in destinations" :key="destination.name" class="destination-card">
        <div class="destination-icon">{{ destination.flag }}</div>
        <h3 class="destination-name">{{ $t(`travel.destinations.${destination.key}`) }}</h3>
        <p class="destination-type">{{ $t(`travel.types.${destination.type}`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const destinations = ref([
  { name: 'Angleterre', key: 'uk', flag: '🇬🇧', type: 'country' },
  { name: 'Dublin', key: 'ireland', flag: '🇮🇪', type: 'city' },
  { name: 'New York', key: 'usa', flag: '🇺🇸', type: 'city' },
  { name: 'Bali', key: 'bali', flag: '🇮🇩', type: 'island' },
  { name: 'Thaïlande', key: 'thailand', flag: '🇹🇭', type: 'country' },
  { name: 'Finlande', key: 'finland', flag: '🇫🇮', type: 'country' },
  { name: 'Espagne', key: 'spain', flag: '🇪🇸', type: 'country' },
  { name: 'Italie', key: 'italy', flag: '🇮🇹', type: 'country' },
  { name: 'Belgique', key: 'belgium', flag: '🇧🇪', type: 'country' },
  { name: 'Portugal', key: 'portugal', flag: '🇵🇹', type: 'country' },
  { name: 'Crète', key: 'crete', flag: '🇬🇷', type: 'island' },
  { name: 'Croatie', key: 'croatia', flag: '🇭🇷', type: 'country' },
  { name: 'Guadeloupe', key: 'guadeloupe', flag: '🇬🇵', type: 'island' }
]);
</script>

<style scoped>
.travel-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
}

.travel-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.travel-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 3rem;
}

.map-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 3rem;
  background: var(--background-color);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.world-map-bg {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0.15;
  filter: grayscale(100%);
}

.markers-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.marker-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: all;
}

.city-marker {
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.marker-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: var(--text-color);
  border-radius: 50%;
  border: 3px solid var(--background-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;
}

.city-marker:hover .marker-dot {
  transform: scale(1.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.marker-pulse {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: var(--text-color);
  border-radius: 50%;
  opacity: 0.6;
  animation: pulse 2s ease-out infinite;
  z-index: 1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(2);
    opacity: 0.3;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.destination-card {
  background: var(--background-color);
  border: 2px solid var(--text-color);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: var(--text-color);
}

.destination-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.destination-name {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.destination-type {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .travel-title {
    font-size: 2rem;
  }
  
  .destinations-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .map-container {
    padding: 1rem;
  }
}
</style>
