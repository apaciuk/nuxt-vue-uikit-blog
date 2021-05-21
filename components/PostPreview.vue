<template>
    <nuxt-link class="post-preview" :to="'/posts' + id">
    <div>
  	<div class="uk-card uk-card-large uk-card-default">
							<div class="uk-card-header">
                            <h2>{{ title }}</h2>
							</div>
							<div class="uk-card-media">
								<div class="post-thumbnail" 
								:style="{backgroundImage: 'url(' + thumbnail + ')'}" >
							</div>
							</div>
							<div class="uk-card-body">
				   	<p class="uk-text-medium">{{ previewText }}</p>
	</div>
    </div>
  </div>
</nuxt-link>
</template>
<script>
export default {
name: 'PostPreview',
props: {
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  previewText: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
}
}
</script>