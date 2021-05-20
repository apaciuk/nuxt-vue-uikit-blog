<template>
<div class="home-page">
  <section class="intro">
    <h1>Get the Latest Tech News</h1>
  </section>
  <section class="featured-posts">
    <nuxt-link :to="'/posts' + 1">
    <article class="post-preview">
      <div class="post-thumbnail"> </div>
      <div class="post-content">
        <h2>Post Title</h2>
        <p>Post Excerpt</p>
      </div>
    </article>
   </nuxt-link>
    <nuxt-link :to="'/posts' + 2">
    <article class="post-preview">
      <div class="post-thumbnail"> </div>
      <div class="post-content">
        <h2>Post Title</h2>
        <p>Post Excerpt</p>
      </div>
    </article>
   </nuxt-link>
  </section>


</div>
  
</template>

