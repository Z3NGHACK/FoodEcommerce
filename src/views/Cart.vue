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
        <div class="cart_contain">
          <AddToCart/>
        </div>
        <!-- <div class="cart-items">
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
        </div> -->
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
          <input type="radio" name="payment" value="cash" @click="throwRadio('cash')"/>
          <span>Cash <img src="../assets/image/cash.png" alt="Cash" class="payment" />
          </span>
        </div>
        <div class="Cash">
          <input type="radio" name="payment" value="credit"  @click="throwRadio('Credit Card')"/>
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
    
    <div v-if="isVisible" class="popup-overlay" @click="toggleVisibleRecipt">
      <div class="popup-content" @click.stop>
        <div class="logo des">
          <img src="../assets/image/logo (2).png" alt="#">
        </div>
        <div class="address des">
          <span>236 st 140 Psar Jas Khan Doun Penh Phnom Penh</span>
        </div>
        <div class="inv_num des">
          <span>Trans#: 32664</span>
        </div>
        <div class="date des">
          <span>{{ currentTime }}</span>
        </div>
        <div class="pay">
          <span>
            Pay with: {{payment}}
          </span>
        </div>
        <ul class="item">
          <li v-for="(item, index) in cart"
            :key="index">
            <span>
              {{ index + 1 }}
            </span>
            <span class="img">
              <img :src="item.image" alt="#">
            </span>
            <span class="title">
              {{ item.title }}
            </span>
            <span>
              ${{ item.price }}
            </span>
          </li>
        </ul>
        <div class="line"></div>
        <div class="priceDes">
          <div class="priceDess">
            <div class="right">
              <span>Delivery fee: </span>
              <span>Total item cost: </span>
            </div>
            <div class="left">
              <span>${{ shippingCost }}</span>
              <span>${{ totalPrice.toFixed(2) }}</span>
            </div>
          </div>
          <div class="total">Total Cost: <span class="price"> ${{ totalCost.toFixed(2) }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddToCart from '@/components/AddToCart.vue';

export default {
  components:{
    AddToCart
  },
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
      cart: [],
      totalPrice: 0,
      isVisible: false,
      payment: '',
      currentTime: ''
    };
  },
  mounted(){
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.calculateTotalPrice();
  },
  computed: {
    totalItems() {
      return this.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    },
    itemsCost() {
      return this.cart.reduce((acc, item) => acc + (item.quantity || 1) * item.price, 0);
    },
    totalCost() {
      return this.itemsCost + parseFloat(this.shippingCost);
    },
  },

  created() {
    this.updateTime();
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
    continueShopping() {
      this.$router.push({name: "home"})
    },
    calculateTotalPrice() {
      // Sum up the price of each item (price * quantity) in the cart
      this.totalPrice = this.cart.reduce((acc, item) => {
        // Default quantity to 1 if it's missing
        const quantity = item.quantity || 1;
        return acc + item.price * quantity;
      }, 0);
    },
    toggleVisibleRecipt(){
      this.isVisible = !this.isVisible;
    },
    checkout(){
      this.toggleVisibleRecipt();
    },
    throwRadio(payment){
      this.payment = payment;
    },
    updateTime() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      this.currentTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

  },
  watch: {
    cart(){
      this.calculateTotalPrice();
    }
  }
};
</script>

<style scoped>
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
.priceDes{
  display: flex;
  flex-direction: column;
  align-items: end;
}
.priceDess{
  display: flex;
  align-items: end;
}
.priceDess .right,
.priceDess .left{
  display: flex;
  flex-direction: column;
  align-items: end;
}
.priceDess .left span{
  font-weight: 600;
}
.priceDes span{
  padding-left: 10px;
}
.price{
  font-weight: 600;
  width: 500px;
  font-size: 1rem;
}
.logo{
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: rgb(154, 235, 157);
  border-radius: 5px;
}
.logo img{
  height: 100%;
  width: auto;
}
.line{
  width: 100%;
  border-bottom: 1px solid #666;

}
.inv_num span{
  font-weight: 600;
  padding: 5px 0;
}
.address{
  padding: 10px 0;
  font-size: 0.8rem;
}
.pay{
  padding: 5px 0;
}
.item{
  padding: 0 10px;
}
.des{
  width: 60%;
  margin: 0 auto;
  text-align: center;
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

.item{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  justify-content: start;
  overflow: hidden;
  overflow-y: auto;
  height: 300px;
}
li{
  display: flex;
  gap: 50px;
  position: relative;
  padding: 5px 0;
  font-size: 0.8rem;
}
img{
  width: 20px;
  height: 20px;
}
.title{
  text-align: start;
  width: 200px;
}
.total{
  padding: 20px 0;
  font-size: 1.4rem;
}
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    backdrop-filter: blur(8px); /* Blur effect */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.popup-content {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 20px;
    width: 25%;
    max-width: 800px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
}
.close-btn {
    background: #fff;
    color: #000;
    border: #fff 1px solid;
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    transition: 0.2s ease;
}
.close-btn:hover{
    background-color: #47B749;
    color: #fff;
    border: #47B749 1px solid;
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