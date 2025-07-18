<template>
    <div class="propositions_projets">
        <div class="propositions-header">
            <h2>{{ t("home.propositions.title") }}</h2>
            <p class="subtitle">{{ t("home.propositions.subtitle") }}</p>
        </div>
        
        <div class="services-container">
            <div class="service-card">
                <div class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="service-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </div>
                <h3>{{ t("home.propositions.webDev.title") }}</h3>
                <p>{{ t("home.propositions.webDev.description") }}</p>
            </div>
            
            <div class="service-card">
                <div class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="service-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </div>
                <h3>{{ t("home.propositions.appDev.title") }}</h3>
                <p>{{ t("home.propositions.appDev.description") }}</p>
            </div>
            
            <div class="service-card">
                <div class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="service-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                </div>
                <h3>{{ t("home.propositions.plugins.title") }}</h3>
                <p>{{ t("home.propositions.plugins.description") }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.propositions_projets {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.propositions-header {
    text-align: center;
    margin-bottom: 3rem;
}

.propositions-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin: 0 auto;
}

.services-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
}

.service-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    padding: 2rem;
    width: 300px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.icon-container {
    background-color: var(--primary-color-light);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.service-icon {
    width: 35px;
    height: 35px;
    color: var(--secondary-color);
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.service-card p {
    line-height: 1.6;
}


@media (max-width: 768px) {
    .services-container {
        flex-direction: column;
        align-items: center;
    }
    
    .service-card {
        width: 100%;
        max-width: 350px;
    }
    
    .propositions-header h2 {
        font-size: 2rem;
    }
}
</style>
