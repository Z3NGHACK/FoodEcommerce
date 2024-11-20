<template>
    <div class="top_item">
      <h3>
        {{title}}
      </h3>
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
<style scoped>
  .top_item{
    display: flex;
    flex-direction: column;
    text-align: center;
    border: #47B749 1px solid;
    width: 220px;
    height: 350px;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    color: #000000;
    gap: 20px;
    box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
    transition: 0.2s ease;
    cursor: pointer;
  }
  .top_item:hover{
    background-color: #47B749;
    color: #fff;
  }
  .top_item:hover h3{
    color: #fff;
  }
  h3{
    color: #47B749;
    font-family: Pacifico;
  }
  img{
    width: 100%;
    height: 150px;
    background-color: red;
    border-radius: 10px;
  }
  p{
    height: 150px;
  }
</style>
