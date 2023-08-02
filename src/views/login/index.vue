<script setup lang="ts">
import {Lock, User} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import useUserStore from "@/store/modules/user.ts";
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
import {getTime} from "@/utils/time.ts";

let useStore = useUserStore()

let $router = useRouter()

let loginForm = reactive({username: 'admin', password: '123456'})

let loading = ref(false)

let loginForms = ref()

const login = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm);
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
}
const validatorUserName = (rule:any,value:any,callback:any)=>{
  if (value.length>=5){
    callback()
  }else{
    callback(new Error('账号5-10位'))
  }
}
const validatorPassword = (rule:any,value:any,callback:any)=>{
  if (value.length>=6){
    callback()
  }else{
    callback(new Error('密码至少6位'))
  }
}
const rules = {
  username: [
    // {required: true, message: '用户名不能为空', trigger: 'blur'},
    // {required: true, min: 6, max: 14, message: '账号长度6-14位', trigger: 'change'}
    {trigger:'change',validator:validatorUserName}
  ],
  password: [
    // {required: true, min: 5, max: 18, message: '密码长度5-18位', trigger: 'change'}
    {trigger:'change',validator:validatorPassword}
  ]
}

</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>