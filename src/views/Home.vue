<template>
  <section class="nav_bar">
      <img alt="Site Logo" src="@/assets/image/logo (2).png">
      <nav>
        <span>
          <RouterLink class="link" active-class="active" to="/">Home</RouterLink></span>
        <span>
          <RouterLink class="link" active-class="active" to="/contact">Contact</RouterLink></span>
        <span v-if="!authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/signup">Sign Up</RouterLink></span>
        <span v-if="!authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/signin">Sign In</RouterLink></span>
        <span v-if="authStore.isAuthenticated">
          <RouterLink class="link" active-class="active" to="/cart">
            <i class="ri-shopping-cart-2-line"></i>
          </RouterLink>
        </span>
        <span v-if="authStore.isAuthenticated" class="profile-dropdown">
          <div class="profile-icon" @click="toggleProfileMenu"></div> <div v-if="isProfileMenuVisible" class="profile-menu">
            <p>Username: <span class="user-info">{{ authStore.userName }}</span></p>
            <p>Email: <span class="user-info">{{ authStore.userEmail }}</span></p>
            <hr>
            <button @click="logout" class="logout-button">
              <i class="ri-logout-circle-r-line"></i> Logout
          </button>
        </div>
      </span>
      </nav>
  </section>
  <section class="header">
    <div class="title">
      <h3>
        Welcome To
      </h3>
      <img src="@/assets/image/logo (2).png" alt="#">
      <span>Eat Fresh, Live Well, Shop Well</span>
    </div>
    <div>
      <Search @input="searchQuery = $event" />

      <div class="results">
        <div v-for="(product, index) in filteredProducts" :key="index" class="product-card">
          <img :src="product.img" :alt="product.title" />
          <div class="details">
            <h3>{{ product.title }}</h3>
            <p>{{ product.price }} - ${{ product.priceInt }}</p>
            <p>{{ product.category }}</p>
          </div>
          <div class="addCartSearch">
            <button @click="showProductDetail(product.id)">Add to Cart</button>
          </div>
        </div>
      </div>

      <div v-if="isVisible" class="popup-overlay" @click="toggleVisible">
        <div class="popup-content" @click.stop>
          <ProductDetail 
            :productId="productId"
            :title="title"
            :price="price"
            :des="des"
            :dePrice="dePrice"
            :image="image"
            />
          <button class="close-btn" @click="toggleVisible">
            <i class="ri-arrow-left-line"></i>
          </button>
        </div>
      </div>
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
      :category="feature.category"
      :price="feature.price"
      :button="feature.button"
      :img="feature.img"
      :des="feature.des"
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
      <option value="meat">Meat</option>
      <option value="beverage">Beverages</option>
      <option value="ingredient">Ingredient</option>
      <option value="snack">Junk Food</option>
    </select>
  </div>
  <section class="products">
    <Product
      v-for="(product, index) in displayedProducts"
      :key="index"
      :productId="product.id"
      :title="product.title"
      :img="product.img"
      :price="product.price"
      :dePrice="product.dePrice"
      :priceint="product.priceInt"
      :des="product.des"
      :button="product.button"
      :amount="product.amount"
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
import Footer from '@/components/Footer.vue';
import AddToCart from '@/components/ProductDetail.vue';
import Search from '@/components/Search.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import testingCart from '@/components/testingCart.vue';
import  {useAuthStore} from '../stores/authStore.js';
import { ref, onMounted, onUnmounted } from 'vue';

import '@/components/styling/Home.css'
export default{
  setup() {
    const authStore = useAuthStore();
    const logout = () => {
      authStore.logout();
      localStorage.removeItem("isLogginIn");
    };
    const isProfileMenuVisible = ref(false);
    const toggleProfileMenu = () => {
      isProfileMenuVisible.value = !isProfileMenuVisible.value;
    };
    const handleClickOutside = (event) => {
      const profileIcon = document.querySelector('.profile-icon');
      const profileMenu = document.querySelector('.profile-menu');
      if(
        profileMenu &&
        profileIcon && 
        !profileMenu.contains(event.target) && 
        !profileIcon.contains(event.target)
      ){
        isProfileMenuVisible.value = false;
      }
    }
    
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });
    return { authStore, logout, isProfileMenuVisible, toggleProfileMenu };
  },
  created() {
    if(localStorage.getItem("isLogginIn") === "true"){
      this.isLogginIn = true;
      this.$store.login();
    }
  },
  components:{
    Service,
    SellingItem,
    Feature,
    Product,
    Comment,
    Footer,
    AddToCart,
    Search,
    ProductDetail,
    testingCart,
  },
  data(){
    return{
      services,
      sellingItems,
      features,
      products: products,
      comments,
      showAll: false,
      allProducts: [],
      filteredProducts: [],
      displayedProducts: [],
      selectedCategory: "All",
      searchQuery: '',
      isVisible: false,

      productId: null,
      title: null,
      price: null,
      dePrice: null,
      des: null,
    }
  },
  computed:{
    filteredProducts() {
      if (!this.searchQuery) {
        return [];
      }
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(product =>
        product.title?.toLowerCase().includes(query)
      );
    },
  },
  async created(){
    await this.loadProducts();
    this.filteredProducts = this.allProducts;
    this.updateDisplayProducts();
  },
  methods:{
    async loadProducts(){
      const fetchProducts = await new Promise((resolve) => {
        setTimeout(() => resolve(products), 2000);
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
      this.updateDisplayProducts();
    },
    updateDisplayProducts() {
      this.displayedProducts = this.showAll
        ? this.filteredProducts
        : this.filteredProducts.slice(0, 10);
    },

    handleSearch(query) {
      this.searchQuery = query;
    },
    showProductDetail(productId) {
      const selectProduct = this.products.find(product => product.id === productId);
      if(selectProduct){
        this.productId = productId;
        this.isVisible = true;
        this.title = selectProduct.title;
        this.price = selectProduct.price;
        this.dePrice = selectProduct.dePrice;
        this.des = selectProduct.des;
        this.image = selectProduct.img
      }
    },

    toggleVisible() {
      this.isVisible = !this.isVisible;
      if (!this.isVisible) {
        this.productId = null;
        this.title = null;
        this.price = null;
        this.des = null;
        this.dePrice = null;
      }
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
.profile-dropdown {
  position: relative;
  display: inline-block;
}
.profile-icon {
  width: 30px; 
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #fff; 
  border: 2px solid #28af55; 
  cursor: pointer;
  background-image: url('@/assets/image/profile-icon.png');
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;
}

.profile-icon:hover {
   transform: scale(1.1); 
}

.profile-menu {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: white;
  border: 2px solid #28af55;
  padding: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  min-width: 250px;
  /* display: none; */
  border-radius: 15px;
  font-family: "Poppins", serif;
}
.profile-menu p {
  margin: 0;
  font-weight: bold;
  color: black;
  font-size: 0.8rem;
}

.profile-menu .user-info { 
  font-weight: 600; 
  color: #292929; 
}

.profile-menu hr{
  margin: 10px 0;
  border-top: 1px solid #48b61d;
}
.profile-menu .logout-button {
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  background: rgb(124, 184, 124);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;

  font-weight:600;
  font-size: 0.9rem;
}
.profile-menu .logout-button:hover {
  background-color: #018b2f;
  transform: scale(1.05);
}
.profile-dropdown:hover .profile-menu{
  display: block;
}
</style>