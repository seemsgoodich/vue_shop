<template>
    <div class="container">
        <el-container class="inner-container">
            <el-aside width="250px" >
                <Aside/>
            </el-aside>
            <el-main>
                <nuxt/>
            </el-main>
            </el-container>
    </div>
</template>

<script>
import Aside from '@/components/admin/Aside'
export default {
    components: {
      Aside
    },
}
</script>

<style scoped>
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
      height: 100vh;
    }

    .inner-container {
        margin: 40px 0;
    }
</style>