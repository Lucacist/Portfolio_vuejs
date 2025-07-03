<template>
  <div class="strongbox-demo">
    <div class="strongbox">
      <div class="screen" :class="{ 'screen-success': isUnlocked, 'screen-error': showError }">
        <div class="screen-content">
          <div v-if="isUnlocked" class="success-message">DÉVERROUILLÉ</div>
          <div v-else-if="showError" class="error-message">ERREUR</div>
          <div v-else class="code-display">{{ displayCode }}</div>
        </div>
      </div>
      <div class="keypad">
        <div v-for="n in 9" :key="n" class="key" @click="pressKey(n)">{{ n }}</div>
        <div class="key" @click="clearCode">C</div>
        <div class="key" @click="pressKey(0)">0</div>
        <div class="key" @click="submitCode">✓</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const code = ref('');
const isUnlocked = ref(false);
const showError = ref(false);
const correctCode = '1234'; // Code secret par défaut

const displayCode = computed(() => {
  return code.value.replace(/./g, '*');
});

function pressKey(num) {
  if (code.value.length < 4) {
    code.value += num;
  }
}

function clearCode() {
  code.value = '';
  showError.value = false;
}

function submitCode() {
  if (code.value === correctCode) {
    isUnlocked.value = true;
    showError.value = false;
  } else {
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
      code.value = '';
    }, 1500);
  }
}
</script>

<style scoped>
.strongbox-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.strongbox {
  background-color: #2c3e50;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  width: 250px;
}

.screen {
  background-color: #1e272e;
  border-radius: 5px;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ecf0f1;
  font-family: 'Courier New', monospace;
  font-size: 24px;
  border: 2px solid #34495e;
  transition: all 0.3s ease;
}

.screen-success {
  background-color: #27ae60;
  border-color: #2ecc71;
}

.screen-error {
  background-color: #c0392b;
  border-color: #e74c3c;
}

.screen-content {
  text-align: center;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.key {
  background-color: #34495e;
  color: #ecf0f1;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.key:hover {
  background-color: #3498db;
}

.key:active {
  background-color: #2980b9;
  transform: scale(0.95);
}

.success-message {
  color: #fff;
  font-weight: bold;
}

.error-message {
  color: #fff;
  font-weight: bold;
}
</style>
