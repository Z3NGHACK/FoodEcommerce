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
                <button :id="button.id">{{button.label || 'Add to Cart'}}</button>
            </div>
        </div>
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
            required: true, 
            default:()=>({
                id: 'button',
                class: 'add-to-cart-button',
                label: 'Add to Cart'
            })
        }
    }
}
</script>
<style scoped>
    .feat{
        display: flex;
        flex-direction: column;
        text-align: center;
        border: #47B749 1px solid;
        width: 380px;
        height: 400px;
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
</style>