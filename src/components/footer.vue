<script setup>
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
              <li><router-link to="/">Accueil</router-link></li>
              <li><router-link to="/about">À propos</router-link></li>
              <li><router-link to="/projects">Projets</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4>Social</h4>
            <ul>
              <li><a href="#" target="_blank">LinkedIn</a></li>
              <li><a href="#" target="_blank">GitHub</a></li>
              <li><a href="#" target="_blank">Twitter</a></li>
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
  background-color: #1f2937;
  color: #f9fafb;
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
  color: #9ca3af;
}

.footer-links {
  display: flex;
  gap: 4rem;
}

.link-group h4 {
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
  color: #e5e7eb;
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
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: #f9fafb;
}

.copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  color: #9ca3af;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
