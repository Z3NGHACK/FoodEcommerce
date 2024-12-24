<template>
    <div v-if="showCart" class="add-to-cart">
      <!-- Banner Section -->
      <div class="banner">
        <span class="crown-icon">👑</span>
        <span class="banner-text">
          Unlock pandapro benefits: <strong>free delivery & more!</strong>
          <a href="#" class="learn-more">See how</a>
        </span>
        <button class="close-btn" @click="closeCart">✖</button>
      </div>
  
      <!-- Cart Info Section -->
      <div class="cart-info">
        <div class="free-delivery">
          <span class="check-icon">✔</span>
          <span class="free-delivery-text">You've got free delivery!</span>
        </div>
  
        <!-- Cart Summary -->
        <div class="cart-summary">
          <div class="item-count">
            <span class="count-circle">{{ itemCount }}</span>
          </div>
          <div class="cart-details">
            <button class="view-cart-btn">
              <span>View your cart</span>
              <span class="cart-item-name">{{ cartItemName }}</span>
            </button>
          </div>
          <div class="cart-total">
            <span class="price">{{ formattedPrice }}</span>
          </div>
        </div>
      </div>
  
      <!-- Input fields to change cart item values -->
      <div v-if="showInputs" class="cart-inputs">
        <label for="itemCount">Item Count:</label>
        <input v-model="itemCount" id="itemCount" type="number" min="1" />
  
        <label for="cartItemName">Item Name:</label>
        <input v-model="cartItemName" id="cartItemName" type="text" />
  
        <label for="itemPrice">Item Price:</label>
        <input v-model="itemPrice" id="itemPrice" type="number" min="0" step="0.01" />
        
        <button @click="closeInputs" class="done-btn">Done</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddToCart",
    props: {
      initialItemCount: {
        type: Number,
        default: 1,
      },
      initialCartItemName: {
        type: String,
        default: "   ",
      },
      initialItemPrice: {
        type: Number,
        default: 0.00,
      },
    },
    data() {
      return {
        showCart: true,
        itemCount: this.initialItemCount,
        cartItemName: this.initialCartItemName,
        itemPrice: this.initialItemPrice,
        showInputs: true, // Controls visibility of input fields
      };
    },
    computed: {
      totalCost() {
        return this.itemCount * this.itemPrice;
      },
      formattedPrice() {
        return `$${this.totalCost.toFixed(2)}`;
      },
    },
    methods: {
      closeCart() {
        this.showCart = false; // Hides the entire component
      },
      closeInputs() {
        this.showInputs = false; // Hides the input fields and shows the updated values
      },
    },
  };
  </script>
  
  <style scoped>
  .add-to-cart {
    font-family: Arial, sans-serif;
  }
  
  /* Banner styles */
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #7e57c2;
    color: white;
    padding: 10px 15px;
  }
  
  .banner-text {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
  }
  
  .learn-more {
    color: yellow;
    text-decoration: underline;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  
  /* Cart Info styles */
  .cart-info {
    margin: 20px 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    background-color: #f8f9fa;
  }
  
  .free-delivery {
    display: flex;
    align-items: center;
    color: green;
    margin-bottom: 15px;
  }
  
  .check-icon {
    margin-right: 10px;
  }
  
  .cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .item-count .count-circle {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e91e63;
    color: white;
    border-radius: 50%;
  }
  
  .view-cart-btn {
    flex: 1;
    background-color: #e91e63;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin-left: 10px;
    text-align: left;
    font-size: 16px;
  }
  
  .cart-item-name {
    display: block;
    font-size: 12px;
    color: #f8f9fa;
  }
  
  .cart-total {
    font-size: 18px;
    font-weight: bold;
  }
  
  /* Input fields for user input */
  .cart-inputs {
    margin-top: 15px;
  }
  
  .cart-inputs label {
    display: block;
    margin-bottom: 5px;
  }
  
  .cart-inputs input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .done-btn {
    background-color: #7e57c2;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
  }
  </style>
  