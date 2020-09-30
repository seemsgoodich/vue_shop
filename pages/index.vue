<template>
  <div>
    <div class="main">
      <Slider/>
      <div class="main__container">
        <Categories 
          :categories="categories"
        />
        <ShopItems
          v-bind:items="items"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import Categories from '@/components/Categories'
import ShopItems from '@/components/ShopItems'
export default {
  components: {
    Slider,
    Categories,
    ShopItems,
  },
  data() {
    return {
      category: null
    }
  },
  async asyncData({store}) {
      try {
          const categories = await store.dispatch('categories/fetch')
          const items = await store.dispatch('items/fetch')

          return {items, categories}
      } catch(e) {
        console.error(e)
        throw e
      }
  },
  mounted() {
    const {message} = this.$route.query

    switch(message) {
      case 'signupCompleted':
        this.$message.success('Вы успешно зарегестрировались')
        break;
      case 'successful':
        this.$message.success('Вы успешно авторизовались')
        break;
      case 'logged':
        this.$message.warning('Вы уже авторизированы')
        break;
    }
  },
}
</script>

<style scoped>
  .main__container {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>