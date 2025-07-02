<template>
  <div class="game-of-life">
    <div class="game-container">
      <div class="grid">
        <div
          v-for="(row, rowIndex) in grid"
          :key="'row-' + rowIndex"
          class="grid-row"
        >
          <div
            v-for="(cell, colIndex) in row"
            :key="'cell-' + rowIndex + '-' + colIndex"
            :class="['cell', { alive: cell === 1 }]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Grille initiale (1 pour cellule vivante, 0 pour cellule morte)
const initialGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Créer une grille réactive
const grid = ref(JSON.parse(JSON.stringify(initialGrid)));

// Paramètres du jeu
const rows = 13;
const cols = 13;
const speed = 800; // millisecondes

// Référence pour l'intervalle du jeu
let gameInterval;

// Fonction pour calculer le nombre de voisins vivants
function getNeighborCount(x, y) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];
  
  return directions.reduce((count, [dx, dy]) => {
    const newX = x + dx;
    const newY = y + dy;
    if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
      count += grid.value[newX][newY];
    }
    return count;
  }, 0);
}

// Fonction pour calculer la prochaine génération
function computeNextGeneration() {
  // Créer une nouvelle grille pour la prochaine génération
  const nextGrid = JSON.parse(JSON.stringify(grid.value));
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const neighbors = getNeighborCount(i, j);
      
      if (grid.value[i][j] === 1) {
        // Cellule vivante: survit si elle a 2 ou 3 voisins
        nextGrid[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
      } else {
        // Cellule morte: naît si elle a exactement 3 voisins
        nextGrid[i][j] = (neighbors === 3) ? 1 : 0;
      }
    }
  }
  
  // Mettre à jour la grille réactive
  grid.value = nextGrid;
}

// Fonction pour démarrer le jeu
function startGame() {
  gameInterval = setInterval(() => {
    computeNextGeneration();
  }, speed);
}

// Hooks de cycle de vie
onMounted(() => {
  startGame();
});

onBeforeUnmount(() => {
  if (gameInterval) {
    clearInterval(gameInterval);
  }
});
</script>

<style scoped>
.game-of-life {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.game-container {
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  padding: 8px;
  border-radius: 4px;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.grid-row {
  display: flex;
  gap: 1px;
}

.cell {
  width: 16px;
  height: 16px;
  transition: background-color 0.2s ease;
}

.cell.alive {
  background-color: var(--text-color);
}


</style>
