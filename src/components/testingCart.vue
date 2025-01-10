<template>
    <div>
      <p>Displaying details for product</p>
      <p>ID: {{ productId }}</p>
      <p>Title: {{ title }}</p>
      <p>Price: {{ price }}</p>

    </div>
  </template>
  
  <script>
export default {
  props: {
    productId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

  
