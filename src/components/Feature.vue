<template>
    <div class="feat">
        <img :src="img" alt="#">
        <div class="infor">
            <div class="art">
                <h3>
                    {{title}}
                </h3>
                <span>Rating {{rating }}</span>
                <span>Category: {{category}}</span>

                <span class="price">
                    {{weightPrize }}
                </span>
            </div>
            <div class="btn">
                <button :id="button.id" @click="toggleVisibleAddToCart">{{ button.label || 'Add to Cart'}}</button>
            </div>
        </div>
    </div>
    <div v-if="isVisible" class="popup-overlay" @click="toggleVisibleAddToCart">
        <div class="popup-content" @click.stop>
            <AddToCart />
            <button class="close-btn" @click="toggleVisibleAddToCart"><i class="ri-arrow-left-line"></i></button>
        </div>
    </div>
    
</template>
<script>
import AddToCart from './AddToCart.vue';
export default {
    components:{
        AddToCart,
    },
    props:{
        weightPrize: String,
        title: String,
        rating: Object,
        category: String,
        img: String,
        button:{
            type: Object,
            required: true, 
            default:()=>({
                id: 'button',
                class: 'add-to-cart-button',
                label: 'Add to Cart'
            })
        }
    },
    data(){
            return{
                isVisible: false
            }
        },
    methods: {
        toggleVisibleAddToCart() {
            this.isVisible = !this.isVisible;
            if(this.isVisible){
                document.body.style.overflow = 'hidden';
            }else{
                document.body.style.overflow = 'auto';
            }
        },
        display(){
            console.log("show");
        }   
    },
}
</script>
<style scoped>
    .feat{
        display: flex;
        flex-direction: column;
        text-align: center;
        border: #47B749 1px solid;
        width: 360px;
        height: 390px;
        padding: 20px;
        border-radius: 10px;
        align-items: center;
        color: #000000;
        gap: 20px;
        box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
        transition: 0.2s ease;
    }
    .infor{
        display: flex;
        width: 100%;
    }
    img{
        width: 100%;
        height: 180px;
        background-color: red;
        border-radius: 10px;
    }
    h3{
        color: #47B749;
    }
    .price{
        font-weight: 600;
        font-size: 1.2rem;
        margin: 20px 0  0 0;
    }
    .art{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        margin-top: 20px;
    }
    .btn{
        width: 100%;
        display: flex;
        align-items: end;
        justify-content: end;
    }
    button{
        background: #fff;
        border: #a1d8a2 1px solid;
        border-radius: 10px;
        padding: 10px;
        height: 40px;
        color: #47B749;
        transition: 0.2s ease;
        cursor: pointer;
    }
    button:hover{
        background: #47B749;
        border: #fff 1px solid;
        color: #fff;
    }
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Dimmed background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Ensure it appears above other elements */
    }

    /* Styles for the popup content */
    .popup-content {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        max-width: 500px;
        width: 100%;
        text-align: center;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    /* Close button styles */
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