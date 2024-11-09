<template>
    <h1>
        Our Honorable Customer Speak 
    </h1>
    <p>
        We have been serving our customer from a long time
    </p>
    <div class="comments">
        <div>
            <h3>
                {{ title }}
            </h3>
            <p>
                {{ des }}
            </p>
        </div>
        <div class="triangle"></div>
        <div class="profile">
            <img :src="img" alt="#">
            <h3>{{ name }}</h3>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        title: String,
        des: String,
        img: String,
        name: String
    }
}
</script>