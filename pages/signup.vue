<template>
  <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="150px" class="form">
    <h2 class="title">Зарегистрируйтесь</h2>
    <el-form-item label="E-mail" prop="email">
      <el-input v-model.trim="$v.ruleForm.email.$model" autocomplete="off"
        :class="{invalid: ($v.ruleForm.email.$dirty && !$v.ruleForm.email.required) || ($v.ruleForm.email.$dirty && !$v.ruleForm.email.email)}"
      >
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
    <el-form-item label="Повторите пароль" prop="checkPass">
      <el-input type="password" v-model.trim="$v.ruleForm.checkPass.$model" autocomplete="off"
        :class="{invalid: ($v.ruleForm.checkPass.$dirty && !$v.ruleForm.checkPass.required) || ($v.ruleForm.checkPass.$dirty && !$v.ruleForm.checkPass.minLength)}"
      ></el-input>
      <span class="error" v-if="$v.ruleForm.checkPass.$dirty && !$v.ruleForm.checkPass.required">
        Повторите пароль
      </span>
      <span class="error" v-else-if="$v.ruleForm.checkPass.$dirty && !$v.ruleForm.checkPass.sameAsPassword">
        Пароли не совпадают
      </span>
    </el-form-item>
    <el-form-item class="buttons">
      <el-button type="primary" @click="submit('ruleForm')">Зарегистрироваться</el-button>
      <el-button @click="resetForm('ruleForm')">Очистить</el-button>
    </el-form-item>
    <p class="reg-info">
      Есть аккаунт?
      <nuxt-link
        to="/signin"
        class="link-ref"
      >
        Войти
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
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    layout: 'empty',
    data() {
      return {
        ruleForm: {
          email: '',
          password: '',
          checkPass: '',
        },
      }
    },
    validations: {
      ruleForm: {
        email: {email, required},
        password: {required, minLength: minLength(8)},
        checkPass: { required, sameAsPassword: sameAs('password')
        },
      },
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
        }
      },
      async submit () {
        if(this.$v.$invalid) {
          this.$v.$touch();
          console.log('abort');
          return
        }

        this.loading = true
        console.log('valid');

        try {
          const formData = {
            credentials: {
              email: this.ruleForm.email,
              password: this.ruleForm.password,
            }
          }

          const error = await this.$store.dispatch('auth/signup', formData)

          if (error) {
            this.$message.error(`${error}`)
            this.resetForm('ruleForm')
          }

          this.loading = false

        } catch(e) {
          this.loading = false
        }
      },
    },
  }
</script>

<style scoped>
  .title {
    text-align: center;
  }

  .reg-info {
    text-align: center;
  }

  .link-ref {
    color: #409EFF;
  }

  .buttons {
    margin-left: 0;
  }

  .error {
    font-size: 14px;
    color: #F56C6C;
  }
</style>