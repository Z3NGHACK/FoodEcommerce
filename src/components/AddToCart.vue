<template>
    <div class="img">
        <img src="@/assets/image/apple.jpg" alt="#">
    </div>
    <div class="deli">
        <i class="ri-truck-line"></i>
        <h3>Free delivery</h3>
    </div>
    <div class="content">
        <h3>Apple</h3>
        <span>Experience the crisp and refreshing taste of fresh red apples. Grown organically in lush orchards, these apples are handpicked to ensure the best quality. With a perfect balance of sweetness and a hint of tartness, they are ideal for snacking, baking, or juicing.</span>
        <div class="additional">
            <h3>Additional</h3>
            <div class="check" v-for="item in items" :key="item.id">
                <div class="left">
                    <input
                        type="checkbox"
                        :value="item"
                        :checked="isSelected(item)"
                        @change="selectItem(item)"
                    />
                    <span>{{ item.name }}</span>
                </div>
                <span>1kg / {{ item.price }}$</span>
            </div>

            <div class="btn">
                <button @click="SaveItem">Save</button>
                <button @click="clearItems">Clear</button>
            </div>
        </div>
    </div>
</template>

<script>
import { CartStore } from './data/data';

export default {
    data() {
        return {
            items: [
                { name: "Banana", price: 4, id: "F001" },
                { name: "Mango", price: 2.6, id: "F002" },
                { name: "Orange", price: 3, id: "F003" },
                { name: "Grape", price: 4.1, id: "F004" },
            ],
            selectedItem: [], // To hold selected items locally
        };
    },
    methods: {
        // Handle selection and deselection of items
        selectItem(item) {
            const index = this.selectedItem.findIndex(i => i.id === item.id);
            if (index === -1) {
                // Add item if not selected
                this.selectedItem.push(item);
                CartStore.addToCart(item); // Add to CartStore
            } else {
                // Remove item if already selected
                this.selectedItem.splice(index, 1);
                CartStore.removeFromCart(item.id); // Remove from CartStore
            }
            console.log("Selected items: ", this.selectedItem);
        },
        isSelected(item) {
            return this.selectedItem.some(i => i.id === item.id);
        },
        SaveItem() {
            console.log("All selected items:", this.selectedItem);
            this.selectedItem = []; 
        },
        clearItems() {
            this.selectedItem = []; 
            CartStore.clearCart(); 
        },
    },
};
</script>


<style scoped>
    img{
        width: 100%;
        margin-bottom: -8px;
        height: 250px;
    }
    .deli{
        background-color: #47B749;
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 10px;
        padding-right: 15px ;
        color: #fff;
        font-size: 0.8rem;
    }
    .deli i{
        font-size: 1.2rem;
    }
    .content{
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .content h3{
        font-weight: 700;
        margin-bottom: 5px;
    }
    .content span{
        text-align: start;
        font-size: 0.8rem;
    }
    .content .additional{
        border: #b8b8b8 1px solid;
        margin: 10px 0;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .content .additional .check{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .content .additional .check .left{
        display: flex;
        width: 90%;
        gap: 10px;
    }
    .content .additional .check .left input:checked{
        background-color: red;
        color: #fff;
    }
    .content .additional .btn{
        width: 100%;
        display: flex;
        justify-content: end;
    }
    .content .additional button{
        display: flex;
        background-color: #47B749;
        border: #47B749 1px solid;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
    }
</style>