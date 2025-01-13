import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
  }),


  getters: {
    totalItems: (state) => {
      return state.products.reduce((total, product) => total + (product.quantity || 1), 0);
    },

    totalPrice: (state) => {
      return state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },

    cartItems: (state) => {
      return state.products;
    }
  },

  actions: {
    addProduct(product) {
      const existingProduct = this.products.find(p => p.name === product.name);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + (product.quantity || 1);
      } else {
        const sanitizedProduct = this.sanitizeProduct(product);
        this.products.push(sanitizedProduct);
      }

      this.saveToLocalStorage();
    },

    removeProduct(productId) {
      const index = this.products.findIndex(p => p.id === productId);
      if (index > -1) {
        this.products.splice(index, 1);
        this.saveToLocalStorage();
      }
    },

    updateQuantity(productId, newQuantity) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.quantity = Math.max(1, Number(newQuantity));
        this.saveToLocalStorage();
      }
    },

    clearCart() {
      this.products = [];
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.products));
    },

    loadFromLocalStorage() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          this.products = JSON.parse(savedCart);
        } catch (e) {
          console.error('Error loading cart from localStorage:', e);
          this.products = [];
        }
      }
    },

    sanitizeProduct(product) {
      return {
        id: product.id || Date.now().toString(),
        name: product.name || 'Unnamed Product',
        price: isNaN(Number(product.price)) ? 0 : Number(product.price),
        quantity: Math.max(1, Number(product.quantity) || 1),
        ...product
      };
    }
  }
});


