<template>
    <div class="prod">
        <h3>{{ title }}</h3>
        <img :src="img" alt="#" />
        <span>${{ price }}/ <span class="gram">{{ amount }}</span></span>
        <p class="descript">{{ des }}</p>
        <button @click="showProductDetails">View Detail</button>
    </div>

    <div v-if="isVisible" class="popup-overlay" @click="toggleVisibleAddToCart">
        <div class="popup-content" @click.stop>
            <ProductDetail 
                :productId="productDetails.productId"
                :title="productDetails.title"
                :price="productDetails.price"
                :des="productDetails.des"
                :image="productDetails.img"
                :amount="productDetails.amount"
        	    :dePrice="productDetails.dePrice"
            />
            <button class="close-btn" @click="toggleVisibleAddToCart">
                <i class="ri-arrow-left-line"></i>
            </button>
        </div>
    </div>
</template>

<script>
import ProductDetail from './ProductDetail.vue';

export default {
    components: {
        ProductDetail,
    },
    props: {
        productId: String,
        title: String,
        img: String,
        price: String,
        dePrice: Number,
        priceint: Number,
        des: String,
        amount: String
    },
    data() {
        return {
            isVisible: false,
            productDetails: {},
        };
    },
    methods: {
        toggleVisibleAddToCart() {
            this.isVisible = !this.isVisible;
            if (this.isVisible) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        showProductDetails() {
            this.productDetails = {
                title: this.title,
                price: this.price,
                des: this.des,
                img: this.img,
                productId: this.productId,
                amount: this.amount,
                dePrice: this.dePrice
            };

            this.toggleVisibleAddToCart();
        },
    },
};
</script>

<style scoped>
    .prod{
        display: flex;
        flex-direction: column;
        text-align: center;
        border: #47B749 1px solid;
        width: 200px;
        height: 300px;
        padding: 20px;
        border-radius: 10px;
        align-items: center;
        color: #000000;
        gap: 10px;
        margin-bottom: 30px;
        box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
        transition: 0.2s ease;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }
    span{
        font-weight: 600;
    }
    button{
        color:#47B749;
        background-color: #fff;
        border-radius: 50px;
        border: #47B749 1px solid;
        padding: 10px 20px;
        cursor: pointer;
        box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
    }
    button:hover{
        background: #47B749;
        border: #47B749 1px solid;
        color: #fff;
    }
    .descript{
        width:170px;
        overflow: hidden;
        height: 60px;
    }
    .gram{
        font-weight: 400;
        color: rgb(78, 78, 78) ;
    }

    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        backdrop-filter: blur(8px); /* Blur effect */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .popup-content {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        width: 100%;
        max-width: 800px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        display: flex;
    }
    .close-btn {
        background: #fff;
        color: #000;
        border: #fff 1px solid;
        border-radius: 100%;
        padding: 5px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        left: 10px;
        transition: 0.2s ease;
    }
    .close-btn:hover{
        background-color: #47B749;
        color: #fff;
        border: #47B749 1px solid;
    }
</style>