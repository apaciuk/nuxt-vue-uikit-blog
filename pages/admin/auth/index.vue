<template>
 <div class="uk-container uk-margin-medium">
  <section class="auth">
  <h1 class="uk-heading-bullet">Login or Signup</h1>
   <form>
        <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
        <AppButton1 type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton1>
        <AppButton3
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton3>
 </form>
</section>
 </div>

</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true
    }
  }
}
</script>