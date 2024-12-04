//nimol page

<template>
    <div class="sign-in-container">
      <!-- Left Side - Sign In Form -->
      <div class="sign-in-left">
        <h1>Sign In</h1>
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
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
    
    </div>
    <p class="signup-text">
      Doesn’t have account yet? <a href="#">Sign Up</a>
    </p>
  </div>
  
      <!-- Right Side - Welcome Section -->
      <div class="sign-in-right">
      <h1>Welcome back!</h1>
      <h1 class="brand-name">WeFresh</h1>
      <p class="tagline">Eat Fresh, Live Fresh, Shop Well</p>
      <p class="description">Let's continue your journey to health and sustainability.<br>Sign in to reconnect with your favorite organic picks!</p><br><br>
      <p>Reconnect with nature, one meal at a time.</p>
    </div>
  </div>
  </template>

  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleSignIn() {
        console.log("Email:", this.email);
        console.log("Password:", this.password);

      },
    },
  };
  </script>
  
  <style scoped>
  .sign-in-container {
    display: flex;
    width: 1583px;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .sign-in-left {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-right: 2px solid #f1f1f1;
}

.sign-in-left h1 {
  color: #27ae60;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid #47B749;
  padding: 0.75rem;
  border-radius: 5px;
  width: 100%;
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
  margin-right: 10px;
}

.forgot-password {
  text-align: right;
  width: 100%;
  margin-bottom: 1.5rem;
}

.forgot-password a {
  color: #27ae60;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
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
  margin-top: 1.5rem;
}

.signin-btn:hover {
  background-color: #1e8449;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.social-icons a {
  font-size: 1.5rem;
  color: #6c757d;
  text-decoration: none;
}

.social-icons a:hover {
  color: #27ae60;
}

.divider{
  margin: 1.5rem;
  font-size: 0.9rem;
  color: #555;
  
}

.signup-text {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}

.signup-text a {
  color: #27ae60;
  text-decoration: none;
}

.signup-text a:hover {
  text-decoration: underline;
}

.sign-in-right {
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

.sign-in-right h1 {
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
  
