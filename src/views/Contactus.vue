
<template>
  <section class="nav_bar">
      <img alt="Site Logo" src="@/assets/image/logo (2).png">
      <nav>
        <span>
          <RouterLink class="link" active-class="active" to="/">Home</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/contact">Contact</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/signup">Sign Up</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/signin">Sign In</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/cart">
            <i class="ri-shopping-cart-2-line"></i>
          </RouterLink>
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
        <li><strong>Store and Head Office:</strong></li>
        <li>Monday to Sunday: 9am to 10pm</li>
        <li>Email: wefresh@gmail.com</li>
        <li>Phone: +855 012 345 678</li>
        <li>236 st 140 Psar Jas Khan Doun Penh Phnom Penh</li>
      </ul>
    </div>
    <div class="image">
      <img src="@/assets/image/a.png" alt="App Screens">
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

  <footer class="footer">
    <div>
      <p class="brand-name">WeFresh</p>
      <ul>
        <li>About</li>
        <li>Pricing</li>
        <li>Careers</li>
        <li>Help</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div class="contacts">
      <p>For any help, please contact us:</p>
      <p>Email: wefresh@gmail.com</p>
      <p>Phone: +855 012 345 678</p>
    </div>
    <div class="apps">
      <p>Get the App</p>
      <img src="@/assets/image/about.png" alt="App Store" />
      <img src="@/assets/image/about.png" alt="Google Play" />
    </div>
  </footer>
  
</template>
<script>
import '@/components/styling/Home.css'
</script>

<style scoped>

body {
  font-family: 'Nunito Sans', sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.hero_section {
  text-align: center;
  background: url('/src/assets/image/about.png') center / cover no-repeat;
  color: white;
  padding: 60px 0;
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
  justify-content: space-between;
  padding: 40px;
  font-size: 16px;
}

.contact_info .info h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}
.brand-name {
  font-weight: bold;
  font-size: 1.5rem;
  font-family: Pacifico;
  
}
.contact_info ul {
  list-style: none;
  padding: 0;
}

.contact_info li {
  margin-bottom: 8px;
}

.contact_info .image img {
  max-width: 100%;
  border-radius: 10px;
}


.contact_form {
  background-color: #f9f9f9;
  padding: 40px;
  text-align: center;
}

.contact_form h2 {
  font-size: 28px;
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
  background-color: #6fbe64;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}


.footer {
  background-color: #6fbe64;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 14px;
}

.footer h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 5px;
}

.footer .apps img {
  max-width: 120px;
  margin: 5px;
}
</style>