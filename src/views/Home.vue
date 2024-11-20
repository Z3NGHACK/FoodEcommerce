<template>
  <section class="header">
    <div class="title">
      <h2>
        Welcome To
      </h2>
      <img src="" alt="#">
      <span>Eat Fresh, Live Well, Shop Well</span>
    </div>
    <div class="search">
      <input type="text" class="text">
      <a><i class="ri-search-2-line"></i></a>
    </div>
  </section>

  <section class="about">
    <div class="foodAbout">
      <img src="" alt="#">
    </div>
    <div class="aboutDes">
      <h2>About </h2>
      <!-- <descript need to be change -->
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
      :image="sellingItem.img"
      :title="sellingItem.title"
      :des="sellingItem.des"
    />
  </section>

  <div class="line"></div>
  <h2>Feauture Items</h2>
  <section class="feature">
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
  <section class="products">

    <Product
      v-for="(product, index) in products"
      :key="index"
      :title="product.title"
      :img="product.img"
      :price="product.price"
      :priceint="product.priceInt"
      :des="product.des"
      :button="product.button"
    />

  </section>
  <div class="explore">
      <span>
        Explore all Products
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

  <section class="newsletter">
    <Newsletter/>
  </section>

  <footer>
    <Footer/>
  </footer>
</template>
<style scoped>
</style>

<script>
import { services, sellingItems, features, products,comments } from '@/components/data/data';
import Comment from '@/components/comment.vue';
import Feature from '@/components/Feature.vue';
import Product from '@/components/product.vue';
import SellingItem from '@/components/SellingItem.vue';
import Service from '@/components/Service.vue';
import Newsletter from '../components/Newsletter.vue';
import Footer from '@/components/Footer.vue';

import '@/components/styling/Home.css'
export default{
  components:{
    Service,
    SellingItem,
    Feature,
    Product,
    Comment,
    Newsletter,
    Footer
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
    }
  },
  
}
</script>