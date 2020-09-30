<template>
    <el-menu
      router
      :default-active="activeLink"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/profile">
        <i class="el-icon-takeaway-box"></i>
        <span>Основная информация</span>
      </el-menu-item>
      <el-menu-item index="/profile/orders">
        <i class="el-icon-notebook-2"></i>
        <span>Заказы</span>
      </el-menu-item>
      <el-menu-item index="/profile/logout">
        <i class="el-icon-switch-button"></i>
        <span>Выйти нахуй</span>
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