<template>
 <div class="uk-container uk-margin-medium">
  <section class="update-form">
 <h1 class="uk-heading-bullet">Edit Post</h1>
  <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
</section>
 </div>

</template>
<script>
export default {
  layout: "admin",
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
