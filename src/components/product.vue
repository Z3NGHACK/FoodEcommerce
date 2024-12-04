<template>
    <div class="prod">
        <h3>{{ title }}</h3>
        <img :src="img" alt="#">
        <span>{{ price }} / ${{ priceint }}</span>
        <p>{{ des }}</p>
        <button :id="button.id" @click="toggleVisibleAddToCart">{{ button.label || 'Add to Cart'}}</button>
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

    export default{
        components:{
            AddToCart,
        },
        props:{
            title: String,
            img: String,
            price: String,
            priceint: Number,
            des: String,
            button:{
                type: Object,
                required: true, 
                default:()=>({
                    id: 'button',
                    class:'Add-to-Cart',
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
            }    
        },
    }
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
        width: 100%;
        height: 150px;
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