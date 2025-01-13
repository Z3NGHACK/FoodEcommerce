<template>
  <div class="sign-in-container">
    <div>
      <button class="home-button" @click="navigateToHome">Home</button>
      <!-- <button class="home-button" @click="clear">Clear</button>
      <button class="home-button" @click="check">Check</button> -->
    </div>

    <div class="sign-in-left">
      <h1>Sign in</h1>
      <form @submit.prevent="handleSignIn">
        <div class="input-group">
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            required
          />
          <span class="icon"><i class="fa fa-envelope"></i></span>
        </div>
        <div class="input-group">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
          <span class="icon"><i class="fa fa-lock"></i></span>
        </div>
        <a href="#" class="forgot-password">Forgot Password?</a>
        <button type="submit" class="signin-btn">Sign In</button>
      </form>
      <p class="divider">or sign in with</p>
      <div class="social-icons">
        <img src="../assets/image/fb.png" alt="Facebook" class="social-icon" />
        <img src="../assets/image/ig.png" alt="Instagram" class="social-icon" />
        <img src="../assets/image/x.png" alt="X" class="social-icon" />
      </div>
      <p class="signup-text">
        Doesn’t have an account yet?
        <router-link to="/signup" class="signup-link">Sign Up</router-link>
      </p>
    </div>

    <div class="sign-in-right">
      <h1>Welcome back!</h1>
      <h1 class="brand-name">WeFresh</h1>
      <p class="tagline">Eat Fresh, Live Fresh, Shop Well</p>
      <p class="description">
        Let's continue your journey to health and sustainability.<br />
        Sign in to reconnect with your favorite organic picks!
      </p>
      <p>Reconnect with nature, one meal at a time.</p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLogginIn: false,
    };
  },
  methods: {
    handleSignIn() {
      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");
      const storedName = localStorage.getItem("userName");

      if (this.email === storedEmail && this.password === storedPassword) {
        const authStore = useAuthStore();
        authStore.login(storedName, this.email);
        this.isLogginIn = true;
        sessionStorage.setItem("isLogginIn", "true");
        sessionStorage.setItem("userEmail", this.email);
        sessionStorage.setItem("userName", storedName);
        this.$router.push({ name: "home" });
      } else {
        alert("Invalid email or password!");
      }
    },
    navigateToHome() {
      this.$router.push({ name: "home" });
    },
    // check(){
    //   for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     console.log(`${key}: ${localStorage.getItem(key)}`);
    //   }
    // },
    // clear(){
    //   localStorage.clear();
    // }
  },

  created() {
    if (localStorage.getItem("isLogginIn") === "true") {
      this.isLogginIn = true;
      const authStore = useAuthStore();
      const storedEmail = localStorage.getItem("userEmail");
      const storedName = localStorage.getItem("userName");
      authStore.login(storedName, storedEmail);
    }
  },
};
</script>

<style scoped>
/* Base styles for Sign-In Container */
.sign-in-container {
  display: flex;
  width: 1583px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.home-button {
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #47b749;
  margin: 15px;
  padding: 2px;
  transition: font-size 0.5s ease, padding 0.5s ease;
}
.forgot-password{
  color: #47b749;

}

.sign-in-left {
  flex: 1;
  margin-top: 10px;
  color: #47b749;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-right: 2px solid #f1f1f1;
  transition: padding 0.5s ease, border-right 0.5s ease;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid #47b749;
  padding: 0.75rem;
  border-radius: 5px;
  width: 100%;
  transition: padding 0.5s ease, width 0.5s ease;
}

.input-group input {
  border: none;
  outline: none;
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

.input-group .icon {
  color: #ccc;
  margin-left: 10px;
}

.signin-btn {
  width: 100%;
  padding: 1rem;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 15px;
  transition: font-size 0.5s ease, padding 0.5s ease;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  margin-bottom: 2rem;
}

.social-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s, width 0.5s ease, height 0.5s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

.sign-in-right {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6fd696;
  color: white;
  border-radius: 0 10px 10px 0;
  transition: padding 0.5s ease, border-radius 0.5s ease;
}

.brand-name,
.tagline {
  font-family: Pacifico, sans-serif;
  transition: font-size 0.5s ease;
}

/* Media Queries for Responsive Design */
@media screen and (max-width: 1024px) {
  .sign-in-container {
    flex-direction: column;
    max-width: 1024px;
  }

  .sign-in-left,
  .sign-in-right {
    flex: unset;
    width: 100%;
    border-right: none;
  }

  .sign-in-left {
    border-bottom: 2px solid #f1f1f1;
    padding: 1.5rem;
  }

  .sign-in-right {
    padding: 1.5rem;
  }

  .sign-in-left h1 {
    font-size: 2rem;
  }

  .sign-in-left p {
    font-size: 0.9rem;
  }

  .sign-in-right input {
    font-size: 0.9rem;
  }

  .sign-in-right button {
    font-size: 0.9rem;
  }
}
</style>