<template>
  <section>
  <div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <PostPreview
  id="1"
  :is-admin="isAdmin"
  thumbnail="https://picsum.photos/500/320?random=1" 
  title="First post"
  previewText="This is my first post"/>
  <PostPreview
  id="2"
  :is-admin="isAdmin" 
  thumbnail="https://picsum.photos/500/320?random=2" 
  title="Second Post"
  previewText="This is my second post"/>
  <PostPreview
  id="3"
  :is-admin="isAdmin"
  thumbnail="https://picsum.photos/500/320?random=3" 
  title="Third post"
  previewText="This is my third post"/>
</div>
</section>   
</template>

<script>
export default {
  name: "PostList",
  props: {
    isAdmin: {
      type: Boolean,
      required: false
    }
  }

}
</script>