<template>

<form @submit.prevent="enviarFormulario" class="formulario-contacto">
<div class="campo">
    <label for="nombre">Nombre:</label>
    <input id="nombre" v-model="nombre" type="text" required />
</div>

<div class="campo">
    <label for="email">Email:</label>
    <input id="email" v-model="email" type="email" required />
</div>

<div class="campo">
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" v-model="mensaje" required></textarea>
</div>

<button type="submit">Enviar</button>
</form>

</template>

<script setup>
import { ref } from 'vue';

const nombre = ref('');
const email = ref('');
const mensaje = ref('');

const envio_exitoso = ref(false);

function enviarFormulario() {
    //fetch o axios........
    console.log('Formulario enviado:', {
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value
    });

    envio_exitoso.value = true;

    nombre.value = '';
    email.value = '';
    mensaje.value = '';
}


</script>

<style scoped>
.formulario-contacto {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
}

.campo{
    display: flex;
    flex-direction: column;
}

.label {
    margin-bottom: 0.25rem;
    font-weight: bold;
}
</style>