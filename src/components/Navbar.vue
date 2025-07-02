<template>

<nav class="navbar">
    <router-link to="/" class="nav-link" >Inicio</router-link>
    <router-link to="/perfil" class="nav-link">Perfil</router-link>
    <router-link to="/contacto" class="nav-link">Contacto</router-link>
</nav>

</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
//const isActive = (path) => route.path.startsWith(path)

</script>

<style scoped>
.navbar{
    background-color: #222;
    padding: 1rem;
    display: flex;
    gap: 1rem;
}

.nav-link {
    color: #f3f3f3;
    opacity: 0.8;
    transition: opacity 0.3s;
    cursor: pointer;
}

.nav-link:hover {
    opacity: 1;
    text-decoration: underline;
}

.active{
    font-weight: bold;
    opacity: 1;
    color: gold
}
</style>