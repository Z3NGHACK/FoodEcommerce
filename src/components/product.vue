<template>
    <div class="prod">
        <h3>{{ title }}</h3>
        <img :src="img" alt="#">
        <span>{{ price }} / ${{ priceint }}</span>
        <p>{{ des }}</p>
        <button :id="button.id">{{ button.label || 'Add to Cart'}}</button>
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
                required: true, 
                default:()=>({
                    id: 'button',
                    class:'Add-to-Cart',
                    label: 'Add to Cart'
                })
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
</style>