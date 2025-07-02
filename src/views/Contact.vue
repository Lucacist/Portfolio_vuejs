<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();

const form = ref({
  name: '',
  email: '',
  message: ''
});

const formSubmitted = ref(false);
const formError = ref(false);

const submitForm = () => {
  // Simulation d'envoi de formulaire
  formSubmitted.value = true;
  
  // Réinitialiser le formulaire après soumission
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      message: ''
    };
    formSubmitted.value = false;
  }, 3000);
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
          <p>{{ t('contact.success') }}</p>
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
          <button type="submit" class="submit-btn">{{ t('contact.send') }}</button>
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

.form-success {
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
