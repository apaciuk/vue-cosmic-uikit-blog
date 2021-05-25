<template>
  <section>
  <div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <PostPreview
  v-for="post in posts"
  :key="post.id"
  :id="post.id"
  :is-admin="isAdmin"
  :thumbnail="post.thumbnail" 
  :title="post.title"
  :previewText="post.previewText"/>
</div>
</section>   
</template>
<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
  },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>