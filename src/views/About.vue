<script setup>
</script>

<template>
  <div class="about-page">
    <div class="page-header">
      <h1>À propos de moi</h1>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  padding-top: 80px; /* Pour la navbar fixe */
}

.page-header {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem 0;
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #111827;
  position: relative;
  display: inline-block;
}

.page-header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: #4f46e5;
}
</style>
