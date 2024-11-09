<template>
    <h1>Our Proucts</h1>
    <h3>{{ title }}</h3>
    <img :src="img" alt="#">
    <span>{{ price }} / ${{ priceint }}</span>
    <p>{{ des }}</p>
    <button :id="button.id">{{ button.label || 'Add to Cart'}}</button>

    
    <div class="explore">
      <span>
        Explore all Products
        <i class="ri-arrow-right-line"></i>
      </span>
    </div>
</template>
<script>
    export default{
        props:{
            title: String,
            img: String,
            price: String,
            priceint: Number,
            des: String,
            button:{
                type: Object,
                default:()=>({
                    id: 'button',
                    class:'Add-to-Cart',
                    label: 'Add to Cart'
                })
            }

        }
    }
</script>