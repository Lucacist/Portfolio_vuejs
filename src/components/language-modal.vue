<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  position: {
    type: Object,
    default: () => ({ top: 0, right: 0 })
  }
});

const emit = defineEmits(['close', 'changeLanguage']);

// Fermer le modal si on clique en dehors
const modalRef = ref(null);

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    emit('close');
  }
};

const selectLanguage = (lang) => {
  emit('changeLanguage', lang);
  emit('close');
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <Transition name="fade">
    <div 
      v-if="isOpen" 
      class="language-modal" 
      ref="modalRef"
      :style="{
        top: `${position.top}px`,
        right: `${position.right}px`
      }"
    >
      <div class="language-options">
        <button @click="selectLanguage('fr')" class="language-option">
          <span class="flag">FR</span>
          <span>Français</span>
        </button>
        <button @click="selectLanguage('en')" class="language-option">
          <span class="flag">GB</span>
          <span>English</span>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.language-modal {
  position: absolute;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  z-index: 1100;
  min-width: 150px;
}

.language-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-align: left;
  transition: background-color 0.2s ease;
}

.language-option:hover {
  background-color: #f3f4f6;
}
span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
