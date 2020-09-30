<template>
    <div class="container">
        <Navbar/>
        <div class="inner-container">
          <nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
    components: {
        Navbar,
        Footer,
    }
}
</script>

<style scoped>
</style>
