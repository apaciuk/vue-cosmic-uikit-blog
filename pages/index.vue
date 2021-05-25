<template>
  <div>
  <section class="intro">
  <h1>Get the Latest Tech News</h1>
  </section>
 <PostList :posts="loadedPosts" />
  </div>
</template>
 <script>
 export default {
computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      } 
   },  
 }
 </script>

<style scoped>
.intro {

  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.6rem;
  text-transform:uppercase;
  color: rgb(223, 233, 225);
  background-color: #e3073c;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(51, 48, 48, 0.7);
  box-sizing: border-box;
  border: 1px solid rgba(51, 48, 48, 0.7);
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 1.8rem;
  }
}

</style>


