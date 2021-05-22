<template>
 <div class="uk-container uk-margin-medium">
<section class="new-posts">

<h1 class="uk-heading-bullet">New Posts</h1>
<form @submit.prevent="onSave">
    <fieldset class="uk-fieldset">
       <legend class="uk-legend">Start A New Post</legend>
       <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
         <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
         <AppControlInput 
         control-type="textarea"
         v-model="editedPost.content">Content</AppControlInput>
         <AppButton1 type="submit">Save</AppButton1>
         <AppButton2
         type="button"
         style="margin-left: 10px"
         @click="onCancel">Cancel</AppButton2>
 </fieldset>
</form>

</section>
 </div>

</template>

<script>
export default {
data () {
  return {
       editedPost: {
       author: '',
       title: '',
       thumbnailLink: '',
       content:''

     }
  }
},
methods: {
  onSave() {
    // Save the post
  },
  onCancel() {
    // Navigate back
  }
}
}
</script>