<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <img src="https://www.aufscheinen.com/404.gif" alt="404-img" width="500px">
    <NuxtLink to="/" class="back-link">
      Вернуться на главную
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    layout: 'empty',
    props: {
      error: {
        default: null
      }
    },
    data() {
      return {
        pageNotFound: '404 Страница не найдена',
      }
    },
    head() {
      const title = this.error.statusCode === 404 || this.pageNotFound
      return {
        title
      }
    }
  }

</script>

<style scoped>
  h1 {
    font-size: 20px;
  }

  .error-container {
    padding: 20px 40px;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .back-link {
    color: #409EFF;
    text-decoration: none;
  }

</style>
