<script setup>
import { watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

// Fermer avec la touche Escape
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal();
  }
};

// Empêcher le scroll quand le modal est ouvert
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal" aria-label="Fermer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="close-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <div class="qr-container">
            <h2 class="modal-title">{{ $t('qrcode.title') }}</h2>            
            <div class="qr-code-wrapper">
              <img src="/img/frame (5).svg" alt="QR Code" class="qr-image">
                
            </div>
            
            <p class="modal-url">https://porfolioluca.netlify.app</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-content {
  background-color: var(--background-color-modal);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: slideUp 0.3s ease-out;
  backdrop-filter: blur(2px);
}

  

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background-color: var(--border-color);
}

.close-icon {
  width: 24px;
  height: 24px;
  color: var(--text-color);
}

.qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
  text-align: center;
}

.modal-description {
  font-size: 0.95rem;
  color: var(--text-color);
  opacity: 0.8;
  margin: 0;
  text-align: center;
}

.qr-code-wrapper {
  padding: 1.5rem;
  border-radius: 1rem;
}

.qr-image {
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 0.5rem;
}

.modal-url {
  font-size: 0.9rem;
  color: var(--text-color);
  font-weight: 600;
  margin: 0;
  text-align: center;
  word-break: break-all;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(20px);
}

@media (max-width: 640px) {
  .modal-content {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .qr-image {
    width: 200px;
    height: 200px;
  }

  .qr-code-wrapper {
    padding: 1rem;
  }
}
</style>
