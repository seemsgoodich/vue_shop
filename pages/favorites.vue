<template>
    <div class="favs-container">
        <Categories :categories="categories"/>
        <div class="favs-content">
            <h2 class="favs-title">Избранное</h2>
            <div class="check-login" v-if="isEmpty()">
                <p>
                    Вы не добавили сюда никаких товаров 
                    <nuxt-link
                        to="/"
                        class="back-link"
                    >
                        Вернуться на главную
                    </nuxt-link>
                </p>
                <p>
                    Или может быть...
                    <nuxt-link
                        to="/signin?message=login"
                        class="back-link"
                    >
                        Авторизоваться?
                    </nuxt-link>
                </p>
            </div>
            <div v-else>
                <el-table
                    :data="items"
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="Название"
                        width="180"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="Цена"
                        width="180"
                    >
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import Categories from '@/components/Categories'
export default {
    components: {
        Categories,
    },
    data() {
        items: null
    },
    beforeMount() {
        this.items = this.$store.getters['favs/allItems']
    },
    async asyncData({store}) {
        const categories = await store.dispatch('categories/fetch')
        console.log(categories);
        return {categories}
    },
    methods: {
        isEmpty() {
            const check = this.$store.getters['favs/isEmpty']
            return check
        },
    }
}
</script>

<style scoped>
    .favs-container {
        display: flex;
        margin-top: 40px;
        margin-bottom: 40px;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .favs-content {
        margin-left: 90px;
    }

    .back-link {
        color: #1D8CE0;
    }
</style>