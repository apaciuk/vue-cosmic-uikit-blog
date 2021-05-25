<template>
 <nuxt-link class="post-preview" :to="postLink">
 <div class="uk-card uk-card-large uk-card-default">
							<div class="uk-card-header">
              <h2>{{ title }}</h2>
							</div>
							 <div class="uk-card-media-top">
               <img 
							 :data-src="thumbnail" alt="" uk-img>
               </div>
						   <div class="uk-card-body">
				      <p class="uk-text-medium">{{ previewText }}</p>
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
  isAdmin: {
      type: Boolean,
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
},
computed: {
  postLink() {
    return this.isAdmin  ? '/admin/' + this.id : '/posts/' + this.id
  }
}
}
</script>