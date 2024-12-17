// store/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
  }),
  actions: {
    addProduct(product) {
      const existingProduct = this.products.find((p) => p.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += product.quantity; // Update quantity if already in cart
      } else {
        this.products.push(product);
      }
    },
    clearCart() {
      this.products = [];
    },
  },
});
