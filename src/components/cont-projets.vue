<script setup></script>

<template>
  <div class="cont-projets">
    <div class="objet">
      <div class="image"><img src="/img/signal.png" alt="img" /></div>
      <div class="icone">
        <img src="/img/competences/python.svg" alt="img" />
      </div>
      <div class="description">
        Projet Escape no Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
    <div class="objet">
      <div class="image"><img src="/img/New-life.svg" alt="img" /></div>
      <div class="icone">
        <img src="/img/competences/nodejs.svg" alt="img" />
        <img src="/img/competences/CSS.svg" alt="img" />
      </div>
      <div class="description">
        Projet Escape no Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
    <div class="objet">
      <div class="image"><img src="/img/signal.png" alt="img" /></div>
      <div class="icone"></div>
      <div class="description">
        Projet Escape no Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
    <div class="objet">
      <div class="image"><img src="/img/signal.png" alt="img" /></div>
      <div class="icone"></div>
      <div class="description">
        Projet Escape no Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
    <div class="objet">
      <div class="image"><img src="/img/signal.png" alt="img" /></div>
      <div class="icone"></div>
      <div class="description">
        Projet Escape no Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
    <div class="objet">
      <div class="image"><img src="/img/signal.png" alt="img" /></div>
      <div class="icone"></div>
      <div class="description">
        Projet Escape no Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
    <div class="objet">
      <div class="image"><img src="/img/signal.png" alt="img" /></div>
      <div class="icone"></div>
      <div class="description">
        Projet Escape no Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cont-projets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem 4vw;
  max-width: 1500px;
  margin: 0 auto;
}
.objet {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
}
.objet:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px var(--shadow-color);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
.objet:hover svg {
  transform: rotate(0deg);
}
.image img {
  width: 50%;
}
.icone {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icone img {
  width: 30px;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icone {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.description {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.description svg {
  width: 20px;
  color: var(--text-color);
  transform: rotate(45deg);
  border: 1px solid var(--text-color);
  border-radius: 50%;
  padding: 0.2rem;
  transition: transform 0.3s ease;
}
</style>
