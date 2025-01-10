<template>
    <div class="customer-reviews">
      <h1>Customer Reviews</h1>
  
      <!-- Summary Section -->
      <div class="summary">
        <div class="summary-item total-reviews">
          <h2>Total Reviews</h2>
          <p>{{ totalReviews }} <span class="growth">{{ growth }}% <i class="fas fa-arrow-up"></i></span></p>
          <p>Growth in reviews this year</p>
        </div>
  
        <div class="summary-item average-rating">
          <h2>Average Rating</h2>
          <p>
            {{ averageRating }} <span class="stars">{{ renderStars(averageRating) }}</span>
          </p>
          <p>Average rating this year</p>
        </div>
  
        <div class="summary-item rating-distribution">
          <h2>Rating Distribution</h2>
          <ul>
            <li v-for="(count, rating) in ratingDistribution" :key="rating">
              <span class="stars">{{ renderStars(rating) }}</span> {{ count }}
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Featured Review Section -->
      <div class="review">
        <img src="@/assets/image/image.jpg" class="reviewer-image" />
        <div class="review-details">
          <h3>{{ reviewerName }}</h3>
          <p>Total Spend: ${{ totalSpend }}</p>
          <p>Total Reviews: {{ totalReviewsByReviewer }}</p>
          <p class="stars">{{ renderStars(reviewerRating) }}</p>
          <p>{{ reviewDate }}</p>
          <p class="review-comment">{{ reviewComment }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalReviews: '10.0K',
        growth: 21,
        averageRating: 4.0,
        ratingDistribution: {
          5: '3.5k',
          4: '3.5k',
          3: '1.5k',
          2: '1k',
          1: '500'
        },
        reviewerImage: "@/assets/image/image.jpg",
        reviewerName: 'Dara',
        totalSpend: 200,
        totalReviewsByReviewer: 10,
        reviewerRating: 4,
        reviewDate: '11-11-2025',
        reviewComment:
          'Product Fruits offers a very wide range of functions compared to other providers and at a fair price for start-ups. While Pendo and co. are unaffordable.'
      };
    },
    methods: {
      renderStars(rating) {
        return Array.from({ length: 5 }, (_, i) => (i < rating ? '★' : '☆')).join('');
      }
    }
  };
  </script>
<style scoped>
.customer-reviews {
  font-family: Arial, sans-serif;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #222;
}

.summary {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.summary-item {
  flex: 1;
  min-width: 220px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: #2b2b2b;
}

.summary-item h2 {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
}

.growth {
  color: #28a745;
  font-weight: bold;
}

.stars {
  color: #ffbf00;
  font-size: 1.2em;
}

.rating-distribution ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rating-distribution li {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 0.9em;
  color: #444;
}

.review {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: #333;
}

.reviewer-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e0e0e0;
}

.review-details {
  flex: 1;
}

.review-details h3 {
  font-size: 1.1em;
  margin: 0 0 10px;
  color: #2c2c2c;
}

.review-details p {
  margin: 5px 0;
  color: #4d4d4d;
  font-size: 0.95em;
}

.review-comment {
  margin-top: 10px;
  font-style: italic;
  color: #3b3b3b;
}
</style>