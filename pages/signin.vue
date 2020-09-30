<template>
  <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="150px" class="form">
    <h2 class="title">Войдите</h2>
    <el-form-item label="E-mail" prop="email">
      <el-input v-model.trim="$v.ruleForm.email.$model" autocomplete="off"
        :class="{invalid: ($v.ruleForm.email.$dirty && !$v.ruleForm.email.required) || ($v.ruleForm.email.$dirty && !$v.ruleForm.email.email)}">
      </el-input>
      <span class="error" v-if="$v.ruleForm.email.$dirty && !$v.ruleForm.email.required">
        Поле Email не должно быть пустым!
      </span>
      <span class="error" v-else-if="$v.ruleForm.email.$dirty && !$v.ruleForm.email.email">
        Введите корректный Email
      </span>
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input type="password" v-model.trim="$v.ruleForm.password.$model" autocomplete="off"
        :class="{invalid: ($v.ruleForm.password.$dirty && !$v.ruleForm.password.required) || ($v.ruleForm.password.$dirty && !$v.ruleForm.password.minLength)}"
      ></el-input>
      <span class="error" v-if="$v.ruleForm.password.$dirty && !$v.ruleForm.password.required">
        Введите пароль
      </span>
      <span class="error" v-if="$v.ruleForm.password.$dirty && !$v.ruleForm.password.minLength">
        Пароль должен быть не менее {{$v.ruleForm.password.$params.minLength.min}} символов
      </span>
    </el-form-item>
    <el-form-item>
      <el-button :loading="loading" type="primary" @click="submit('ruleForm')">Войти</el-button>
      <el-button @click="resetForm('ruleForm')">Очистить</el-button>
    </el-form-item>
    <p class="reg-info">
      Нет аккаунта?
      <nuxt-link to="/signup" class="link-ref">
        Зарегистрируйтесь
      </nuxt-link>
    </p>
    <p class="reg-info">
      <nuxt-link to="/" class="link-ref">
        На главную
      </nuxt-link>
    </p>
  </el-form>
</template>

<script>
  import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    layout: 'empty',
    data() {
      return {
        ruleForm: {
          email: '',
          password: '',
        },
        loading: false
      }
    },
    validations: {
      ruleForm: {
        email: {email, required},
        password: {required, minLength: minLength(8)},
      },
    },
    mounted() {
      const {message} = this.$route.query

      switch(message) {
        case 'login':
          this.$message.info('Для начала авторизуйтесь')
          break;
        case 'logout':
          this.$message.success('Вы вышли из аккаунта')
          break;
        case 'session':
          this.$message.warning('Время жизни токена истекло')
          break;
      }
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      async submit() {
        if(this.$v.$invalid) {
          this.$v.$touch();
          console.log('abort');
          return
        }

        this.loading = true
        console.log('valid');

        try {
          let formData = {
            credentials: {
              email: this.ruleForm.email,
              password: this.ruleForm.password,
            }
          }

          const error = await this.$store.dispatch('auth/login', formData)

          if (error) {
            this.$message.error(`${error}`)
            this.resetForm('ruleForm')
          }

          this.loading = false

        } catch(e) {
          this.loading = false
          throw e
        }
      },
    },
  }

</script>

<style scoped>
  .form {
    width: 100%;
  }

  .reg-info {
    text-align: center;
  }

  .link-ref {
    color: #409EFF;
  }

  .title {
    text-align: center;
  }

  .error {
    font-size: 14px;
    color: #F56C6C;
  }

</style>
