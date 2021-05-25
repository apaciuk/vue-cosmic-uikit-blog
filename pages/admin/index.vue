<template>
 <div class="uk-container uk-margin-medium">
 <section class="admin">
<h1 class="uk-heading-bullet">Admin</h1>
<AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
</section>
 <section class="admin">

 <h2 class="uk-margin-top uk-heading-divider uk-text-center">Existing Posts</h2>
 <PostList isAdmin />
</section>
 </div>
</template>
<script>


export default {
layout: 'admin'
}
</script>
