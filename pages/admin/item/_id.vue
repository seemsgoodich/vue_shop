<template>
    <div class="category">
        <h2 class="category-title">
            Страница редактирования товара
        </h2>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item to="/admin/categoryList">Список товаров</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.params.id}}</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Название">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Описание">
                <el-input v-model="form.description"></el-input>
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
    data() {
      return {
        form: {
          name: '',
          description: '',
          price: '',
          quantity: '',
          image: null
        },
      }
    },
    async asyncData({store, params}) {
        const response = await store.dispatch('items/fetchId', params.id)
        const item = response.data.item;
        return {item}
    },
    mounted() {
        this.form.name = this.item.name,
        this.form.description = this.item.description,
        this.form.price = this.item.price,
        this.form.quantity = this.item.quantity
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
            item: {
              name: this.form.name,
              description: this.form.description,
              price: this.form.price,
              quantity: this.form.quantity
            },
          };

          const imgData = {
              base64image: splited   
          }

          this.form.name = ''
          this.form.description = ''
          this.form.price = ''
          this.form.quantity = ''

          this.$refs.upload.clearFiles();
          
          console.log(textData);
          console.log(imgData);

          const textRes = await this.$store.dispatch('items/updateText', {id, textData})
          const imgRes = await this.$store.dispatch('items/updateImg', {id, imgData})
          
          if (textRes === 0 && imgRes === 0) {
              this.$message.success(`Товар обновлён`)
          }
          else {
              this.$message.warning(`Произошла ошибка.`)
              console.log(`Logs. Text: ${textRes}; Img: ${imgRes}`);
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

    .el-breadcrumb {
        margin-bottom: 20px;
    }
</style>