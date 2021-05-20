<template>
<div class="home-page">
  <section class="intro">
    <h1>Get the Latest Tech News</h1>
  </section>
  <section class="featured-posts">
    <nuxt-link class="post-preview" :to="'/posts' + 1">
    <article >
      <div class="post-thumbnail"> 
        <img src="https://picsum.photos/400/300" alt="">
      </div>
      <div class="post-content">
        <h2>Post Title</h2>
        <p>Post Excerpt</p>
      </div>
    </article>
   </nuxt-link>
    <nuxt-link class="post-preview" :to="'/posts' + 2">
    <article>
      <div class="post-thumbnail"> 
      <img src="https://picsum.photos/400/300" alt="">
      </div>
      <div class="post-content">
        <h2>Post Title</h2>
        <p>Post Excerpt</p>
      </div>
    </article>
   </nuxt-link>
  </section>


</div>
  
</template>
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
  font-size: 1.5rem;
  color: snow;
  background-color: rgb(41, 37, 37);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>


