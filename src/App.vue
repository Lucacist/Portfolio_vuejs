<script setup>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
