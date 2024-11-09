<template>
    <h1>Feauture Items</h1>
    <img :src="img" alt="">
    <div class="infor">
        <h2>
            {{title}}
        </h2>
        <span>Rating {{rating }}</span>
        <span>Category: {{category}}</span>

        <h3>
            {{weightPrize }}
        </h3>
        <button :id="button.id">{{button.label || 'Add to Cart'}}</button>
    </div>
</template>
<script>
export default{
    props:{
        weightPrize: String,
        title: String,
        rating: Object,
        category: String,
        img: String,
        button:{
            type: Object,
            default:()=>({
                id: 'button',
                class: 'add-to-cart-button',
                label: 'Add to Cart'
            })
        }
    }
}
</script>