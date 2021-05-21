<template>
  <div>
  <section class="intro">
    <h1>Get the Latest Tech News</h1>
  </section>
  <section>
  <div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <PostPreview />
   <PostPreview />
    <PostPreview />

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


