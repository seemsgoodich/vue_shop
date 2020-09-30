<template>
  <div>
    <h2 class="page-title">
        Добавление категории
    </h2>
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
        <el-button type="primary" @click="onSubmit">Добавить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    // middleware: ['user-auth']
    data() {
      return {
        form: {
          name: '',
          image: null
        }
      }
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
      async onSubmit() {
       try {
          console.log('submit!');

          const splited = this.image.split(',')[1];

          const formData = {
            category: {
              name: this.form.name,
              
            },
            base64image: splited
          };

          this.form.name = ''
          this.$refs.upload.clearFiles();
          
          console.log(formData);

          const res = await this.$store.dispatch('categories/create', formData)
          
          this.$message(`response: ${res}`)
          // this.$message(`Response: ${res}`);


       } catch(e) {

       }
      }
    }
  }

</script>

<style scoped>
    .page-title {
        margin-top: 0;
    }

    .upload {
      margin-bottom: 20px;
    }

</style>
