<template>
    <div>
        <h2 class="page-title">Личный кабинет</h2>
        Почта этого пользователя: {{user.email}}
    </div>
</template>

<script>
export default {
    layout: 'profile',
    middleware: ['user-auth'],
    async asyncData({store}) {
      try {
        const user = await store.dispatch('users/fetchSelf')
        console.log(user);
        return {user}
      } catch(e) {
        // commit('setError', e, {root: true});
        // throw e;
      }
    },
}
</script>

<style scoped>
  .page-title {
    margin-top: 0;
  }
</style>