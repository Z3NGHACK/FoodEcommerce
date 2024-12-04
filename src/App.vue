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
      <img alt="Site Logo" src="@/assets/image/logo (2).png">
      <nav>
        <span>
          <RouterLink class="link" active-class="active" to="/">Home</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/Contact">Contact</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/signup">Sign Up</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/signin">Sign In</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/cart">
            <i class="ri-shopping-cart-2-line"></i>
          </RouterLink>
        </span>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    width: 1583px;
    text-decoration: none;
    height: 100%;
    margin-left: -32px;
  }
  header{
    display: flex;
    background: url('/src/assets/image/top_bg.jpg') center/ cover no-repeat;
    object-fit: cover;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  img{
    padding-left: 20px;
    height: 40px;
  }
  nav{
    padding-right: 50px;
    display: flex;
    gap: 34px;
    font-size: 1.2rem;
  }
  .link{
    color: #fff;
    text-decoration: none;
    position: relative;
  }
  .link:hover{
    color: #47B749;
    background-color: transparent !important;
  }

  .link.active{
    color: #47B749
  }
  .link.active::after,
  .link:hover::after {
    content: "";
    width: 40%; /* Adjust the width of the underline */
    height: 2px;
    background: #47B749;
    position: absolute;
    bottom: -4px; /* Distance below the link text */
    left: 5px; /* Align underline center */
    transition: width 0.3s ease; /* Smooth transition effect */
  }


</style>