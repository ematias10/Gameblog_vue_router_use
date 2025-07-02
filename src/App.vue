
<template>
<div class="layout">
  <Navbar />
  <main class="contenido">
    <router-view />
  </main>
  <Footer />
</div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.layout {
  display:flex;
  flex-direction: column;
  min-height: 100vh;
}

.contenido{
  flex: 1;
  padding: 1rem;
}
</style>
