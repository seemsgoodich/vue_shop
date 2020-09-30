<template>
    <div class="item">
        <div class="item__img">
            <img class="img" :src="`/api/items/${item.id}/icon`" alt="item-img">
        </div>
        <div class="item__desc-container">
            <nuxt-link to="/" class="back-link">
                <i class="el-icon-back"></i>
                Вернуться в каталог
            </nuxt-link>
            <div class="item__type">Стикер</div>
            <div class="item__name">{{item.name}}</div>
            <div class="item__price">{{item.price}}₽</div>
            <div class="item__quantity">Количество:{{item.quantity}}</div>
            <div class="item__desc">
                {{item.description}}
            </div>
            <el-button 
                class="item__to-cart"
                icon="el-icon-shopping-cart-1"
            >
                Добавить в корзину
            </el-button>
            <el-button 
                class="item__to-cart"
                icon="el-icon-star-off"
                @click="addItem(item)"
            >
                Добавить в избранное
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    validate({params}) {
        return !!params.id
    },
    async asyncData({store, params}) {
        const data = await store.dispatch('items/fetchId', params.id)
        const theresponsecode = data.data.theresponsecode;
        const item = data.data.item;
        console.log(item);
        return {item}
    },
    methods: {
        addItem(item) {
            this.$store.dispatch('favs/addItem', item)
        }
    }
}
</script>

<style scoped>
    .item {
        margin-left: 350px;
        margin-top: 60px;
        margin-bottom: 60px;
        display: flex;
    }

    .item__desc-container {
        margin-left: 50px;
    }

    .item__type {
        font-size: 18px;
        color: #909399;
        margin-bottom: 5px;
    }

    .item__name {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .item__price {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .img {
        border-radius: 10%;
    }

    .item__desc {
        margin-bottom: 20px;
        max-width: 550px;
        font-size: 14px;
        color: #303133;
        line-height: 24px;
    }

    .item__to-cart {
        padding: 15px;
        background-color: #409EFF;
        color: white;
        border: none;
        border-radius: 5%;
        cursor: pointer;
        font-size: 18px;
    }

    .back-link {
        text-decoration: none;
        font-size: 16px;
        color: #303133;
        display: inline-block;
        margin-bottom: 20px;
    }

</style>