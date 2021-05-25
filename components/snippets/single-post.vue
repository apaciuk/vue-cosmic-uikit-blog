<template>
<div>
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
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
      loadedPost: {
      id: "1", 
      title: "A First Post (ID: " + context.route.params.id + "}", 
      previewText: "Lorem Ipsum Lorem Ipsum",
      author: "Paul Anthony McGowan",
      updatedDate: new Date(),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quae, eos optio ut dicta nemo dolore dolor labore numquam sit beatae rerum corporis",
      thumbnail: "https://picsum.photos/500/320" 
      }
      });
    }, 1000);
  }
};
</script>