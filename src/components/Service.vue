<template>
  <div class="delivery">
    <img :src="img" alt="Service Image" />
    <div class="cont">
      <h4>{{ title }}</h4>
      <p>{{ des }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: 
    {
      type: String,
      Required: true
    },
    title: String,
    des: String,
  },
};
</script>


<style scoped>

  .delivery{
    display: flex;
    border: #47B749 1px solid;
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    color: #47B749;
    gap: 20px;
    box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
    transition: 0.2s ease;
    cursor: pointer;

  }
  .delivery:hover{
    background-color: #47B749;
    color: #fff;
  }
  .delivery .cont{
    display: flex;
    flex-direction: column;
  }
  img{
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 10px;
  }
</style>