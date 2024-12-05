   <template>
    <footer class="footer">
      <div class="footer-content">
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
        <div class="footer-section contact-info">
          <p>For any help, please contact us</p>
          <p>+855 012 345 678</p>
          <p><a href="mailto:www.wefresh@gmail.com">www.wefresh@gmail.com</a></p>
        </div>
        <div class="footer-section app-links">
          <p>Get the App</p>
          <a href="#"><img src="@/assets/image/appstore.png" alt="Download on the App Store"></a>
          <a href="#"><img src="@/assets/image/googleplay.png" alt="Get it on Google Play"></a>
        </div>
      </div>
      <div class="footer-social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #6fd3a3;
    padding: 20px;
    color: white;
    text-align: center;
    font-size: 24px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-section {
    margin: 10px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .logo span {
    color: #4caf50;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    margin: 5px 0;
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  
  .app-links p {
    margin-bottom: 10px;
  }
  
  .app-links a img {
    width: 150px;
    margin: 5px;
  }
  
  .footer-social {
    margin-top: 20px;
  }
  
  .footer-social a {
    color: white;
    margin: 0 10px;
    font-size: 20px;
    text-decoration: none;
  }
  
  .footer-social a:hover {
    color: #4caf50;
  }
  </style>
  