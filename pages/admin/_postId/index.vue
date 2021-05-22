<template>
 <div class="uk-container uk-margin-medium">
  <section class="update-form">
 <h1 class="uk-heading-bullet">Update Post</h1>
  <AdminPostForm2 :post="loadedPost" />
</section>
 </div>

</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Paul Anthony McGowan',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://picsum.photos/500/320'
      }
    }
  }
}
</script>
}