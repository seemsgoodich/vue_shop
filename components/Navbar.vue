<template>
    <div class="nav-container" justify="space-between" :class="{mb: inputShow}">
        <el-menu class="el-menu-demo" :default-active="activeLink" mode="horizontal">
            <el-menu-item index="/">
                <nuxt-link 
                    tag="a"
                    to="/"
                    class="nav-link"
                >
                    Главная
                </nuxt-link>
            </el-menu-item>
            <el-menu-item index="/constructor">
                <nuxt-link 
                    tag="a"
                    to="/constructor"
                    class="nav-link"
                >
                    Свой дизайн
                </nuxt-link>
            </el-menu-item>
            <div name="modal">
                <el-button 
                    class="button"
                    type="primary" 
                    icon="el-icon-search" 
                    circle 
                    @click="inputShow = !inputShow"
                >
                </el-button>
                <el-form class="form" :class="{show: inputShow}">
                    <el-form-item>
                        <el-input
                            prefix-icon="el-icon-search"
                            placeholder="кликни и поищи)"
                            class="find"
                            v-model="input"
                            @keyup.enter.native="onSubmit"
                        >
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
            <el-menu-item>
                <nuxt-link
                    to="/profile"
                    class="nav-link icon-link"
                >
                    <i class="el-icon-user icon"></i>
                </nuxt-link>
                <nuxt-link
                    to="/cart"
                    class="nav-link icon-link"
                >
                    <i class="el-icon-shopping-cart-1 icon"></i>
                </nuxt-link>
                <nuxt-link
                    to="/favorites"
                    class="nav-link icon-link"
                >
                    <i class="el-icon-star-off icon"></i>
                </nuxt-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeLink: null,
        input: '',
        inputShow: true,
      };
    },
    watch: {
      $route (to, from) {
        this.activeLink = to.path
      }
    },
    mounted: function() {
      this.activeLink = this.$route.path;
    },
    methods: {
        onSubmit() {
            // this.$router.push(`/result?search-query=${encodeURI(this.input)}`)
            // this.$router.push(decodeURI(`/result?search-query=${this.input}`))
            this.$router.push('/result?search-query=' + encodeURIComponent(this.input))
        }
    } 
}
</script>

<style scoped>
    .nav-container {
        padding-bottom: 20px;
        position: relative;
    }

    .form {
        transform: translateY(-2000px);
        left: 0;
        position: absolute;
        z-index: 50;
        right: 0;
    }

    .show {
        transform: translateY(10px);
    }

    .mb {
        margin-bottom: 25px;
    }

    .el-menu-demo {
        display: flex;
        justify-content: space-between;
    }

    .el-menu-item {
        padding: 0;
        font-size: 18px;
        text-decoration: none;
    }

    .nav-link {
        display: inline-block;
        padding: 0 20px;
        text-decoration: none;
        color: black;
    }

    .icon {
        color: #303133;
        font-size: 24px;
    }
    
    .button {
        margin-top: 10px;
        max-height: 40px;
    }

    .icon-link:hover .icon{
        color: #409EFF;
    }

</style>