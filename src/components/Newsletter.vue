<template>
    <div class="container">
        <div class="infor">
            <article>
                <h1>
                    Newsletter
                </h1>
                <p>
                    Sign Up to recieve more exciting offers and exclusive news about our Yadger Grocery Store Products.
                </p>
            </article>
            <div class="newsletter-form"> <!-- Updated class name -->
        <input type="text" placeholder="Enter your Email" />
        <button>Subscribe</button>
      </div>
    </div>
        <!-- <img src="" alt="#"> -->
    </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.infor {
  max-width: 600px;
}

.newsletter-form {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;
}

.newsletter-form input {
  width: 300px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #bcb8b1;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.newsletter-form input:focus {
  border-color: #4caf50; /* Highlight input border on focus */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.newsletter-form button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4caf50; /* Green button */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
  background-color: #388e3c; /* Darker green on hover */
}

</style>