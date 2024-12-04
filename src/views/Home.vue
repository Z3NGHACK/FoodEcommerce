<template>
  <section class="header">
    <div class="title">
      <h3>
        Welcome To
      </h3>
      <img src="@/assets/image/logo (2).png" alt="#">
      <span>Eat Fresh, Live Well, Shop Well</span>
    </div>
    <div class="search">
      <a>
        <i class="ri-search-2-line"></i>  
        <input type="text" class="text" placeholder="Discover your preferred goods">
      </a>
    </div>
  </section>

  <section class="about padding">
    <div class="foodAbout">
      <img src="@/assets/image/about.png" alt="#">
    </div>
    <div class="aboutDes">
      <h2>About <a>We</a> Fresh Store</h2>
      <p>
        We Fresh is dedicated to providing high-quality groceries with a focus  on fresh produce and a variety of essentials. We strive to offer an excellent shopping experience, ensuring convenience and a wide selection ofproducts for our customers. Whether it’s fresh fruits, vegetables, or pantry staples, We Fresh aims to meet your daily needs with the best quality and service.
      </p>
      <button type="button"> View Our Achievement</button>
    </div>
  </section>

  <div class="line"></div>
  <h2>Services</h2>
  <section class="services">
    <Service
      v-for="(service, index) in services"
      :key="index"
      :img="service.img" 
      :title="service.title"
      :des="service.des"
      />
  </section>

  <div class="line"></div>
  <h2>Top Selling items</h2>
  <section class="top_sell"> 
    <SellingItem
      v-for="(sellingItem, index) in sellingItems"
      :key="index"
      :img="sellingItem.img"
      :title="sellingItem.title"
      :des="sellingItem.des"
    />
  </section>

  <div class="line"></div>
  <h2>Feauture Items</h2>
  <section class="feature padding">
    <Feature
      v-for="(feature, index) in features"
      :key="index"
      :title="feature.title"
      :rating="feature.rating"
      :category="feature.category"
      :weightPrize="feature.weightPrize"
      :button="feature.button"
      :img="feature.img"
    />
  </section>

  <div class="line"></div>
  <h2>Our Proucts</h2>
  <div class="inp padding">
    <h3>Category: </h3>
    <select v-model="selectedCategory" @change="filterProducts" class="filter">
      <option value="All">All</option>
      <option value="fruit">Fruit</option>
      <option value="vegetable">Vegetable</option>
    </select>
  </div>
  <section class="products">
    <Product
      v-for="(product, index) in displayedProducts"
      :key="index"
      :title="product.title"
      :img="product.img"
      :price="product.price"
      :priceint="product.priceInt"
      :des="product.des"
      :button="product.button"
    />
  </section>
  <div class="explore" @click="toggleDisplayProduct">
    <span>
      {{ showAll ? 'Show Less' : 'Explore More' }}
      <i class="ri-arrow-right-line"></i>
    </span>
  </div>

  <div class="line"></div>
  <h2>
      Our Honorable Customer Speak 
  </h2>
  <section class="comments">
    <Comment
      v-for="(comment, index) in comments"
      :key="index"
      :img="comment.img"
      :title="comment.title"
      :des="comment.des"
      :name="comment.name"
    />
  </section>

  <div class="line"></div>
  <section class="newsletter">
    <Newsletter/>
  </section>

  <footer>
    <Footer/>
  </footer>
</template>


<script>
import { services, sellingItems, features, products,comments } from '@/components/data/data';
import Comment from '@/components/comment.vue';
import Feature from '@/components/Feature.vue';
import Product from '@/components/product.vue';
import SellingItem from '@/components/SellingItem.vue';
import Service from '@/components/Service.vue';
import Newsletter from '../components/Newsletter.vue';
import Footer from '@/components/Footer.vue';
import AddToCart from '@/components/AddToCart.vue';

import '@/components/styling/Home.css'
export default{
  components:{
    Service,
    SellingItem,
    Feature,
    Product,
    Comment,
    Newsletter,
    Footer,
    AddToCart
  },
  data(){
    return{
      //description need to be change
      services,
      //description need to be change
      sellingItems,
      //description need to be change
      features,
      products,
      comments,
      showAll: false,
      allProducts: [],
      filteredProducts: [],
      displayedProducts: [],
      selectedCategory: "All",

    }
  },
  async created(){
    await this.loadProducts();
    this.filteredProducts = this.allProducts;
    this.updateDisplayProducts();
  },
   methods:{
    async loadProducts(){
      const fetchProducts = await new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000);
      });
      this.allProducts = fetchProducts;
    },
    filterProducts() {
    if (this.selectedCategory === "All") {
      this.filteredProducts = this.allProducts;
    } else {
      this.filteredProducts = this.allProducts.filter(
          (product) => product.category === this.selectedCategory
      );
    }
      this.updateDisplayProducts();
    },
    toggleDisplayProduct() {
      this.showAll = !this.showAll;
      this.updateDisplayProducts(); // Update displayed products after toggling
    },
    updateDisplayProducts() {
      this.displayedProducts = this.showAll
        ? this.filteredProducts
        : this.filteredProducts.slice(0, 10);
    },
  },
};
</script>