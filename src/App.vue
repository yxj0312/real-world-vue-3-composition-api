<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/UserStore'

const useStore = useUserStore()
</script>

<template>
  <div class="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
          |
          <p>Logged in as {{ useStore.firstName }}</p>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
.layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
