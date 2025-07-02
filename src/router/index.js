import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import PerfilLayout from '../views/Perfil/PerfilLayout.vue'
import MisJuegos from '../views/Perfil/MisJuegos.vue';
import Configuracion from '../views/Perfil/Configuracion.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contact,
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: PerfilLayout,
        children: [
            {
                path: '',
                name: 'PerfilHome',
                component: MisJuegos
            },
            {
                path: 'configuracion',
                name: 'Configuracion',
                component: Configuracion
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;