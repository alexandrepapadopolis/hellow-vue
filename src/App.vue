<script setup>
const now = new Date().toLocaleString()
</script>

<template>
  <main style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; padding: 2rem;">
    <h1 style="margin:0 0 0.5rem 0;">👋 Hello from Vue + Docker</h1>
    <p style="margin:0 0 1rem 0;">Imagem: <code>papadopoli/vue-vite-dev:latest</code></p>
    <p>Agora são: <strong>{{ now }}</strong></p>
    <p>Edite <code>src/App.vue</code> e salve: o HMR deve atualizar esta página automaticamente.</p>
  </main>
</template>

<style scoped>
code { background:#f6f6f6; padding: .2rem .4rem; border-radius: 4px; }
</style>
