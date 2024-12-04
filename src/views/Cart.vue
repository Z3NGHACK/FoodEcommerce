//nimol page

<template>
  <div class="cart-container">
    <!-- Left Side: Cart Items -->
    <div class="cart">
      <h2>Cart</h2>
      <hr />
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="product-detail">
          <img :src="item.image" alt="Product Image" />
          <div class="product-info">
            <p class="product-title">{{ item.name }}</p>
            <p class="product-description">{{ item.description }}</p>
          </div>
        </div>
        <div class="quantity-price">
          <div class="quantity-control">
            <button @click="decreaseQuantity(index)">-</button>
            <input type="number" v-model="item.quantity" min="1" />
            <button @click="increaseQuantity(index)">+</button>
          </div>
          <p class="item-total">${{ (item.quantity * item.price).toFixed(2) }}</p>
        </div>
      </div>
      <button class="continue-shopping" @click="continueShopping">Continue Shopping</button>
    </div>

    <!-- Right Side: Order Summary -->
    <div class="order-summary">
      <h3>Order Summary</h3>
      <hr />
      <div class="summary-row">
        <p>Items</p>
        <p>{{ totalItems }}</p>
      </div>
      <hr />
      <div class="shipping-section">
        <label for="shipping">Shipping</label>
        <select v-model="shippingCost" id="shipping">
          <option value="0">Select Option</option>
          <option value="5">Standard Delivery - $5</option>
          <option value="10">Fast Delivery - $10</option>
        </select>
      </div>
      <hr />
      <div class="summary-row total-cost">
        <p>Total Cost</p>
        <p>${{ totalCost.toFixed(2) }}</p>
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
        { name: "Organic Banana", description: "1Kg", price: 1.25, quantity: 3, image: "banana.png" },
        { name: "Organic Kiwi", description: "1Kg", price: 4.5, quantity: 1, image: "kiwi.png" },
        { name: "Organic Orange", description: "1Kg", price: 3.0, quantity: 1, image: "orange.png" },
        { name: "Organic Blueberries", description: "1Kg", price: 6.25, quantity: 1, image: "blueberries.png" },
      ],
      shippingCost: 0,
    };
  },
  computed: {
    totalItems() {
      return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalCost() {
      const itemsCost = this.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
      return itemsCost + parseFloat(this.shippingCost);
    },
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) this.cartItems[index].quantity--;
    },
    },
    checkout() {
      alert("Proceeding to checkout!");
    },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  width: 1583px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart{
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(61, 230, 173, 0.05);
  width: 900px;
}
.order-summary {
  width: 683px;
}

.cart h2, .order-summary h3 {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.product-detail {
  display: flex;
  align-items: center;
}

.product-detail img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 5px;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
}

.product-description {
  font-size: 0.9em;
  color: #777;
}

.quantity-price {
  display: flex;
  align-items: center;
  gap: 20px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-control button {
  background-color: #e0e0e0;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-control button:hover {
  background-color: #ddd;
}

.quantity-control input {
  width: 40px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
}

.item-total {
  font-size: 1em;
  font-weight: bold;
  color: #4caf50;
}

.continue-shopping {
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  border: none;
  color: #333;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.continue-shopping:hover {
  background-color: #ddd;
}
/* rigth side */
.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  color: #333;
}

.shipping-section {
  margin-top: 20px;
}

.shipping-section label {
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
}

.total-cost {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}

.checkout-button {
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.checkout-button:hover {
  background: #45a049;
}
</style>
