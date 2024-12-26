<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo and Navigation Links -->
      <div class="footer-section logo-links">
        <h1 class="logo">We<span>Fresh</span></h1>
        <ul class="footer-links">
          <li><a href="#">Download Now</a></li>
          <li><a href="#">License</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-section contact-info">
        <p>For any help, please contact us</p>
        <p class="phone">+855 012 345 678</p>
        <p class="email"><a href="mailto:www.wefresh@gmail.com">www.wefresh@gmail.com</a></p>
      </div>

      <!-- App Store Links -->
      <div class="footer-section app-links">
        <h2>Get the App</h2>
        <div class="app-buttons">
          <a href="#"><img src="@/assets/image/appstore.png" alt="Download on the App Store" /></a>
          <a href="#"><img src="@/assets/image/googleplay.png" alt="Get it on Google Play" /></a>
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="footer-social">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-x-twitter"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #6fd3a3;
  color: white;
  padding: 30px 20px;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin: 20px;
}

.logo {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.logo span {
  color: #4caf50;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px; /* Larger font size */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.footer-links li a {
  color: white;
  text-decoration: none;
}

.footer-links li a:hover {
  text-decoration: underline;
}

.contact-info .help-text {
  font-size: 15px; /* Larger font size */
  margin-bottom: 10px;
}

.contact-info .phone,
.contact-info .email a {
  font-size: 18px; /* Larger font size */
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.contact-info .email a:hover {
  text-decoration: underline;
}

.app-links h2 {
  color: white;
  font-size: 22px; /* Title font size */
  margin-bottom: 20px;
}

.app-links .app-buttons {
  display: flex;
  flex-direction: column; /* App buttons stacked vertically */
  gap: 7px;
}
.app-buttons {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  align-items: center;
  gap: 15px; /* Spacing between buttons */
}

.app-links .app-buttons img {
  width: 150px;

}

.footer-social {
  margin-top: 20px;
  text-align: center;
}

.footer-social a {
  color: white;
  font-size: 28px;
  margin: 0 10px;
}

.footer-social a:hover {
  color: #4caf50;
}
</style>