//nimol page

<template>
  <div class="sign-up-container">
    <!-- Left Side - Sign Up Form -->
    <div class="sign-up-left">
      <h1>Create Account</h1>
      <form @submit.prevent="handleSignUp">
        <div class="form-group">
          <label for="name">
            <i class="fas fa-user"></i>
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
            <i class="fas fa-envelope"></i>
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
            <i class="fas fa-lock"></i>
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
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

    <!-- Right Side - Welcome Section -->
    <div class="sign-up-right">
      <h1>Welcome!</h1>
      <h1 class="brand-name">WeFresh</h1>
      <p class="tagline">Eat Fresh, Live Fresh, Shop Well</p>
      <p class="description">Start your journey to healthier living with us.<br>Sign up to unlock fresh, organic choices for a better you!</p><br><br>
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
    };
  },
  methods: {
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Full Name:", this.name);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
  },
};
</script>

<style scoped>
.sign-up-container {
  display: flex;
  width: 1583px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sign-up-left {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-right: 2px solid #f1f1f1;
}

.sign-up-left h1 {
  color: #27ae60;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid #47B749;
  padding: 0.75rem;
  border-radius: 5px;
  width: 100%;
}

.form-group input {
  border: none;
  outline: none;
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

.form-group i {
  color: #ccc;
  margin-right: 10px;
}

.terms-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.terms-container input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}

.terms-container label {
  cursor: pointer;
  color: #555;
}

.sign-up-button {
  width: 100%;
  padding: 1rem;
  background-color: #47B749;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.3s;
}

.sign-up-button:hover {
  background-color: #1e8449;
}

.signin-container {
  color: #555;
}

.signin-container .signin-link {
  color: #27ae60;
  text-decoration: none;
  font-weight: 600;
}

.signin-container .signin-link:hover {
  text-decoration: underline;
}

.sign-up-right {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6FD696;
  color: white;
  border-radius: 0 10px 10px 0;
}

.sign-up-right h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: Pacifico;
}

.brand-name {
  font-weight: bold;
  font-size: 3.5rem;
  font-family: Pacifico;
  
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: Pacifico;
}

.description {
  text-align: center;
  font-size: 1.2rem;
}
</style>
