<template>
    <div>
        <h2 class="page-title">
            Пользователь # {{$route.params.id}}
        </h2>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item to="/admin/users">Список пользователей</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.params.id}}</el-breadcrumb-item>
        </el-breadcrumb>

        <h3>id: {{user.id}}</h3>
        <h3>Почта: {{user.email}}</h3>
        <h3>Админ: {{user.admin}}</h3>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    validate({params}) {
        return !!params.id
    },
    async asyncData({store, params}) {
        const data = await store.dispatch('users/fetchId', params.id)
        const theresponsecode = data.data.theresponsecode;
        const user = data.data.user;
        console.log(user);
        return {user}
    }
}
</script>

<style scoped>
    .page-title {
        margin-top: 0;
    }

    .el-breadcrumb {
        margin-bottom: 20px;
    }
</style>