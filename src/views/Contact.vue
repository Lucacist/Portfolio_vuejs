<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

// URL de l'API Vercel (à remplacer par ton URL de déploiement Vercel)
const API_URL = import.meta.env.VITE_API_URL || "https://portfolio-api.vercel.app";

const form = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});

// Gestion du stepper
const currentStep = ref(1);

const formSubmitted = ref(false);
const formError = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");

// Passer à l'étape suivante
const nextStep = () => {
  if (currentStep.value === 1) {
    if (!form.value.name || !form.value.email) {
      formError.value = true;
      errorMessage.value = t("contact.fillRequired");
      return;
    }
    currentStep.value++;
    formError.value = false;
  }
};

// Revenir à l'étape précédente
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    formError.value = false;
  }
};

const submitForm = async () => {
  // Vérifier tous les champs requis
  if (!form.value.name || !form.value.email || !form.value.message) {
    formError.value = true;
    errorMessage.value = t("contact.fillRequired");
    return;
  }

  isLoading.value = true;
  formError.value = false;

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        company: form.value.company,
        message: form.value.message,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      formSubmitted.value = true;
      isLoading.value = false;

      // Réinitialiser le formulaire
      form.value = {
        name: "",
        email: "",
        company: "",
        message: "",
      };

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        formSubmitted.value = false;
        currentStep.value = 1;
      }, 5000);
    } else {
      formError.value = true;
      errorMessage.value = data.error || t("contact.error");
      isLoading.value = false;
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    formError.value = true;
    errorMessage.value = t("contact.error");
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="contact-page">
    <div class="contact-svg">
      <img src="/img/66b21fac76a20a6ac74b9614_ThumbsUp-Anim.svg" alt="" />
      <img src="/img/66b0d37e37f3595a598806b4_Wow-Anim.svg" alt="" />
      <img src="/img/66be1e63982c48144d89f4ee_Crayon-Anim.svg" alt="" />
    </div>
    <div class="container">
      <div class="contact-form">
        <div v-if="formSubmitted" class="form-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="success-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>{{ t("contact.success") }}</p>
        </div>
        <div v-else-if="formError" class="form-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="error-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <p v-if="errorMessage">{{ errorMessage }}</p>
          <p v-else>{{ t("contact.error") }}</p>
        </div>
        <form v-else>
          <!-- Indicateur d'étape -->
          <div class="step-indicator">
            <div
              class="step"
              :class="{ active: currentStep === 1, completed: currentStep > 1 }"
            >
              <div class="step-number">1</div>
              <div class="step-title">{{ t("contact.personalInfo") }}</div>
            </div>
            <div class="step-line"></div>
            <div class="step" :class="{ active: currentStep === 2 }">
              <div class="step-number">2</div>
              <div class="step-title">{{ t("contact.messageDetails") }}</div>
            </div>
          </div>

          <!-- Étape 1: Informations personnelles -->
          <div v-if="currentStep === 1" class="step-content">
            <div class="form-group">
              <label for="name">{{ t("contact.name") }} *</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="company">{{ t("contact.company") }}</label>
              <input type="text" id="company" v-model="form.company" />
            </div>
            <div class="form-group">
              <label for="email">{{ t("contact.email") }} *</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>

            <div class="form-actions">
              <button type="button" class="next-btn" @click="nextStep">
                {{ t("contact.next") }}
              </button>
            </div>
          </div>

          <!-- Étape 2: Message et envoi -->
          <div v-if="currentStep === 2" class="step-content">
            <div class="form-group">
              <label for="message">{{ t("contact.message") }} *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="button" class="back-btn" @click="prevStep">
                {{ t("contact.back") }}
              </button>
              <button
                type="button"
                class="submit-btn"
                @click="submitForm"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="loading-spinner"></span>
                <span v-else>{{ t("contact.send") }}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding-top: 80px; /* Pour la navbar fixe */
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-svg {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 72px;
  width: 100%;
  height: calc(100vh - 72px);
}

.contact-svg img {
  width: 15vw;
  height: 15vh;
}

.contact-svg img:nth-child(1) {
  position: relative;
  top: 15vh;
  left: 4vw;
  transform: rotate(10deg);
}

.contact-svg img:nth-child(2) {
  position: absolute;
  top: 50vh;
  left: 7vw;
  transform: rotate(-10deg);
}

.contact-svg img:nth-child(3) {
  position: absolute;
  top: 30vh;
  right: 5vw;
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
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 2px;
}

.container {
  max-width: 800px;
  width: 100%;
  padding: 0 1.5rem;
}

.contact-form {
  padding: 2.5rem;
}

.contact-form::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--accent-color, #6c63ff)
  );
}

.form-group {
  margin-bottom: 1.8rem;
  position: relative;
}

label {
  display: block;
  margin-bottom: 0.7rem;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

input,
textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 0, 123, 255), 0.25);
  animation: focusAnimation 0.3s ease;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--text-color);
  -webkit-box-shadow: 0 0 0px 1000px var(--background-color) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.submit-btn {
  background: var(--text-color);
  color: var(--background-color);
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.submit-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.1)
  );
  transition: all 0.6s ease;
  z-index: -1;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
}

.form-success,
.form-error {
  padding: 1.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  animation: fadeIn 0.5s ease-in-out;
}

.form-success {
  background-color: rgba(0, 200, 83, 0.1);
  color: #00c853;
  border-left: 4px solid #00c853;
}

.form-error {
  background-color: rgba(244, 67, 54, 0.1);
  color: #f44336;
  border-left: 4px solid #f44336;
}

.success-icon,
.error-icon {
  width: 28px;
  height: 28px;
  margin-right: 0.8rem;
  flex-shrink: 0;
}

.loading-spinner {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;
  vertical-align: middle;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Styles pour le stepper */
.step-indicator {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  flex: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--text-color);
  color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.step-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.step-line {
  flex: 1;
  height: 3px;
  background-color: var(--border-color);
  position: relative;
  z-index: 0;
  margin: 0 10px;
  top: -15px;
  transition: background-color 0.3s ease;
}

.step.active .step-number {
  background-color: var(--text-color);
  color: var(--background-color);
  box-shadow: 0 0 0 5px var(--shadow-color);
}

.step.active .step-title {
  opacity: 1;
  color: var(--text-color);
  font-weight: 600;
}

.step.completed .step-number {
  background-color: var(--text-color);
  color: var(--background-color);
}

.step-content {
  animation: fadeIn 0.5s ease;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.next-btn,
.back-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
    z-index: 100;
}

.next-btn {
  background: var(--text-color);
  color: var(--background-color);
  border: none;
  margin-left: auto;
}

.back-btn {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);
}

.next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.back-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Responsive design */

@media (max-width: 1325px) {
  .contact-svg img:nth-child(1) {
    top: 3vh;
    width: 100px;
    height: 100px;
  }

  .contact-svg img:nth-child(2) {
    top:75vh;
    width: 100px;
    height: 100px;
  }

  .contact-svg img:nth-child(3) {
    top: 3vh;
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .contact-form {
    padding: 2rem 1.5rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .submit-btn {
    padding: 0.9rem 1.5rem;
  }
}

/* Animation pour les champs du formulaire */
@keyframes focusAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

</style>
