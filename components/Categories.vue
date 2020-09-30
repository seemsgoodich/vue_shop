<template>
    <div class="category-container">
        <h2 class="category-title">Категории</h2>
        <div class="category-item"
            v-for="category in categories"
            :key="category.id"
            @click="$router.push(`/result/${category.id}`)"
        >
            <img class="category-img" width="32" height="32" :src="`https://me.gwm.dev/api/categories/${category.id}/icon`" alt="icon">
            <h3 class="category-title">{{category.name}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array
        }
    },
}
</script>

<style scoped>
    .category-container {
        min-width: 180px;
        padding-right: 40px;
        margin-bottom: 40px;
    }

    .category-item {
        margin-bottom: 3px;
        margin-top: 3px;
        color: #1F2D3D;
        display: flex;
        align-items: center;
        text-decoration: underline;
        cursor: pointer;
    }

    .category-title {
        font-size: 18px;
        font-weight: 400;
    }

    .category-img {
        margin-right: 10px;
        border-radius: 25%;
    }
</style>