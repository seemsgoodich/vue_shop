<template>
  <div class="align-fix">
    <div class="empty-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(value) {
            console.log(value);
            this.$message.error(value.data)
        }
    }
}
</script>

<style scoped>
  .align-fix {
    padding-top: 240px;
  }

  .empty-container {
    display: flex;
    justify-content: center;
    align-self: center;
    vertical-align: middle;
    margin: 0 auto;
    padding: 10px 20px 20px 20px;
    max-width: 500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

</style>
