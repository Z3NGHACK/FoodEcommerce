<template>
    <div class="container">
        <div class="top_cont">
            <div class="img">
                <img :src="image" alt="#">
            </div>
            <div class="detail_sect">
                <div class="status">
                    <div class="active_stock">
                        <button>In Stock</button>
                    </div>
                    <!-- <div class="inactive_stock">
                        <button>Out of Stock</button>
                    </div> -->
                </div>

                <h2>{{ title }} {{ productId }}</h2>
                <div class="price">
                    <h3 class="p">
                        {{ price }}
                    </h3>
                    <span>{{ dePrice }}</span>
                </div>

                <div class="about">
                    <span>
                        {{ des }}
                    </span>
                </div>

                <div class="AddToCart">
                    <div class="input_quan">
                        <input type="number" v-model="quantity" placeholder="1">
                    </div>
                    <div class="addCartBtn" @click="addCart">
                        <i class="ri-shopping-cart-2-line"></i>
                        <span>Add to Cart</span>
                    </div>
                    <!-- <div class="addCartBtn" @click="clear">
                        <i class="ri-shopping-cart-2-line"></i>
                        <span>Clear</span>
                    </div> -->
                </div>
            </div>
        </div>

        <div class="bot_cont">
            <div class="left_btn">
                <i class="ri-arrow-left-line"></i>
            </div>
            <div class="productImg">
                <img :src="image" alt="#">
            </div>
            <div class="productImg">
                <img :src="image" alt="#">
            </div>
            <div class="productImg">
                <img :src="image" alt="#">
            </div>
            <div class="right_btn">
                <i class="ri-arrow-right-line"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        price: Number,
        dePrice: Number,
        image: String,
        title: String,
        des: String,
        productId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            title: this.title,
            price: this.price,
            des: this.des,
            productId: this.productId,
            image: this.image
        };
    },
    methods: {
        addCart() {
            const product ={
                title: this.title,
                price: this.price,
                productId: this.productId,
                image: this.image
            };
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(cart);
        },
        clear(){
            localStorage.clear();
        },
        mounted() { 
        console.log("Product ID:", this.productId); 
}
    },
};
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 1000px;
        height: auto;
        background-color: rgb(255, 255, 255);
        padding: 10px;
    }
    .top_cont{
        display: flex;
    }
    .top_cont .img{
        width: 50%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    .top_cont .img img{
        width: 80%;
        height: auto;
    }
    .detail_sect{
        display: flex;
        flex-direction: column;
        padding:0 20px;
        align-items: start;
        width: 50%;
        margin: 0;
        gap: 2px;
    }
    .detail_sect .status{
        display: flex;
        
        margin: 0;
    }
    .detail_sect .active_stock button{
        background-color: #DEF9EC;
        border: none;
        border-radius: 5px;
        color: #3BB77E;
        padding: 7px;
        font-size: 0.5rem;
    }
    .detail_sect .inactive_stock button{
        background-color: #ffdede;
        border: none;
        border-radius: 5px;
        color: #cc2424;
        padding: 7px;
        font-size: 0.5rem;
        text-align: start;
    }
    .detail_sect h2{
        color: #000;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 10px 0;
    }
    .detail_sect .price{
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
    }
    .detail_sect .price h3{
        color: #3BB77E;
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
    }
    .detail_sect .price span{
        margin-top: 8px;
        color: #797979;
        text-decoration: line-through;
        font-size: 1.2rem
    }
    .detail_sect .about{
        margin: 10px 0;
        display: flex;
        align-items: start;
        height: 80px;
        margin-bottom: 45px;
        text-align: start;
        font-size: 0.8rem;
    }
    .detail_sect .AddToCart{
        display: flex;
        gap: 10px;
    }
    .detail_sect .AddToCart .input_quan input{
        border: 1px solid #3BB77E;
        padding: 5px;
        width: 50px;
        color: #3BB77E;
        font-size: 1rem;
        border-radius: 3px;
    }
    .detail_sect .AddToCart .input_quan input::placeholder{    
        color: #3BB77E;
    }
    .detail_sect .AddToCart .addCartBtn{
        background-color: #3BB77E;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px 10px;
        font-size: 0.7rem;
        color: #fff;
        border-radius: 3px;
        transition: 0.2s ease;
        border: 1px solid #3BB77E;
        cursor: pointer;
    }
    .detail_sect .AddToCart .addCartBtn:hover{
        background-color: #fff;
        color: #3BB77E;
    }
    .bot_cont{
        display: flex;
        padding: 20px 0;
        align-items: center;
        gap: 10px;
    }
    .bot_cont .productImg{
        width: 70px;
        height: 70px;
        border-radius: 10px;
        border: 1px solid #3BB77E;
    }
    .bot_cont .productImg img{
        width: 100%;
        height: 100%;
        border-radius: 10px;

    }
    .bot_cont .right_btn,
    .bot_cont .left_btn{
        background-color: green;
        border-radius: 10px;
        width: 40px;
        font-size: 0.7rem;
        padding: 5px;
        color: #fff;
    }
</style>