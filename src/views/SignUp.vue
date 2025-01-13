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

<style scoped>
.sign-up-container {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.2s ease;
}

.home {
  position: absolute;
  top: 15px;
  left: 15px;
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
