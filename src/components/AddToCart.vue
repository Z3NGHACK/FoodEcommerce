import { products } from '@/components/data/data';
<template>
  <h2>
    Cart items
  </h2>
  <ul class="item">
    <li v-for="(item, index) in cart"
      :key="index">
      <span class="img">
        <img :src="item.image" alt="#">
      </span>
      <span class="title">
        {{ item.title }}
      </span>
      <span>
        ${{ item.price }}
      </span>
      <button @click="deleteProduct(item.productId)">
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
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    methods: {
      deleteProduct(productId) {
        const updatedCart = this.cart.filter(item => item.productId !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        this.cart = updatedCart;
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
  button{
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
  }
  button:hover{
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
