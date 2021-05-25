<template>
 <div class="uk-container uk-margin-medium">
  <section class="auth">
  <h1 class="uk-heading-bullet">Login or Signup</h1>
   <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password" v-model="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
 </form>
</section>
 </div>

</template>

<script>
export default {
  layout: 'admin',
  name: 'AdminAuthPage',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
     this.$store.dispatch('authenticateUser', {
       isLogin: this.isLogin,
       email: this.email,
       password: this.password
     })
     .then(() => {
       this.$router.push('/admin');
     })
    }
  }
}
</script>



<style scoped>

</style>