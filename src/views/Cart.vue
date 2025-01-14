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
          <span class="t1">Product Detail</span>
          <span class="t2">Quantity</span>
          <span class="t3">Price</span>
          <span class="t4">Total</span>
        </div>
        <div class="cart_contain">
          <ul class="item">
            <li v-for="(item, index) in cart" :key="index">
              <span class="img">
                <img :src="item.image" alt="#" />
              </span>
              <span class="title">
                {{ item.title }}
              </span>
              
              <span >
                <button @click="decreaseQuantity(index)" class="inc">-</button>
                {{ item.quantity }}
                <button @click="increaseQuantity(index)" class="inc">+</button>
              </span>
              <span>
                ${{ item.price }}
              </span>
              <span>
                ${{ item.totalPrice.toFixed(2) }}
              </span>
              <button @click="deleteProduct(item.productId)" class="btn">
                Delete
              </button>
            </li>
          </ul>
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

      <button @click="addressbtn" class="checkout-btn">Add Address</button>
    <div v-if="isVisibleAddres" class="popup-overlay" @click="toggleAddress">
      <div class="popup-content" @click.stop>
        <div class="address-form-container">
          <h3 class="form-title">Add Delivery Address</h3>
          <form @submit.prevent="save_btnad">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                v-model="address.fullName"
                placeholder="John Doe"
                required
              />
            </div>
            <div class="form-group">
              <label for="streetAddress">Street Address</label>
              <input
                type="text"
                id="streetAddress"
                v-model="address.streetAddress"
                placeholder="123 Main St"
                required
              />
            </div>
            <div class="form-group-row">
              <div class="form-group">
                <label for="city">City or province</label>
                <input
                  type="text"
                  id="city"
                  v-model="address.city"
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                v-model="address.phoneNumber"
                placeholder="123-456-7890"
                required
              />
            </div>
            <button type="submit" class="save-btn">Save Address</button>
          </form>
        </div>
      </div>
    </div>
      

      <hr class="divider" />
      <div class="summary-total">
        <span>Total Cost:</span>
        <span>${{ totalCost.toFixed(2) }}</span>
      </div>
      <!-- <button class="checkout-button" @click="paymentCheckout">Checkout</button> -->
      <button class="checkout-button" @click="checkPayment">Checkout</button>
    </div>
    
    <div v-if="isVisiblePay" class="popup-overlay" @click="closePopups">
      <div class="popup-content" @click.stop>
        <div class="payment_credit">
          <div class="head">
            Confirm Credit Card Information
          </div>
          <div class="cont1">
            <div class="input">
              <h3>Owner</h3>
              <input type="text" placeholder="Enter Name">
            </div>
            <div class="input">
              <h3>CVV</h3>
              <input type="text" placeholder="Enter CVV">
            </div>
          </div>
          <div class="input">
            <h3>Credit Number</h3>
            <input type="text" placeholder="Enter Credit Number">
          </div>
          <div class="typeCardNExp">
            <div>
              Expiration Date
              <input type="text" placeholder="mm/DD">
            </div>
            <div class="card">
              <img src="../assets/image/card.png" alt="Credit-Card" class="payment-card"/>
            </div>
          </div>
          <button class="checkout-button" @click="checkout">payment</button>
        </div>
      </div>
    </div>

    
    <div v-if="isVisible" class="popup-overlay" @click="closePopups">
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
        <div>
          <span>
            Address: {{ address.streetAddress }}
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

export default {
  components:{
  },
  data() {
    return {
      shippingCost: 10,
      cart: [],
      totalPrice: 0,
      isVisible: false,
      payment: '',
      currentTime: '',
      isVisiblePay: false, 
      isVisibleAddres: false,
      address: {
        fullName: '',
        streetAddress: '',
        city: '',
        phoneNumber: '',
      },
    };
  },
  mounted(){
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
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
    deleteProduct(productId) {
      const updatedCart = this.cart.filter((item) => item.productId !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      this.cart = updatedCart;
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
      this.cart[index].totalPrice = this.cart[index].quantity * this.cart[index].price;
      this.updateCartInLocalStorage();
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
        this.cart[index].totalPrice = this.cart[index].quantity * this.cart[index].price;
        this.$set(this.cart, index, updatedItem);
        this.updateCartInLocalStorage();
      }
    },
    updateCartInLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
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
    toggleVisibleCreditCard(){
      this.isVisiblePay = !this.isVisiblePay;
    },  
    toggleVisibleRecipt(){
      this.isVisible = !this.isVisible;
    },
    toggleAddress(){
      this.isVisibleAddres = !this.isVisibleAddres;
    },
    addressbtn(){
      this.isVisibleAddres = true;
    },
    closePopups(){
      this.isVisiblePay = false;
      this.isVisible = false;
    },
    checkout(){
      this.isVisiblePay = false;
      this.isVisible = true;
    },
    paymentCheckout(){
      this.isVisiblePay = true;
    },
    checkPayment(){
      if(this.payment === "cash" ){
        this.isVisible = true;
        this.isVisiblePay = false;
      }else{
        this.isVisible = false;
        this.isVisiblePay = true;
      }
    },
    throwRadio(payment){
      this.payment = payment;
    },
    save_btnad() {
      this.address.streetAddress;
      alert(this.address.streetAddress); // Access address from the component's data
    },


    // closeAddressPopup() {
    //   this.showAddressPopup = false;
    //   this.resetAddressForm();
    // },
    // // Save the entered address
    // saveLocalAddress() {
    //   if (this.address.area === '') {
    //     alert('Please select a delivery area.');
    //     return;
    //   }
    //   console.log('Address Saved:', this.address);
    //   alert(Delivery address saved for ${this.address.area}.);
    //   this.closeAddressPopup();
    // },
    // // Reset the form fields
    // resetAddressForm() {
    //   this.address = {
    //     name: '',
    //     area: '',
    //     phone: '',
    //   };
    // },

    submitAddress() {
      console.log('Address submitted:', this.address);
      alert('Address saved successfully!');
      this.resetAddressForm();
    },
    resetAddressForm() {
      this.address = {
        fullName: '',
        streetAddress: '',
        city: '',
        phoneNumber: '',
      };
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
.address-form-container {
  border: 1px solid #4caf50;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
  background-color: #fdfdfd;
  font-family: Arial, sans-serif;
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group-row {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.payment_credit .head{
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #45a049;
}
.payment_credit{
  display: flex;
  flex-direction: column;
}
.payment_credit h3{
}
.payment_credit input{
  padding: 5px 20px;
  width: 100%;
}
.payment_credit .typeCardNExp{
  display: flex;
  align-items: center;
}
.payment_credit .typeCardNExp input{
  width: 80%;
}
.payment_credit .typeCardNExp .card{
  width: 30%;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: end;
}
.submit-button:hover {
  background-color: #45a049;
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
.btn{
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
  }
  .btn:hover{
    background-color: #49a34c;
  }
  .inc{
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 6px;
    border-radius: 5px;
    margin: 0 5px;
  }
  .inc:hover{
    background-color: #49a34c;
  }
.t2{
  position: absolute;
  left: 440px;
}
.t3{
  position: absolute;
  left: 560px;
}
.t4{
  position: absolute;
  left: 660px;
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
.checkout-btn {
  width: 30%;
  padding: 12px;
  background: #4caf50;
  color: white;
  font-size: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}
.save-btn {
  width: 100%;
  padding: 12px;
  background: #4caf50;
  color: white;
  font-size: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
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