<template>
  <div>
    <h2 class="page-title">
      Список категорий
    </h2>
    <el-table style="width: 100%" :data="categories">
      <el-table-column label="Название" prop="name" />
      <el-table-column align="right">
        <!-- <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template> -->
        <template slot-scope="{row}">
          <el-button size="mini" @click="open(row.id)">Редактировать</el-button>
          <el-button size="mini" type="danger" @click="remove(row.id)">Удалить</el-button>
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
        const categories = await store.dispatch('categories/fetch')
        return {categories}
      } catch(e) {
        // commit('setError', e, {root: true});
        // throw e;
      }
    },
    methods: {
      open(id) {
        console.log('open' + id);
        this.$router.push(`/admin/category/${id}`)
      },
      async remove(id) {
        try {
            console.log('remove ' + id);

            await this.$confirm('Удалить категорию?', 'Внимание!', {
            confirmButtonText: 'Да',
            cancelButtonText: 'Отмена',
            type: 'warning'
          })

          this.categories = this.categories.filter(i => i.id !== id)
          const res = await this.$store.dispatch('categories/remove', id)

          this.$message(`response: ${res}`)
          // this.$message.success('Категория удалена')

        } catch(e){}
      }
    },
  }
</script>

<style scoped>
.page-title {
  margin-top: 0;
}
</style>