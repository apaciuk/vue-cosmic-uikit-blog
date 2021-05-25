<template>
 <div class="uk-container uk-margin-medium">
<section class="new-posts">

<h1 class="uk-heading-bullet">New Post</h1>
<AdminPostForm @submit="onSubmitted" />

</section>
 </div>

</template>
<script>
export default {
   layout: 'admin',
   methods: {
      onSubmitted(postData) {
        this.$store.dispatch('addPost', postData).then( () => {
           this.$router.push("/admin");
        })
      }
   }
}
</script>

