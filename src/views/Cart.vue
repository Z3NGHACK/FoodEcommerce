<template>
  <div class="cart-container">
    <!-- Cart Section -->
    <div class="cart">
      <div class="cart-header">
        <h2 class="cart-title">Cart</h2>
        <span class="item-count">{{ totalItems }} Items</span>
      </div>
      <div class="cart-table">
        <div class="cart-table-header">
          <span>Product Detail</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        <div class="cart-items">
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <div class="product-detail">
              <img :src="item.image" alt="Product Image" class="product-image" />
              <div class="product-info">
                <p class="product-title">Organic Fruit</p>
                <p class="product-description">{{ item.name }}</p>
                <button class="remove-button" @click="removeItem(index)">Remove</button>
              </div>
            </div>
            <div class="quantity-control">
              <button @click="decreaseQuantity(index)" :disabled="item.quantity === 1">-</button>
              <input type="text" v-model="item.quantity" />
              <button @click="increaseQuantity(index)">+</button>
            </div>
            <span class="item-price">${{ item.price.toFixed(2) }}</span>
            <span class="item-total">${{ (item.quantity * item.price).toFixed(2) }}</span>
          </div>
        </div>
      </div>
      <button class="continue-shopping" @click="continueShopping">← Continue Shopping</button>
    </div>

    <!-- Order Summary Section -->
    <div class="order-summary">
      <h3 class="summary-title">Order Summary</h3>
      <hr class="divider" />
      <div class="summary-row">
        <span>Items:</span>
        <span>{{ totalItems }}</span>
      </div>
      <div class="summary-row">
        <span>Total Items Cost:</span>
        <span>${{ itemsCost.toFixed(2) }}</span>
      </div>
      <div class="summary-section">
        <label for="shipping">Shipping</label>
        <select v-model="shippingCost" id="shipping" class="shipping-select">
          <option value="5">Standard Delivery - $5</option>
          <option value="10">Fast Delivery - $10</option>
        </select>
      </div>
      <p>Payment Option</p>
      <div class="payment-options">  
        <div class="Cash">
          <input type="radio" name="payment" value="cash" checked />
          <span>Cash <img src="../assets/image/cash.png" alt="Cash" class="payment" />
          </span>
        </div>
        <div class="Cash">
          <input type="radio" name="payment" value="credit" />
          <span>Credit Card
            <img src="../assets/image/card.png" alt="Credit-Card" class="payment-card"/>
          </span>
        </div>
      </div>
      <hr class="divider" />
      <div class="summary-total">
        <span>Total Cost:</span>
        <span>${{ totalCost.toFixed(2) }}</span>
      </div>
      <button class="checkout-button" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        // { name: "Banana 1Kg", price: 1.25, quantity: 2, image: "banana.png" },
        // { name: "Kiwi 1Kg", price: 4.5, quantity: 1, image: "kiwi.png" },
        // { name: "Orange 1Kg", price: 3.0, quantity: 1, image: "orange.png" },
        // { name: "Blueberries 1Kg", price: 6.25, quantity: 1, image: "blueberries.png" },
        // { name: "Banana 1Kg", price: 1.25, quantity: 1, image: "banana.png" },
        // { name: "Kiwi 1Kg", price: 4.5, quantity: 1, image: "kiwi.png" },
        // { name: "Orange 1Kg", price: 3.0, quantity: 1, image: "orange.png" },
      ],
      shippingCost: 10,
    };
  },
  computed: {
    totalItems() {
      return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    },
    itemsCost() {
      return this.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    },
    totalCost() {
      return this.itemsCost + parseFloat(this.shippingCost);
    },
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) this.cartItems[index].quantity--;
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* General Layout */
.cart-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px; 
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  box-sizing: border-box;
}

.cart {
  flex: 2;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 600px;
  box-sizing: border-box;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
}

.item-count {
  font-size: 1.5rem;
}

.cart-table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  margin-right: 40px;
  
}

.cart-items {
  margin-top: 15px;
  max-height: 390px;
  overflow-y: auto;
}

.cart-items::-webkit-scrollbar {
  width: 8px;
}

.cart-items::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.cart-item {
  height: auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #4caf50;
  border-radius: 8px;
  background-color: white;
}

.product-detail {
  display: flex;
  align-items: center;
  gap: 12px;
}

.product-image {
  width: 75px;
  height: 55px;
  border-radius: 8px;
}

.product-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.product-title {
  font-weight: bold;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
}

.remove-button {
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 0.9rem;
  cursor: pointer;
}

.remove-button:hover {
  color: #e60000;
}

.quantity-control {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.quantity-control button {
  width: 30px;
  height: 30px;
  border: none;
  background-color: #fff;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  color: black;

}

.quantity-control input {
  width: 25px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.continue-shopping {
  margin-top: 20px;
  font-size: 1rem;
  color: black;
  background: none;
  border: none;
  cursor: pointer;
}

.continue-shopping:hover {
  text-decoration: underline;
}

.order-summary {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 350px;
  box-sizing: border-box;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
}

.divider {
  border: none;
  border-bottom: 1px solid #ddd;
  margin: 12px 0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1rem;
}

.summary-section {
  margin-bottom: 20px;

}

.shipping-select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.payment-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.Cash{
  display: flex;
  align-items: center;
}
.payment-options input[type='radio']{
  margin-right: 10px;
}
.payment-options span {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.payment {
  width: 40px;
  height: 40px;
}
.payment-card {
  width: 80px;

}
.checkout-button {
  width: 100%;
  padding: 12px;
  background: #4caf50;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  margin-top: 220px;
}

.checkout-button:hover {
  background: #45a049;
}

@media (max-width: 1024px) {
  .cart-container {
    flex-direction: column;
    align-items: center;
  }

  .cart {
    width: 100%;
  }

  .order-summary {
    width: 100%;
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .cart {
    padding: 16px;
  }

  .order-summary {
    padding: 16px;
  }

  .cart-title {
    font-size: 1.5rem;
  }

  .item-count {
    font-size: 1.2rem;
  }

  .checkout-button {
    font-size: 1rem;
  }
}
</style>
