<template>
    <div>
        <h2>Mi perfil</h2>
        <nav class="perfil-nav">
            <router-link to="/perfil" class="perfil-link" exact-active-class="active">Mis juegos</router-link>
            <router-link to="/perfil/configuracion" class="perfil-link" exact-active-class="active">Configuración</router-link>
        </nav>
        <hr>
        <router-view />
    </div>
</template>

<style scoped>
.perfil-nav {
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
}

.perfil-link {
    color: #333;
}

.active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
