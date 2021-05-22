<template>
 <div class="uk-container uk-margin-medium">
<section class="new-posts">

<h1 class="uk-heading-bullet">New Posts</h1>
<form>
    <fieldset class="uk-fieldset">
       <legend class="uk-legend">Start A New Post</legend>
       <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
         <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>

      

    </fieldset>
</form>

</section>
 </div>

</template>

<script>
import AppControlInput from '~/components/AppControlInput.vue'


export default {
  components: { AppControlInput },
 
}
</script>