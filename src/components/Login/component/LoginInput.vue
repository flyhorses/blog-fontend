<template>
  <div class="Blog-Login-component-LoginInput-class">
    <form class="loginCard-flex-box" id="loginForm" @submit.prevent="handleSubmit" method="post">
      <input
          class="loginCard-flex"
          type="text"
          name="mail"
          autocomplete="off"
          :autofocus="false"
          placeholder="   邮箱账号"
          v-model="formData.mail"
      />
      <input
          class="loginCard-flex"
          type="password"
          maxlength="18"
          autocomplete="off"
          :autofocus="false"
          placeholder="   密码"
          v-model="formData.password"
      />
      <div class="captcha-img-box">
      <input
          class="loginCard-flex-captcha"
          type="text"
          name="captcha"
          autocomplete="off"
          :autofocus="false"
          placeholder="   请输入验证码"
          v-model="formData.captcha"
      />
        <img
            :src="captchaUrl"
            class="login-captcha-img"
            @click="handleRefresh"
            alt="点击获取"
        >
      </div>
      <div class="warn-box">
        <p v-if="errors" class="warn">{{ errors}}</p>
      </div>
      <button
          class="loginCard-flex loginCard-flex-button"
          type="submit"
          :disabled="isLoading"
      >
        {{ isLoading ? '登录中...' : '登录' }}
      </button>
    </form>
    <p v-if="!errors && responseText" class="warn">{{ responseText }}</p>
  </div>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue';
import {getCaptcha} from "@/api/api";
import {login} from "@/api/user";
//登录表单组件（已实现）
// 表单数据
const formData = reactive({
  mail: '',
  password: '',
  captcha: ''
});
// 错误信息
const errors = ref(" ");
// 响应信息
const responseText = ref('');
const isLoading = ref(false);
const captchaUrl = ref('');
// 表单验证
const validateForm = () => {
  if (!formData.mail || !formData.password || !formData.captcha) {
    errors.value = "邮箱,密码和验证码均不能为空";
    return false;
  }
  errors.value = " ";
  return true;
};
// 刷新验证码
const handleRefresh = () => {
  getCaptcha().then(res => {
  captchaUrl.value =  URL.createObjectURL(res.data);
  });
};
onMounted(()=>{
  handleRefresh();
})
// 提交表单
const handleSubmit = async () => {
  if (!validateForm()) return;
  try {
    isLoading.value = true;
    responseText.value = '';




    // 发送登录请求
    const response = await login(formData.mail, formData.password, formData.captcha);
    console.log(response);
    if (response.data.code === 200) {
      // 登录成功，存储token并跳转,暂时没有实现
      // localStorage.setItem('token', response.data.data.token);
      responseText.value = '登录成功！正在跳转...';

      setTimeout(() => {
        window.location.href = '/'; // 替换为实际路径
      }, 1000);
    } else {
      // 登录失败，显示错误信息并刷新验证码
      responseText.value = response.data.message || '登录失败，请重试';
      await getCaptcha();
    }
  } catch (error) {
    console.error('登录请求失败:', error);
    responseText.value = '网络错误，请稍后重试';
    handleRefresh();
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.Blog-Login-component-LoginInput-class{
  --Blog-Login-component-LoginInput-var-background-color: #303841;
  --Blog-Login-component-LoginInput-var-color: #00adb5;
  --Blog-Login-component-LoginInput-var-font-size: 20px;
  --Blog-Login-component-LoginInput-var-warn-color: brown;
  --Blog-Login-component-LoginInput-var-height: 50vh;
}
.loginCard-flex-box{
  font-size: var(--Blog-Login-component-LoginInput-var-font-size);
  height: var(--Blog-Login-component-LoginInput-var-height);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.loginCard-flex{
  background-color: var(--Blog-Login-component-LoginInput-var-background-color);
  color: var(--Blog-Login-component-LoginInput-var-color);
  font-size: var(--Blog-Login-component-LoginInput-var-font-size);
  border-radius: 1em;
  border: 0;
  width: 13em;
  height: 3em;
  display: block;
  box-sizing: border-box;
  margin-top: 2em;
  transition: font-size 0.3s ease;
}
input.loginCard-flex:hover{
  font-size: calc(1em + 2px);
  border: 2px solid var(--Blog-Login-component-LoginInput-var-color);
}
.loginCard-flex-button:hover{
  border: 2px solid var(--Blog-Login-component-LoginInput-var-color);
}
.loginCard-flex.loginCard-flex-button:active{
  border: 2px solid var(--Blog-Login-component-LoginInput-var-color);
  color: #00adb5;
}
.loginCard-flex.loginCard-flex-button{
  color: white;
}
.captcha-img-box{
  font-size: var(--Blog-Login-component-RegisterInput-var-font-size);
  margin-top: 2em;
  column-gap: 0.5em;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.loginCard-flex-captcha{
  display: flex;
   background-color: var(--Blog-Login-component-LoginInput-var-background-color);
   color: var(--Blog-Login-component-LoginInput-var-color);
   font-size: 20px;
   border:0;
   width: 8em;
   height: 3em;
   border-radius: 1em;
   margin-right: 0.5em;
 }
.login-captcha-img{
  width: 4em;
}
.loginCard-flex-captcha:hover{
  font-size: 1.1em;
  transition: font-size 0.3s ease;
  border: 2px solid var(--Blog-Login-component-LoginInput-var-color);
}
input.loginCard-flex:focus,.loginCard-flex-captcha:focus{
  box-shadow: 1px 1px 10px 2px var(--Blog-Login-component-LoginInput-var-color);
  outline:none;
}
.warn{
  color: var(--Blog-Login-component-LoginInput-var-warn-color);
  text-align: center;
  flex:1;
}
.warn-box{
  margin: 0;
  font-size: 0.8em;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 1.5em;
}
</style>