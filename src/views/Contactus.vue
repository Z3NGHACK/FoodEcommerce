<template>
    <section class="nav_bar">
      <img alt="Site Logo" src="@/assets/image/logo (2).png">
      <nav>
        <span>
          <RouterLink class="link" active-class="active" to="/">Home</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/contact">Contact</RouterLink></span>
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
  </section>
    <h2>
        This is Contact page
        This is a change on contact
    </h2>
</template>
<style scoped>
.nav_bar{
    display: flex;
    background: url('/src/assets/image/top_bg.jpg') center/ cover no-repeat;
    object-fit: cover;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: red;
  }
  .nav_bar img{
    padding-left: 20px;
    height: 40px;
  }
  .nav_bar nav{
    padding-right: 50px;
    display: flex;
    gap: 34px;
    font-size: 1.2rem;
  }
</style>