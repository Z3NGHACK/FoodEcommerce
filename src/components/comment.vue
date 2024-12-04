<template>
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
<!-- <template>
    <div class="comment">
      <div class="comment-header">
        <img :src="user.avatar" alt="User Avatar" class="avatar">
        <h3>{{ user.name }}</h3>
      </div>
      <div class="comment-body">
        <p>{{ commentText }}</p>
      </div>
      <div class="comment-footer">
        <button @click="likeComment">Like</button>
        <button @click="replyToComment">Reply</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Comment',
    props: {
      user: {
        type: Object,
        required: true
      },
      commentText: {
        type: String,
        required: true
      }
    },
    methods: {
      likeComment() {
        // Logic to like a comment
      },
      replyToComment() {
        // Logic to reply to a comment
      }
    }
  }
  </script>
  
  <style scoped>
  .comment {
    border: 1px solid #e9ecef;
    padding: 20px;
    margin-bottom: 20px;
  }
  .comment-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .comment-body {
    margin-bottom: 10px;
  }
  .comment-footer {
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style> -->