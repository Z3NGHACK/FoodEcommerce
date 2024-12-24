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
    </header>
    <RouterView 
    />
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