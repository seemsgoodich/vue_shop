<template>
    <el-menu
      :style="{height: '100%'}"
      router
      :default-active="activeLink"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/admin"  >
        <i class="el-icon-takeaway-box"></i>
        <span>Главная инфа в админке</span>
      </el-menu-item>
      <el-menu-item index="/admin/createCategory">
        <i class="el-icon-document-add"></i>
        <span>Добавление категории</span>
      </el-menu-item>
      <el-menu-item index="/admin/createItem">
        <i class="el-icon-document-add"></i>
        <span>Добавление товара</span>
      </el-menu-item>
      <el-menu-item index="/admin/categoryList">
        <i class="el-icon-notebook-2"></i>
        <span>Список категорий</span>
      </el-menu-item>
      <el-menu-item index="/admin/itemsList">
        <i class="el-icon-notebook-2"></i>
        <span>Список товаров</span>
      </el-menu-item>
      <el-menu-item index="/admin/users">
        <i class="el-icon-notebook-2"></i>
        <span>Список пользователей</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeLink: null
    }
  },
  watch: {
    $route (to, from) {
      this.activeLink = to.path
    }
  },
  mounted: function() {
    this.activeLink = this.$route.path;
  }
}
</script>