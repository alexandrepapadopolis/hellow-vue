<script setup>
const now = new Date().toLocaleString()
</script>

<template>
  <main style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; padding: 2rem;">
    <h1 style="margin:0 0 0.5rem 0;">👋 Hello from Vue + Docker</h1>
    <p style="margin:0 0 1rem 0;">Imagem: <code>papadopoli/vue-vite-dev:latest</code></p>
    <p>Agora são: <strong>{{ now }}</strong></p>
    <p>Edite <code>src/App.vue</code> e salve: o HMR deve atualizar esta página automaticamente.</p>
<section style="margin-top:1.5rem; padding:1rem; border:1px solid #eee; border-radius:8px;">
  <h2 style="margin-top:0;">🧩 Vuex demo</h2>
  <p>Contador no <code>store</code>: <strong>{{ $store.state.count }}</strong></p>
  <p>Dobrado (getter): <strong>{{ $store.getters.doubled }}</strong></p>
  <div style="display:flex; gap:.5rem; flex-wrap:wrap;">
    <button @click="$store.commit('increment')" style="padding:.4rem .8rem;">+1 (commit)</button>
    <button @click="$store.commit('reset')" style="padding:.4rem .8rem;">reset (commit)</button>
    <button @click="$store.dispatch('asyncIncrement', 5)" style="padding:.4rem .8rem;">+5 async (action)</button>
  </div>
  <p v-if="$store.state.lastUpdated" style="font-size:.9rem;color:#666;">Última atualização: {{ new Date($store.state.lastUpdated).toLocaleString() }}</p>
</section>

  </main>
</template>

<style scoped>
code { background:#f6f6f6; padding: .2rem .4rem; border-radius: 4px; }
</style>