<template>
 <div class="uk-container uk-margin-medium">
 <section class="post">
      <h1 class="uk-heading-bullet">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:support@xhostcom.com">support@xhostcom.com</a>.</p>
    </section>
 </div>
</template>
<script>
export default {
  asyncData(context) {
     return axios.get("https://nuxtblog-4e44e-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
      context.params.postId + ".json" )
      .then(res => {
        return {
          loadedPosts: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  }
}
</script>




<style scoped>

@media (min-width: 768px) {
 
}


</style>

