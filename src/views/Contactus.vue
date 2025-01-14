<template>
  <div class="sign-up-container">
    <div class="home">
      <button class="home-button" @click="home">Home</button>
    </div>

    <div class="sign-up-left">
      <h1 class="create-account">Create Account</h1>
      <img src="../assets/image/user.png" alt="user" class="user-icon" />
      <p class="signup-option">You can sign up with</p>
      <div class="social-icons">
        <img src="../assets/image/fb.png" alt="Facebook" class="social-icon" />
        <img src="../assets/image/ig.png" alt="Instagram" class="social-icon" />
        <img src="../assets/image/x.png" alt="X" class="social-icon" />
      </div>
      <form @submit.prevent="handleSignUp">
        <div class="form-group">
          <label for="name">
            <i class="users">
              <img src="../assets/image/users.png" alt="users" class="users icon" />
            </i>
          </label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">
            <i class="emaill">
              <img src="../assets/image/email.png" alt="email" class="email icon" />
            </i>
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">
            <i class="lock">
              <img src="../assets/image/lock.png" alt="lock" class="lock icon" />
            </i>
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">
            <i class="lock">
              <img src="../assets/image/lock.png" alt="lock" class="lock icon" />
            </i>
          </label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div class="terms-container">
          <input type="checkbox" id="terms" v-model="acceptedTerms" />
          <label for="terms">I accept all the terms and conditions</label>
        </div>

        <div class="signin-container">
          Already have an account? <router-link to="/signin" class="signin-link">Sign In</router-link>
        </div>

        <button type="submit" class="sign-up-button">Sign Up</button>
      </form>
    </div>

    <div class="sign-up-right">
      <h1>Welcome!</h1>
      <h1 class="brand-name">WeFresh</h1>
      <p class="tagline">Eat Fresh, Live Fresh, Shop Well</p>
      <p class="description">
        Start your journey to healthier living with us.<br />
        Sign up to unlock fresh, organic choices for a better you!
      </p>
      <p>Join our community for exclusive access to sustainable, wholesome food</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false,
    };
  },
  methods: {
    home() {
      this.$router.push({ name: "home" });
    },
    handleSignUp() {
      if (!this.acceptedTerms) {
        alert("Please accept the terms and conditions!");
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      localStorage.setItem("userName", this.name);
      localStorage.setItem("userEmail", this.email);
      localStorage.setItem("userPassword", this.password);

      alert("Account created successfully!");
      this.$router.push({ name: "signin" });
    },
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
  background: url('/src/assets/image/about.png') center / cover no-repeat;
  color: white;
  padding: 60px 15px;
  font-size: 20px;
}

.home-button {
  font-size: 1rem;
  font-weight: bold;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #47b749;
  padding: 5px 10px;
  border-radius: 5px;
}

.sign-up-left,
.sign-up-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.sign-up-left {
  background-color: #ffffff;
  border-right: 2px solid #f1f1f1;
}

.sign-up-left h1 {
  color: #27ae60;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;
}

.user-icon {
  width: 50px;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.1);
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #47b749;
  padding: 0.75rem;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
}

.form-group input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  margin-left: 5px;
}

.terms-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.sign-up-button {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  background-color: #47b749;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sign-up-button:hover {
  background-color: #1e8449;
}

.signin-container {
  margin-top: 1rem;
  color: #555;
}

.signin-link {
  color: #27ae60;
  text-decoration: none;
  font-weight: 600;
}

.signin-link:hover {
  text-decoration: underline;
}

.sign-up-right {
  background: #6fd696;
  color: white;
  text-align: center;
}

.sign-up-right h1,
.brand-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: Pacifico;
}

.tagline {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: Pacifico;
}

.description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

@media screen and (max-width: 1024px) {
  .sign-up-container {
    flex-direction: column;
    max-width: 1024px;
  }

  .sign-up-left,
  .sign-up-right {
    flex: unset;
    width: 100%;
    border-right: none;
  }

  .sign-up-left {
    border-bottom: 2px solid #f1f1f1;
  }

  .sign-up-right {
    padding: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .sign-up-container {
    flex-direction: column;
    max-width: 768px;

  }
  .sign-up-left h1 {
    font-size: 1.5rem;
  }

  .form-group {
    max-width: 100%;
  }

  .sign-up-button {
    max-width: 100%;
  }

  .sign-up-right h1,
  .brand-name {
    font-size: 1.5rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .description {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 480px) {
  .home-button {
    font-size: 0.9rem;
    padding: 5px;
  }

  .user-icon {
    width: 40px;
  }

  .social-icon {
    width: 30px;
    height: 30px;
  }

  .sign-up-left h1 {
    font-size: 1.2rem;
  }

  .form-group {
    padding: 0.5rem;
  }

  .sign-up-right h1,
  .brand-name {
    font-size: 1.2rem;
  }

  .tagline {
    font-size: 0.8rem;
  }

  .description {
    font-size: 0.8rem;
  }
}
</style>
