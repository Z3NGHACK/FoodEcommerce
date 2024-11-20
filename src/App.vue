<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <div class="container">
    <header>
      <img alt="Site Logo">
      <nav>
        <span>
          <RouterLink class="link" to="/">Home</RouterLink></span>
        <span>
          <RouterLink class="link" to="/Contact">Contact</RouterLink></span>
        <span>
          <RouterLink class="link" to="/signup">Sign Up</RouterLink></span>
        <span>
          <RouterLink class="link" to="/signin">Sign In</RouterLink></span>
        <span>
          <RouterLink class="link" to="/cart">
            <i class="ri-shopping-cart-2-line"></i>
          </RouterLink>
        </span>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
/* Reset margins and paddings globally */


  .container{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  header{
    display: flex;
    background: url('/src/assets/image/top_bg.jpg') center/ cover no-repeat;
    object-fit: cover;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  nav{
    display: flex;
    gap: 30px;
  }

</style>