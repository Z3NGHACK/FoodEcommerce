<template>
  <header>
    <div class="title">
      <h2>
        Welcome To
      </h2>
      <img src="" alt="#">
      <span>Grocery Store</span>
    </div>
    <div class="search">
      <input type="text" class="text">
      <a><i class="ri-search-2-line"></i></a>
    </div>
  </header>

  <section class="about">
    <div class="foodAbout">
      <img src="" alt="#">
    </div>
    <div class="aboutDes">
      <h2>About </h2>
      <!-- <descript need to be change -->
      <p>
        Our store is dedicated to providing high-quality, fresh, and organic products straight from local farms to your table. We believe in the importance of healthy living and sustainable practices, offering a wide range of fruits, vegetables, and other farm-fresh items grown without harmful chemicals. With a focus on quality, sustainability, and customer satisfaction, our store is your trusted source for nutritious and environmentally friendly food options.
      </p>
      <button type="button"> View Our Achievement</button>
    </div>
  </section>

  <section class="sevices">
    <Service
      v-for="(service, index) in services"
      :key="index"
      :image="service.img"
      :title="service.title"
      :des="service.des"
    />
  </section>

  <section class="top_sell">  
    <SellingItem
      v-for="(sellingItem, index) in sellingitems"
      :key="index"
      :image="sellingitem.img"
      :title="sellingitem.title"
      :des="sellingitem.des"
    />
  </section>

  <section class="Feature_items">
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
<script>
import { services, sellingItems, features, products,comments } from '@/components/data/data';
import Comment from '@/components/comment.vue';
import Feature from '@/components/Feature.vue';
import Product from '@/components/product.vue';
import SellingItem from '@/components/SellingItem.vue';
import Service from '@/components/Service.vue';
import Newsletter from '../components/Newsletter.vue';
import Footer from '@/components/Footer.vue';

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