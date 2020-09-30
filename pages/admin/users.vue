<template>
  <div>
    <h2 class="page-title">
      Список пользователей
    </h2>
    <el-table style="width: 100%" :data="users">
      <el-table-column label="id" prop="id" />
      <el-table-column label="Почта" prop="email" />
      <el-table-column align="right" width="250">

        <!-- <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template> -->
        <template slot-scope="{row}">
          <el-button size="mini" @click="open(row.id)">Подробнее</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    async asyncData({store}) {
      try {
        const users = await store.dispatch('users/fetch')
        console.log(users);
        return {users}
      } catch(e) {
        // commit('setError', e, {root: true});
        // throw e;
      }
    },
    methods: {
      open(id) {
        console.log('open' + id);
        this.$router.push(`/admin/user/${id}`)
      },
  },
}
</script>

<style scoped>
.page-title {
  margin-top: 0;
}
</style>