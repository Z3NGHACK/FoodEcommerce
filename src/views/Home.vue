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
      v-for="(sellingitem, index) in sellingitems"
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
      services:[
        {img: '',
         title: 'Free Delivery on order above $100',
         des: 'Free Delivery on all orders'
        },
        {img: '',
         title: 'Money Return Safely',
         des: 'Money Back Gaurantee within 24 Hrs'
        },
        {img: '',
         title: 'Customer Service 24/7',
         des: 'Online Support'
        }
      ],
      //description need to be change
      sellingitems:[
        {
          title: 'Fresh Vegetable',
          des: ' Nutrient-rich and locally grown, our fresh vegetables are harvested at peak ripeness for optimal flavor and quality.',
          img: ''
        },
        {
          title: 'Organic Fruits',
          des: 'From sustainable farms, our organic fruits are free from pesticides, delivering pure, natural sweetness.',
          img: ''
        },
        {
          title: 'Organic Farming',
          des: 'Our eco-friendly farming nurtures soil and biodiversity, producing food that’s good for you and the planet.',
          img: ''
        }
      ],
      //description need to be change
      features:[
        {
          weightPrize: '1kg/$3.50',
          button: 'button1',
          title: 'Strawberry',
          rating: '',
          category: 'Fruits',
          img: ''
        },
        {
          weightPrize: '1kg/$3.20',
          button: 'button2',
          title: 'Pomegranate',
          rating: '',
          category: 'Fruits',
          img: ''
        }
      ],
      products:[
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        },
        {
          title: 'Peaches',
          img: '',
          price: '500g',
          priceInt: 1.29,
          des: String,
          button: 'button1',
        }
      ],
      comments:[
        {    
          title: 'Quality Products',
          des: 'The freshness and quality of their products are unmatched, making every purchase worth it.',
          img: '',
          name: 'Eleanor Pena'
        },
        {    
          title: 'Affordable Prices',
          des: 'Great value for the quality offered, with prices that fit any budget.',
          img: '',
          name: 'Bessie Cooper'
        },
        {    
          title: 'Mindblowing Service',
          des: 'The customer service is exceptional, always going above and beyond to ensure a fantastic shopping experience.',
          img: '',
          name: 'Leslie Alexander'
        },

      ],
    }
  },
  
}
</script>