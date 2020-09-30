<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <img :src="`./${item}.jpg`" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>