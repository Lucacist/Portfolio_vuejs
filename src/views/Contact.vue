<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';

const { t } = useI18n();

// Identifiants EmailJS
const SERVICE_ID = 'service_jfajf8j';
const TEMPLATE_ID = 'template_yqasdmf';
const PUBLIC_KEY = '63kWHzJ-2bYzAhyl2';

// Initialiser EmailJS
emailjs.init(PUBLIC_KEY);

const form = ref({
  name: '',
  email: '',
  message: ''
});

const formSubmitted = ref(false);
const formError = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

const submitForm = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    formError.value = true;
    errorMessage.value = 'Veuillez remplir tous les champs';
    return;
  }
  
  isLoading.value = true;
  formError.value = false;
  
  // Créer un objet avec les données du formulaire
  const templateParams = {
    from_name: form.value.name,
    from_email: form.value.email,
    message: form.value.message
  };
  
  // Méthode 1: Utiliser emailjs.send
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then((response) => {
      console.log('Succès:', response);
      formSubmitted.value = true;
      isLoading.value = false;
      
      // Réinitialiser le formulaire
      form.value = {
        name: '',
        email: '',
        message: ''
      };
      
      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        formSubmitted.value = false;
      }, 5000);
    })
    .catch((error) => {
      console.error('Erreur:', error);
      formError.value = true;
      errorMessage.value = 'Une erreur est survenue. Vérifiez la console pour plus de détails.';
      isLoading.value = false;
      
      // Essayer la méthode alternative si la première échoue
      tryAlternativeMethod(templateParams);
    });
};

// Méthode alternative d'envoi en cas d'échec de la première méthode
const tryAlternativeMethod = (params) => {
  console.log('Tentative avec méthode alternative...');
  
  // Créer un formulaire DOM pour emailjs.sendForm
  const formElement = document.createElement('form');
  
  // Ajouter les champs au formulaire
  Object.entries(params).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    formElement.appendChild(input);
  });
  
  // Envoyer avec la méthode alternative
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement)
    .then((response) => {
      console.log('Succès avec méthode alternative:', response);
      formSubmitted.value = true;
      formError.value = false;
      isLoading.value = false;
      
      // Réinitialiser le formulaire
      form.value = {
        name: '',
        email: '',
        message: ''
      };
      
      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        formSubmitted.value = false;
      }, 5000);
    })
    .catch((error) => {
      console.error('Erreur avec méthode alternative:', error);
      formError.value = true;
      errorMessage.value = 'Impossible d\'envoyer le message. Vérifiez votre connexion ou réessayez plus tard.';
      isLoading.value = false;
    });
};
</script>

<template>
  <div class="contact-page">
    <div class="page-header">
      <h1>{{ t('contact.title') }}</h1>
    </div>
    <div class="container">
      <div class="contact-form">
        <div v-if="formSubmitted" class="form-success">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="success-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p>{{ t('contact.success') }}</p>
        </div>
        <div v-else-if="formError" class="form-error">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="error-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <p v-if="errorMessage">{{ errorMessage }}</p>
          <p v-else>{{ t('contact.error') }}</p>
        </div>
        <form v-else @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">{{ t('contact.name') }}</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">{{ t('contact.email') }}</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="message">{{ t('contact.message') }}</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isLoading">
            <span v-if="isLoading" class="loading-spinner"></span>
            <span v-else>{{ t('contact.send') }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding-top: 80px; /* Pour la navbar fixe */
}

.page-header {
  background: var(--background-color-alt);
  padding: 3rem 0;
  text-align: center;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.page-header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
  transition: background-color 0.3s ease;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: inherit;
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.submit-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: var(--primary-color-hover);
}

.form-success, .form-error {
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
  animation: fadeIn 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.success-icon, .error-icon {
  width: 48px;
  height: 48px;
}

.success-icon {
  color: #10b981; /* vert */
}

.error-icon {
  color: #ef4444; /* rouge */
}

.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
