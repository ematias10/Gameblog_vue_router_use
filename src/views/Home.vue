<template>
  <div>
    <h1>Bienvenido a GameBlog</h1>
    <p>Últimos juegos reseñados:</p>
    <div class="game-list">
      <GameCard titulo="Zelda: Tears of the Kingdom" rating="5" />
      <GameCard titulo="Elden Ring" rating="3"/>
      <GameCard titulo="Hogwarts Legacy" rating="4"/>
    </div>
  </div>
</template>

<script setup>
import GameCard from '../components/GameCard.vue'
</script>

<style scoped>
.game-list {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
</style>|