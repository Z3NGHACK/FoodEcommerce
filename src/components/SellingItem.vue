<template>
  <h1>Top Selling items</h1>
    <div class="top_item">
      <h2>
        {{title}}
      </h2>
      <p>
        {{des}}
      </p>
      <img alt="#" srcs="img">
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
