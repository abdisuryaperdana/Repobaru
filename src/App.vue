<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BaseImage from '@/components/BaseImage.vue';


</script>

<template>
      <nav class="navbar" style="background-color: #e3f2fd">
        <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/project">Project</RouterLink>
        <RouterLink :to="{path:'contact'}">Contact</RouterLink>
        </div>
      </nav>
  <RouterView />
  <br>
  <BaseImage src="logo.svg"/>
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 100px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: right;
    margin-left: -0.5rem;
    font-size: 1.5rem;
    font-stretch: normal;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
