<template>
  <div>
  <section class="intro">
    <h1>Get the Latest Tech News</h1>
  </section>
  <section>
  <div class="uk-child-width-expand@s uk-text-center" uk-grid>
    <nuxt-link class="post-preview" :to="'/posts' + 1">
    <div>
  	<div class="uk-card uk-card-large uk-card-default">
							<div class="uk-card-header">
                <h2>Awesome Title</h2>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img data-src="https://picsum.photos/400/470/?random=3" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif">
								
								</div>
							</div>
							<div class="uk-card-body">
				   	<p class="uk-text-small uk-text-muted">Post Excerpt Duis aute irure dolor in reprehenderit in voluptate velit</p>
				</div>
		</div>
  </div>
</nuxt-link>
        <nuxt-link class="post-preview" :to="'/posts' + 1">
    <div>
  	<div class="uk-card uk-card-large uk-card-default">
							<div class="uk-card-header">
                <h2>Awesome Title</h2>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img data-src="https://picsum.photos/400/470/?random=2" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif">
								
								</div>
							</div>
							<div class="uk-card-body">
				   	<p class="uk-text-small uk-text-muted">Post Excerpt Duis aute irure dolor in reprehenderit in voluptate velit</p>
				</div>
		</div>
  </div>
</nuxt-link>
        <nuxt-link class="post-preview" :to="'/posts' + 1">
    <div>
  	<div class="uk-card uk-card-large uk-card-default">
							<div class="uk-card-header">
                <h2>Awesome Title</h2>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img data-src="https://picsum.photos/400/470/?random=5" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif">
								
								</div>
							</div>
							<div class="uk-card-body">
				   	<p class="uk-text-small uk-text-muted">Post Excerpt Duis aute irure dolor in reprehenderit in voluptate velit</p>
				</div>
		</div>
  </div>
</nuxt-link>
</div>
</section>
  </div>


	<!-- card -->
				
  
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

</style>


