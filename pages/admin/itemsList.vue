<template>
  <div>
    <h2 class="page-title">
      Список товаров
    </h2>
    <el-table style="width: 100%" :data="items">
      <el-table-column label="Название" prop="name" />
      <el-table-column label="Описание" prop="description" />
      <el-table-column label="Цена" prop="price" />
      <el-table-column label="Количество" prop="quantity" width="120"/>
      <el-table-column align="right" width="250">
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
        const items = await store.dispatch('items/fetch')
        return {items}
      } catch(e) {
        // commit('setError', e, {root: true});
        // throw e;
      }
    },
    methods: {
      open(id) {
        console.log('open' + id);
        this.$router.push(`/admin/item/${id}`)
      },
      async remove(id) {
        try {
            console.log('remove ' + id);
            
            await this.$confirm('Удалить товар?', 'Внимание!', {
            confirmButtonText: 'Да',
            cancelButtonText: 'Отмена',
            type: 'warning'
          })

          this.items = this.items.filter(i => i.id !== id)
          const res = await this.$store.dispatch('items/remove', id)

          this.$message(`response: ${res}`)
          this.$message.success('Товар удалён')
        
        } catch(e){}
    },
  },
}
</script>

<style scoped>
.page-title {
  margin-top: 0;
}
</style>