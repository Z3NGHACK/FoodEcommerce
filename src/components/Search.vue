<template>
    <div class="search">
      <a class="cont">
        <i class="ri-search-2-line"></i>
        <input
          type="text"
          class="text"
          placeholder="Discover your preferred goods"
          v-model="searchTerm"
          @input="updateSearch"
        />
      </a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: "",
      };
    },
    methods: {
      updateSearch() {
        this.$emit("input", this.searchTerm); // Emit the search term to the parent
      },
    },
  };
  </script>
  
  <style scoped>
  .cont{
    width: 400px;
  }
  .cont .text{
    width: 250px;
    text-align: start;
    border:none;
    border-bottom: 1px solid #fff;
  }
  .search {
    margin-bottom: 20px;
  }
  .text {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
  </style>
  