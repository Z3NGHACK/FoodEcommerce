<script>
import AddToCart from "@/components/AddToCart.vue";
import { useAuthStore } from "../stores/authStore.js";
import { ref, onMounted, onUnmounted } from "vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    AddToCart,
    Footer
  },
  setup() {
    const authStore = useAuthStore();
    const logout = () => {
      authStore.logout();
      localStorage.removeItem("isLogginIn");
    };

    const isProfileMenuVisible = ref(false);
    const toggleProfileMenu = () => {
      isProfileMenuVisible.value = !isProfileMenuVisible.value;
    };

    const handleClickOutside = (event) => {
      const profileIcon = document.querySelector(".profile-icon");
      const profileMenu = document.querySelector(".profile-menu");
      if (
        profileMenu &&
        profileIcon &&
        !profileMenu.contains(event.target) &&
        !profileIcon.contains(event.target)
      ) {
        isProfileMenuVisible.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return { authStore, logout, isProfileMenuVisible, toggleProfileMenu };
  },
  created() {
    const authStore = useAuthStore();
    if (localStorage.getItem("isLogginIn") === "true") {
      this.isLogginIn = true;
      const storedName = localStorage.getItem("userName");
      const storedEmail = localStorage.getItem("userEmail");
      authStore.login(storedName, storedEmail);
    }
  },
};
</script>

<template>
  <section class="nav_bar">
      <img alt="Site Logo" src="@/assets/image/logo (2).png">
      <nav>
        <span>
          <RouterLink class="link" active-class="active" to="/">Home</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/contact">Contact</RouterLink></span>
        <span v-if="!authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/signup">Sign Up</RouterLink></span>
        <span v-if="!authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/signin">Sign In</RouterLink></span>
        <span v-if="authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/cart">
            <i class="ri-shopping-cart-2-line"></i>
          </RouterLink>
        </span>
        <span v-if="authStore.isAuthenticated" class="profile-dropdown">
          <div class="profile-icon" @click="toggleProfileMenu"></div> <div v-if="isProfileMenuVisible" class="profile-menu">
            <p>Username: <span class="user-info">{{ authStore.userName }}</span></p>
            <p>Email: <span class="user-info">{{ authStore.userEmail }}</span></p>
            <hr>
            <button @click="logout" class="logout-button">
              <i class="ri-logout-circle-r-line"></i> Logout
          </button>
        </div>
      </span>
      </nav>
  </section>
  <header class="hero_section">
    <h1>#Let's Talk</h1>
    <p>We love to hear from you</p>
  </header>

  <section class="contact_info">
    <div class="info">
      <h2>Get In Touch</h2>
      <p>Visit one of our agency locations or contact us today</p>
      <ul>
        <li><strong>Store and Head Office:</strong></li>
        <li>Monday to Sunday: 9am to 10pm</li>
        <li>Email: wefresh@gmail.com</li>
        <li>Phone: +855 012 345 678</li>
        <li>236 st 140 Psar Jas Khan Doun Penh Phnom Penh</li>
      </ul>
    </div>
    <div class="image">
      <img src="@/assets/image/comment_app.png" alt="App Screens">
    </div>
  </section>
  <section class="contact_form">
    <h2>Leave a Message</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="E-mail" required />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>

  <Footer/>
  
</template>

<style scoped>

body {
  font-family: 'Nunito Sans', sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.hero_section {
  text-align: center;
  background: url('/src/assets/image/about.png') center / cover no-repeat;
  color: white;
  padding: 60px 0;
  font-size: 20px;
}

.hero_section h1 {
  font-size: 36px;
  font-weight: 700;
}

.hero_section p {
  font-size: 18px;
  margin-top: 10px;
}


.contact_info {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  font-size: 16px;
}

.contact_info .info h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}
.brand-name {
  font-weight: bold;
  font-size: 1.5rem;
  font-family: Pacifico;
  
}
.contact_info ul {
  list-style: none;
  padding: 0;
}

.contact_info li {
  margin-bottom: 8px;
}

.contact_info .image img {
  max-width: 100%;
  border-radius: 10px;
}


.contact_form {
  background-color: #f9f9f9;
  padding: 40px;
  text-align: center;
}

.contact_form h2 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
}

.contact_form form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.contact_form input,
.contact_form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.contact_form button {
  background-color: #6fbe64;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.profile-dropdown {
  position: relative;
  display: inline-block;
}
.profile-icon {
  width: 30px; 
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #fff; 
  border: 2px solid #28af55; 
  cursor: pointer;
  background-image: url('@/assets/image/profile-icon.png');
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;
}

.profile-icon:hover {
   transform: scale(1.1); 
}

.profile-menu {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: white;
  border: 2px solid #28af55;
  padding: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  min-width: 250px;
  /* display: none; */
  border-radius: 15px;
  font-family: "Poppins", serif;
}
.profile-menu p {
  margin: 0;
  font-weight: bold;
  color: black;
  font-size: 0.8rem;
}

.profile-menu .user-info { 
  font-weight: 600; 
  color: #292929; 
}

.profile-menu hr{
  margin: 10px 0;
  border-top: 1px solid #48b61d;
}
.profile-menu .logout-button {
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  background: rgb(124, 184, 124);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;

  font-weight:600;
  font-size: 0.9rem;
}
.profile-menu .logout-button:hover {
  background-color: #018b2f;
  transform: scale(1.05);
}
.profile-dropdown:hover .profile-menu{
  display: block;
}

</style>