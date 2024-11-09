<template> 
    <div class="delivery">
      <img :src="img" alt="#">
      <h4>
        {{title}}
      </h4>
      <p>{{des}}</p>
    </div>
</template>
<script>
export default{
    props:{
        img: String,
        title: String,
        des: String
    }
}
</script>