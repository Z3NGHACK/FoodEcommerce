import { products } from '@/components/data/data';
<template>
  <h2>
    Cart items
  </h2>
  <ul>
    <li v-for="(item, index) in cart"
      :key="index">
      this is {{ item.title }} - 
      price: {{ item.price }} - 
      Id: {{ item.productId }}
      <button @click="deleteProduct(item.productId)"
    >Delete</button>
    </li>
  </ul>
</template>
<script>
  export default{


    data(){
      return{
        cart: [],
      }
    },
    mounted(){
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    methods: {
      deleteProduct(productId) {
        const updatedCart = this.cart.filter(item => item.productId !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        this.cart = updatedCart;
      },
    },
  }
</script>