<script setup>
import {reactive, ref, onUnmounted} from "vue";
import {getMailCaptcha} from "@/api/api";
import {register} from "@/api/user";
import router from "@/router";

const loginName = ref("注册")
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// 表单数据结构，使用email字段
const formData = reactive({
  email: '',
  password: '',
  verificationCode: ''  // 验证码字段
});

const errors = ref('');
const responseText = ref('');
const isLoading = ref(false);
const isSendingCode = ref(false);
const countdown = ref(0);
const timer = ref(null);

//方法区域//////////////////////////////////////////////////////////////////

// 表单验证
const validateForm = () => {
  if (!formData.email || !formData.password) {
    errors.value = "邮箱、密码不能为空";
    return false;
  }

  if (!EMAIL_REGEX.test(formData.email)) {
    errors.value = "邮箱格式不正确";
    return false;
  }

  if (!PASSWORD_REGEX.test(formData.password)) {
    errors.value = "密码至少8位，需包含字母和数字";
    return false;
  }

  errors.value = '';
  return true;
};

// 发送验证码
const handleRefresh = async () => {
  event.preventDefault();
  if (isSendingCode.value || countdown.value > 0) return;
  if (!validateForm()) return;
  try {
    //计时器，限制次数
    isSendingCode.value = true;
    countdown.value = 60;
    timer.value = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        clearInterval(timer);
        isSendingCode.value = false;
      }
    }, 1000);
    errors.value = '';
    //发送验证码请求
    getMailCaptcha(formData.email).then(result=> {
      if (result.data.code === 200) {
        responseText.value = "验证码已发送，请注意查收";
      } else {
        errors.value = result.data.message || "发送验证码失败";
      }
    });
  } catch (error) {
    console.error("发送验证码失败:", error);
    errors.value = "网络错误，请稍后重试";
  } finally {
   // isSendingCode.value = false;
  }
};
// 清理定时器
onUnmounted(() => {
  if (timer.value) clearInterval(timer);
});

// 提交表单
const handleSubmit = async () => {
  event.preventDefault();
  if (!validateForm()) return;
  if (!formData.verificationCode)
  {
    errors.value = "验证码不能为空";
    return;
  }

  try {
    isLoading.value = true;
    responseText.value = '';
    // 发送登录请求
    await register(formData.email, formData.password,formData.verificationCode).then(res=>{
      if (res.data.code === 200) {
        // 登录成功
        responseText.value = '注册成功！正在跳转...';
        router.push('/');
      } else {
        // 登录失败
        responseText.value = res.data.message || '注册失败，请重试';
        formData.verificationCode = ''; // 清空验证码
      }
    });
    console.log("ok");
  } catch (error) {
    console.error('注册请求失败:', error);
    responseText.value = '网络错误，请稍后重试';
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="Blog-Login-component-RegisterInput-class">
    <form class="loginCard-flex-box" id="loginForm" @submit="handleSubmit" method="post">
      <input class="loginCard-flex" type="text" name="email" v-model="formData.email" placeholder="   邮箱账号"/>
      <input class="loginCard-flex" type="password" name="password" v-model="formData.password" placeholder="   密码">
      <div class="loginCard-flex-box-captcha">
        <input class="loginCard-flex-captcha" type="text" name="captcha" v-model="formData.verificationCode"
               placeholder="    请输入验证码">
        <button @click="handleRefresh" :disabled="isSendingCode" class="loginCard-flex-button-captcha">{{isSendingCode?countdown:"发送"}}</button>
      </div>
      <button class="loginCard-flex-button" type="submit">{{ loginName }}</button>
      <p v-if="errors" >{{ errors }}</p>
    </form>
    <p v-if="responseText" style="color: #00adb5">{{ responseText }}</p>
  </div>
</template>

<style scoped>
.Blog-Login-component-RegisterInput-class{
  --Blog-Login-component-RegisterInput-var-font-size: 20px;
  --Blog-Login-component-RegisterInput-var-background-color: #303841;
  --Blog-Login-component-RegisterInput-var-color: #00adb5;
  --Blog-Login-component-RegisterInput-var-height: 50vh;
  --Blog-Login-component-RegisterInput-var-liget-color: #fff;
}
.loginCard-flex-box {
  font-size: var(--Blog-Login-component-RegisterInput-var-font-size);
  height: var(--Blog-Login-component-RegisterInput-var-height);
  flex-direction: column;
  width: auto;
  margin-top: 2.5em;
  align-items: center;
  display: flex;
}
.loginCard-flex {
  background-color: var(--Blog-Login-component-RegisterInput-var-background-color);
  color: var(--Blog-Login-component-RegisterInput-var-color);
  font-size: var(--Blog-Login-component-RegisterInput-var-font-size);
  border:0;
  margin-top: 2em;
  border-radius: 1em;
  width: 13em;
  height: 3em;
  display: block;
  box-sizing: border-box;
}
.loginCard-flex:hover,.loginCard-flex-captcha:hover{
  border: 2px solid var(--Blog-Login-component-RegisterInput-var-color);
  font-size: 1.1em;
  transition: font-size 0.3s ease;
}
.loginCard-flex:focus,.loginCard-flex-captcha:focus{
  outline: none;
  border: 2px solid var(--Blog-Login-component-RegisterInput-var-color);
  box-shadow: 1px 1px 10px 2px var(--Blog-Login-component-RegisterInput-var-color);
}
.loginCard-flex-box-captcha {
  font-size: var(--Blog-Login-component-RegisterInput-var-font-size);
  margin-top: 2em;
  column-gap: 0.5em;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.loginCard-flex-captcha {
  background-color: var(--Blog-Login-component-RegisterInput-var-background-color);
  color: var(--Blog-Login-component-RegisterInput-var-color);
  font-size: var(--Blog-Login-component-RegisterInput-var-font-size);
  border-radius: 1em;
  border: 0;
  width: 9.7em;
  height: 3em;
  display: block;
  box-sizing: border-box;
}
.loginCard-flex-button-captcha {
  background-color: var(--Blog-Login-component-RegisterInput-var-background-color);
  color: #fff;
  border: 0;
  font-size: var(--Blog-Login-component-RegisterInput-var-font-size);
  border-radius: 1em;
  width: 3em;
  height: 3em;
  display: block;
  box-sizing: border-box;
}
.loginCard-flex-button-captcha:hover,.loginCard-flex-button:hover{
  border: 2px solid var(--Blog-Login-component-RegisterInput-var-color);
}
.loginCard-flex-button-captcha:active,.loginCard-flex-button:active{
  border: 2px solid var(--Blog-Login-component-RegisterInput-var-color);
  color: var(--Blog-Login-component-RegisterInput-var-color);
}
.loginCard-flex-button{
  background-color: var(--Blog-Login-component-RegisterInput-var-background-color);
  color: var(--Blog-Login-component-RegisterInput-var-liget-color);
  font-size: var(--Blog-Login-component-RegisterInput-var-font-size);
  border:0;
  margin-top: 2em;
  border-radius: 1em;
  width: 13em;
  height: 3em;
  display: block;
  box-sizing: border-box;
}
.loginCard-flex-button-captcha:disabled{
  color: var(--Blog-Login-component-RegisterInput-var-liget-color);
  border:0;
}
p {
  color: brown;
  text-align: center;
}
</style>