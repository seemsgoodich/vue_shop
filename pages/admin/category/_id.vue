<template>
    <div class="category">
        <h2 class="category-title">
            Страница редактирования категории
        </h2>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/admin/categoryList">Список категорий</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.params.id}}</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-form label-position="top" :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="Название категории">
                <el-input v-model="form.name" placeholder="Категория"></el-input>
            </el-form-item>

            <el-upload
                class="upload"
                drag
                :multiple="false"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleImage"
                :auto-upload="false"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">Перетащите сюда или <em>кликните для загрузки</em></div>
                <div class="el-upload__tip" slot="tip">jpg/png файлы</div>
            </el-upload>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Обновить</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
      return {
        form: {
          name: '',
          image: null
        },
      }
    },
    async asyncData({store, params}) {
        const response = await store.dispatch('categories/fetchId', params.id)
        const category = response.data.category;
        return {category}
    },
    mounted() {
        this.form.name = this.category.name
    },
    methods: {
      handleImage(file, fileList) {
        // this.image = file.raw
        file.name = 'icon'
        const img = file.raw
        this.base64(img)
      },
      base64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        })
        .then(res => this.image = res)
      },
      async onSubmit({store}) {
       try {

          console.log('submit!');

          const id = this.$route.params.id

          const splited = this.image.split(',')[1];

          const textData = {
            category: {
              name: this.form.name,
            },
          };

          const imgData = {
              base64image: splited    
          }

          this.form.name = ''
          this.$refs.upload.clearFiles();
          
          console.log(textData);
          console.log(imgData);

          const textRes = await this.$store.dispatch('categories/updateText', {id, textData})
          const imgRes = await this.$store.dispatch('categories/updateImg', {id, imgData})
          
          if (textRes === 0 && imgRes === 0) {
              this.$message.success(`Категория обновлена`)
          }
          else {
              this.$message.warning(`Произошла ошибка.`)
          }


       } catch(e) {

       }
      }
    }
}
</script>

<style scoped>
    .category-title {
        margin-top: 0;
    }
</style>