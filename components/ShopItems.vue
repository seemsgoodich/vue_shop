<template>
    <div class="shop-container">
        <h2 class="shop-title">Каталог товаров</h2>
        <div class="items-container">
            <template
                v-if="items.length"
            >
                <ShopItem
                    v-for="item in items"
                    :key="item.id"
                    :item="item"
                />
            </template>
            <h2 v-else>Товаров по вашему запросу не было найдено</h2>
        </div>
    </div>
</template>

<script>
import ShopItem from '@/components/ShopItem'
export default {
    components: {
        ShopItem,
    },
    props: ['items'],
}
</script>

<style scoped>
    .shop-title {
        margin-top: 0;
        margin-left: 30px;
    }

    .items-container {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-left: 20px;
        margin-bottom: 70px;
    }
</style>