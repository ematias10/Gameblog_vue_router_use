<template>
    <h1>Mis juegos</h1>
<div>
    <p>Aquí puedes ver y gestionar tus juegos favoritos:</p>
    <div class="game-list">
        <GameCard titulo="Zelda: Tears of the Kingdom" rating="5" />
        <GameCard titulo="Elden Ring" rating="5" />
    </div>
</div>
</template>

<script setup>
import GameCard from '../../components/GameCard.vue';
// Aquí puedes importar otros componentes o realizar lógica adicional si es necesario
</script>

<style scoped>
.game-list {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}
</style>