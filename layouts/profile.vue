<template>
    <div class="container">
        <Navbar/>
        <el-container class="inner-container">
            <el-aside width="250px" >
                <Aside/>
            </el-aside>
            <el-main>
                <nuxt/>
            </el-main>
            </el-container>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Aside from '@/components/profile/Aside'
export default {
    components: {
      Navbar,
      Footer,
      Aside
    },
}
</script>

<style scoped>
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .inner-container {
        margin: 40px 0;
    }
</style>