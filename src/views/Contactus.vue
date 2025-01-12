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
    const isNavbarVisible = ref(false);


    const toggleNavbar = () => {
      isNavbarVisible.value = !isNavbarVisible.value;
    };
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

    return { 
    authStore, 
    logout, 
    isProfileMenuVisible, 
    toggleProfileMenu, 
    isNavbarVisible, 
    toggleNavbar
  };
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
  <div class="contact_container">
    <section class="nav_bar">
      <img alt="Site Logo" src="@/assets/image/logo (2).png">
      <button class="hamburger-btn" @click="toggleNavbar">
        <i v-if="!isNavbarVisible" class="ri-menu-line"></i>
      </button>
      <nav :class="{ 'is-visible': isNavbarVisible }"  @click="toggleNavbar">
        <i v-if="isNavbarVisible" class="ri-arrow-left-line close"></i>
        <span>
          <RouterLink class="link" active-class="active" to="/">Home</RouterLink>
        </span>
        <span>
          <RouterLink class="link" active-class="active" to="/contact">Contact</RouterLink>
        </span>
        <span v-if="!authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/signup">Sign Up</RouterLink>
        </span>
        <span v-if="!authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/signin">Sign In</RouterLink>
        </span>
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
        <li><strong><i class="ri-store-line"></i> Store and Head Office:</strong></li>
        <li><i class="ri-time-line"></i> Monday to Sunday: 9am to 10pm</li>
        <li><i class="ri-mail-line"></i> Email: wefresh@gmail.com</li>
        <li><i class="ri-phone-line"></i> Phone: +855 012 345 678</li>
        <li><i class="ri-map-pin-line"></i> 236 st 140 Psar Jas Khan Doun Penh Phnom Penh</li>
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
  </div>

  
</template>

<style scoped>
body {
  font-family: 'Nunito Sans', sans-serif;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}
.hero_section {
  text-align: center;
  background: url('/src/assets/image/cont.jpg') center/ cover no-repeat;
  color: white;
  padding: 60px 15px;
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
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  font-size: 16px;
}
.contact_info .info {
  margin-bottom: 20px;
  text-align: center;
  padding-left: 50px;
}
.contact_info .info h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}
.contact_info ul {
  list-style: none;
  padding: 0;
  text-align: left;
}
.contact_info .image img {
  max-width: 100%;
  border-radius: 10px;
}
.contact_form {
  background-color: #f9f9f9;
  padding: 40px 15px;
  text-align: center;
}
.contact_form h2 {
  font-size: 24px;
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
  background-color: #47B749;
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
.profile-menu {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: white;
  border: 2px solid #28af55;
  padding: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  min-width: 250px;
  border-radius: 15px;
  font-family: "Poppins", serif;
}
.profile-menu p {
  margin: 0;
  font-weight: bold;
  color: black;
  font-size: 0.8rem;
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
  font-weight: 600;
  font-size: 0.9rem;
}
.profile-menu .logout-button:hover {
  background-color: #018b2f;
  transform: scale(1.05);
}
.nav_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
}

nav .close{
  position: absolute;
  right: 10%;
  bottom: 20px;
  color: #47B749;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #47B749;
  padding: 2px 15px;
  border-radius: 10px;
  display: none;
}
.hamburger-btn {
  position: absolute;
  right: 50px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #47B749;
  display: none;
}
.hamburger-btn i{
  position: absolute;
  z-index: 1000;
}

@media screen and (max-width: 1024px) {
  .contact_container{
    max-width: 1024px;
  }
  nav {
    position: fixed;
    top: 0;
    padding: 20px;
    right: 0;
    background-color: rgb(255, 255, 255);
    border-radius: 0 0 0 10px;
    width: 15%;
    flex-direction: column;
    justify-content: start;
    transform: translateX(100%);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    height: 30%;
    gap: 0;
    z-index: 10;
    transition: 0.2s ease;
  }

  nav.is-visible {
    transform: translateX(0);
  }

  .hamburger-btn {
    display: block;
    color: #47B749
  }
  .hamburger-btn i{
    z-index: 100;
  }
  nav .close{
    display: block;
  }
  nav .close:hover{
    background-color:#47B749 ;
    color: #fff;
  }
  nav span{
    padding: 5px;
    display: flex;
  }
  nav span:hover{
    background-color: #28af55;
  }
}
@media (min-width: 768px) {
  .contact_info {
    flex-direction: row;
    justify-content: space-between;
  }

  .contact_info .info {
    text-align: left;
    margin-right: 20px;
  }

  .contact_info .image {
    margin-left: 20px;
  }

  .hero_section {
    padding: 80px 40px;
  }
}

@media (min-width: 1024px) {
  .hero_section h1 {
    font-size: 48px;
  }

  .hero_section p {
    font-size: 22px;
  }

  .contact_form h2 {
    font-size: 28px;
  }

  .contact_form button {
    font-size: 18px;
  }

  .contact_info ul {
    font-size: 18px;
  }
}
</style>