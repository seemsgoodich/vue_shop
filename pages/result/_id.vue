<template>
  <div>
    <div class="main">
      <h2 class="page-title" v-if="$route.params.id">Показаны товары из категории <span class="category-name">{{$route.params.id}}</span></h2>
      <h2 class="page-title" v-else>Показаны товары по запросу <span class="category-name">{{$route.query['search-query']}}</span></h2>
      <div class="main__container">
        <Categories
          :categories="categories"
        />
        <ShopItems
          :items="items"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShopItems from '@/components/ShopItems'
import Categories from '@/components/Categories'
export default {
  components: {
    ShopItems,
    Categories,
  },
  data() {
    return {
      category: null,
    }
  },
  // async beforeRouteUpdate ({store, query}, to, from, next) {
  //   const items = await store.dispatch('items/fetchByQuery', query['search-query'])
  //   return {items}
  //   console.log('я жив')

  //   next()
  // },
  async asyncData({store, params, query}) {
      try {
        if (params.id) {
          const items = await store.dispatch('items/fetchByCategory', params.id)
          const categories = await store.dispatch('categories/fetch')
          return {items, categories}
        }
        else {
          const items = await store.dispatch('items/fetchByQuery', query['search-query'])
          const categories = await store.dispatch('categories/fetch')
          return {items, categories}
        }
        
      } catch(e) {
        console.error(e)
        throw e
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

  .page-title {
      margin-left: 20px;
  }

  .category-name {
    color: black;
  }
</style>