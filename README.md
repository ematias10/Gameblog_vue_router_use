# GameBlog - Proyecto de Enseñanza Vue Router

## 📖 Descripción del Proyecto

Este es un proyecto educativo diseñado para enseñar **Vue Router** en **Vue 3**. El proyecto simula un blog de videojuegos con diferentes secciones y funcionalidades de enrutamiento que incluyen:

- ✅ **Navegación básica** entre páginas
- ✅ **Rutas anidadas** (nested routes)
- ✅ **Componentes de layout**
- ✅ **Enlaces reactivos** con `router-link`
- ✅ **Programación declarativa** de rutas

## 🎯 Objetivos de Aprendizaje

Al trabajar con este proyecto, los estudiantes aprenderán a:

1. Configurar Vue Router en una aplicación Vue 3
2. Crear rutas básicas y rutas anidadas
3. Usar `router-link` para navegación
4. Implementar layouts con `router-view`
5. Estructurar una aplicación con múltiples vistas

## 🏗️ Estructura del Proyecto

```
gameblog/
├── src/
│   ├── components/
│   │   ├── Navbar.vue      # Navegación principal
│   │   ├── Footer.vue      # Pie de página
│   │   └── GameCard.vue    # Tarjeta de juego
│   ├── views/
│   │   ├── Home.vue        # Página de inicio
│   │   ├── Contact.vue     # Página de contacto
│   │   └── Perfil/
│   │       ├── PerfilLayout.vue    # Layout del perfil
│   │       ├── MisJuegos.vue       # Vista de juegos del usuario
│   │       └── Configuracion.vue   # Configuración del perfil
│   ├── router/
│   │   └── index.js        # Configuración de rutas
│   ├── App.vue            # Componente raíz
│   └── main.js            # Punto de entrada
├── package.json
└── README.md
```

## 🛣️ Rutas Configuradas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Home.vue` | Página principal del blog |
| `/contacto` | `Contact.vue` | Página de contacto |
| `/perfil` | `PerfilLayout.vue` | Layout del perfil (ruta padre) |
| `/perfil` | `MisJuegos.vue` | Mis juegos (ruta hija por defecto) |
| `/perfil/configuracion` | `Configuracion.vue` | Configuración del perfil (ruta hija) |

### Ejemplo de Rutas Anidadas

El proyecto demuestra cómo implementar rutas anidadas:

```javascript
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
}
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

### Pasos para Ejecutar el Proyecto

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL-del-proyecto]
   cd gameblog
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - El proyecto se ejecutará en: `http://localhost:5173`

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Previsualiza la versión de producción |

## 🔧 Tecnologías Utilizadas

- **Vue 3** - Framework progresivo de JavaScript
- **Vue Router 4** - Enrutador oficial para Vue.js
- **Vite** - Herramienta de construcción rápida
- **JavaScript ES6+** - Lenguaje de programación

## 📚 Conceptos Clave Demostrados

### 1. Configuración del Router
```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [...]
})
```

### 2. Router Links
```vue
<router-link to="/" class="nav-link">Inicio</router-link>
<router-link to="/perfil" class="nav-link">Perfil</router-link>
```

### 3. Router View
```vue
<template>
  <div class="layout">
    <Navbar />
    <main class="contenido">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
```

### 4. Rutas Anidadas
Las rutas anidadas permiten crear layouts complejos con múltiples niveles de componentes.

## 💡 Ejercicios Sugeridos

1. **Agregar una nueva ruta** para "Acerca de"
2. **Implementar guards de navegación** para proteger ciertas rutas
3. **Agregar parámetros dinámicos** en las rutas (ej: `/juego/:id`)
4. **Implementar navegación programática** con `useRouter()`
5. **Agregar transiciones** entre rutas

## 📖 IDE Recomendado

- **Visual Studio Code** + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Desactivar la extensión **Vetur** si está instalada

## 🆘 Solución de Problemas

### Error: "Cannot resolve dependency"
```bash
rm -rf node_modules
npm install
```

### Puerto 5173 ocupado
El proyecto se ejecutará automáticamente en el siguiente puerto disponible.

## 📞 Soporte

Si tienes dudas sobre el proyecto, revisa:
- [Documentación oficial de Vue Router](https://router.vuejs.org/)
- [Guía de Vue 3](https://vuejs.org/guide/)
- [Documentación de Vite](https://vite.dev/)
