<template>
    <form @submit.prevent="onSave">
    <fieldset class="uk-fieldset">
       <legend class="uk-legend">Update Post</legend>
       <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
         <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
         <AppControlInput 
         control-type="textarea"
         v-model="editedPost.content">Content</AppControlInput>
          <AppControlInput 
         control-type="textarea"
         v-model="editedPost.previewText">Preview Text</AppControlInput>
         <AppButton type="submit"
         @click="onSave">Save</AppButton>
         <AppButton
         type="button"
         style="margin-left: 10px"
         @click="onCancel">Cancel</AppButton>
</fieldset>
</form>
</template>
<script>
export default {
props: {
  post: {
      type: Object,
      required: false,

  }
},
data () {
  return {
       editedPost: this.post 
       ? { ...this.post } 
       : {
       author: '',
       title: '',
       thumbnailLink: '',
       content:''

     }
  }
},
methods: {
  onSave() {
    this.$emit('submit', this.editedPost);
  },
  onCancel() {
    this.$router.push('/admin');
  }
}
}
</script>