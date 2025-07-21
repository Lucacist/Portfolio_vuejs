<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h3>Portfolio</h3>
          <p>Développeur Web</p>
        </div>
        
        <div class="footer-links">
          <div class="link-group">
            <h4>Navigation</h4>
            <ul>
              <li><router-link to="/">{{ t("nav.home") }}</router-link></li>
              <li><router-link to="/projects">{{ t("nav.projects") }}</router-link></li>
              <li><router-link to="/contact">{{ t("nav.contact") }}</router-link></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4>Social</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/luca-fourfooz-593978336/" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/Lucacist" target="_blank">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; {{ currentYear }} Portfolio. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 4rem 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.footer-logo h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.footer-logo p {
  color: var(--text-color-light);
}

.footer-links {
  display: flex;
  gap: 4rem;
}

.link-group h4 {
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
  color: var(--text-color-light);
}

.link-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-group li {
  margin-bottom: 0.75rem;
}

.link-group a {
  color: var(--text-color-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--text-color);
}

.copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-color-light);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-content {
    gap: 2rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
}

@media (max-width: 450px) {
  .footer-links {
    gap: 2rem;
    flex-direction: column;
  }
}
</style>
