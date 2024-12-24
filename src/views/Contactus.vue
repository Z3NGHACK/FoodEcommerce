<script>
import AddToCart from "@/components/AddToCart.vue";
import { useAuthStore } from "../stores/authStore.js";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    AddToCart,
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
    <img alt="Site Logo" src="@/assets/image/logo (2).png" />
    <nav>
      <span>
        <RouterLink class="link" active-class="active" to="/">Home</RouterLink>
      </span>
      <span>
        <RouterLink class="link" active-class="active" to="/contact"
          >Contact</RouterLink
        >
      </span>
      <span v-if="!authStore.isAuthenticated">
        <RouterLink class="link" active-class="active" to="/signup"
          >Sign Up</RouterLink
        >
      </span>
      <span v-if="!authStore.isAuthenticated">
        <RouterLink class="link" active-class="active" to="/signin"
          >Sign In</RouterLink
        >
      </span>
      <span v-if="authStore.isAuthenticated">
        <RouterLink class="link" active-class="active" to="/cart">
          <i class="ri-shopping-cart-2-line"></i>
        </RouterLink>
      </span>
      <span v-if="authStore.isAuthenticated" class="profile-dropdown">
        <div class="profile-icon" @click="toggleProfileMenu"></div>
        <div v-if="isProfileMenuVisible" class="profile-menu">
          <p>
            Username: <span class="user-info">{{ authStore.userName }}</span>
          </p>
          <p>
            Email: <span class="user-info">{{ authStore.userEmail }}</span>
          </p>
          <hr />
          <button @click="logout" class="logout-button">
            <i class="ri-logout-circle-r-line"></i> Logout
          </button>
        </div>
      </span>
    </nav>
  </section>
  <h2>
    This is Contact page This is a change on contact
    <AddToCart />
  </h2>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

.nav_bar {
  display: flex;
  background: url("/src/assets/image/top_bg.jpg") center/ cover no-repeat;
  object-fit: cover;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: red;
}
.nav_bar img {
  padding-left: 20px;
  height: 40px;
}
.nav_bar nav {
  padding-right: 50px;
  display: flex;
  gap: 34px;
  font-size: 1.2rem;
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
  background-image: url("@/assets/image/profile-icon.png");
  background-size: cover;
  background-position: center;
}
.profile-menu {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: white;
  border: 1px solid #28af55;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
.profile-menu hr {
  margin: 10px 0;
}
.profile-menu .logout-button {
  width: 40%;
  margin-top: 10px;
  padding: 5px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;
}
.profile-menu .logout-button:hover {
  background-color: #d32f2f;
  border-radius: 10px;
  transform: scale(1.1);
}
.profile-dropdown:hover .profile-menu {
  display: block;
}
</style>
