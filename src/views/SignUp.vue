<template>
  <div class="sign-up-container">
    <!-- Left Side - Sign Up Form -->
    <div>
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
        <!-- Full Name Input -->
        <div class="form-group">
          <label for="name">
            <i class="users">
              <img src="../assets/image/users.png" alt="users" class="users" />
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

        <!-- Email Input -->
        <div class="form-group">
          <label for="email">
            <i class="emaill">
              <img src="../assets/image/email.png" alt="email" class="email" />
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

        <!-- Password Input -->
        <div class="form-group">
          <label for="password">
            <i class="lock">
              <img src="../assets/image/lock.png" alt="lock" class="lock" />
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

        <!-- Terms and Conditions Checkbox -->
        <div class="terms-container">
          <input type="checkbox" id="terms" v-model="acceptedTerms" />
          <label for="terms">I accept all the terms and conditions</label>
        </div>

        <!-- Sign In Link -->
        <div class="signin-container">
          Already have an account? <router-link to="/signin" class="signin-link">Sign In</router-link>
        </div>

        <!-- Sign Up Button -->
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
/* Sign Up Container */
.sign-up-container {
  display: flex;
  width: 1583px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.home-button{
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: black;
  margin: 15px;
  padding: 2px;
}

/* Left Side - Sign Up Form */
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

.create-account {
  font-size: 2.5rem;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 1rem;
}

.user-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.signup-option {
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.2);
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

/* Right Side - Welcome Section */
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
