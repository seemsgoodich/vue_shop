<template>
  <div>
    <h2 class="page-title">
      Добавление товара
    </h2>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Название">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Описание">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="Категория">
        <el-select v-model="form.select" placeholder="Выберите категорию">
          <el-option
            v-for="category in categories"
            :key="category.id"
            :label="category.name"
            :value="category.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Цена">
        <el-input v-model.number="form.price"></el-input>
      </el-form-item>
      <el-form-item label="Количество">
        <el-input v-model.number="form.quantity"></el-input>
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
          description: '',
          select: '',
          price: '',
          quantity: '',
          image: null
        },
      }
    },
    async asyncData({store}) {
        const categories = await store.dispatch('categories/fetch')
        return {categories}
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
              item: {
                  name: this.form.name,
                  description: this.form.description,
                  ['category-id']: this.form.select,
                  price: this.form.price,
                  quantity: this.form.quantity,
              },
              base64image: splited
          }

          this.form.name = '',
          this.form.description = '',
          this.form.select = ''
          this.form.price = '',
          this.form.quantity = ''
          this.$refs.upload.clearFiles();
          
          console.log(formData);

          const res = await this.$store.dispatch('items/create', formData)
          this.$message(`Response: ${res}`);


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
</style>
