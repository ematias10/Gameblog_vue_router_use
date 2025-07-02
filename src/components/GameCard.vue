<template>
<div class="cartucho">
    <div class="etiqueta">
        <h4>{{ titulo }}</h4>
        <div class="estrellas">
            <span v-for="n in 5" :key="n" class="estrella" :class="{ activa: n <= rating }">★</span>
        </div>
    </div>
    <div class="contenido">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quisquam.</p>
    </div>
</div>
</template>

<script setup>
defineProps({
    titulo: {
        type: String,
        required:true,
    },
    rating: {
        type: Number,
        default: 0,
        validator: (value) => {
            return value >= 0 && value <= 5;
        }
    }
})
</script>


<style scoped>
.cartucho {
  width: 300px;
  height: 150px;
  border: 2px solid #aaa;
  background: linear-gradient(to bottom, #dcdcdc, #bcbcbc);
  border-radius: 8px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.cartucho:hover {
  transform: scale(1.02);
}

.etiqueta {
  background-color: #333;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #888;
}

.estrellas {
  margin-top: 0.3rem;
}

.estrella {
  color: #666;
  font-size: 0.9rem;
  margin: 0 1px;
}

.estrella.activa {
  color: gold;
}

.contenido {
  padding: 0.5rem;
  font-size: 0.85rem;
  color: #222;
  flex: 1;
}
</style>