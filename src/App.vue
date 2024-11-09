<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
  rel="stylesheet"
    />
  <header>
      <img alt="#">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/Contact">Contact</RouterLink>
        <RouterLink class="link" to="/signup">Sign Up</RouterLink>
        <RouterLink class="link" to="/signin">Sign In</RouterLink>
        <RouterLink class="link" to="/cart"><i class="ri-shopping-cart-2-line"></i></RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  .link{
    color: #000;
  }

</style>
