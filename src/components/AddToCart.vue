<template>
  <ul class="item">
    <li v-for="(item, index) in cart" :key="index">
      <span class="img">
        <img :src="item.image" alt="#" />
      </span>
      <span class="title">
        {{ item.title }}
      </span>
      
      <button @click="deleteProduct(item.productId)" class="btn">
        Delete
      </button>
      <span >
        <button @click="decreaseQuantity(index)" class="inc">-</button>
        {{ item.quantity }}
        <button @click="increaseQuantity(index)" class="inc">+</button>
      </span>
      <span>
        ${{ item.price }}
      </span>
      <span>
        ${{ item.totalPrice }}
      </span>
      <button @click="deleteProduct(item.productId)" class="btn">
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
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
  },
};
</script>


<style scoped>
  .item{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    width: 90%;
    justify-content: start;
    height: 400px;
    overflow: hidden;
    overflow-y: auto;
  }
  li{
    border-bottom: 1px solid #b4b4b4 ;
    display: flex;
    gap: 50px;
    position: relative;
    padding: 10px 0;
    padding-bottom: 20px;
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
  span{
    display: flex;
    align-items: center;
  }
  img{
    width: 40px;
    height: 40px;
  }
  .title{
    text-align: start;
    width: 200px;
  }
</style>