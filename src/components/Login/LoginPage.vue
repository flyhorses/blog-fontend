<script setup>

import LoginBackgroundVideo from "@/components/Login/component/LoginBackgroundVideo.vue";
import LoginAcrylic from "@/components/Login/component/LoginAcrylic.vue";
import LoginInput from "@/components/Login/component/LoginInput.vue";
import LoginType from "@/components/Login/component/LoginType.vue";
import { ref} from "vue";
import RegisterInput from "@/components/Login/component/RegisterInput.vue";
import LoginTopTable from "@/components/Login/component/LoginTopTable.vue";


const type = ref(true); // 初始为登录状态
const cardRef = ref(null);

// 处理类型变更事件
const handleTypeChange = (newValue) => {
  type.value = newValue;
  changeTheme(type.value);
};
const changeTheme = (type) =>
{
  const style = cardRef.value.style;
  if(type)
  {
    style.setProperty('--card-bg', 'rgba(0, 173, 181, 0.2)');
    style.setProperty('--card-color', '#181616');
  }
  else{
     style.setProperty('--card-bg', 'rgba(48, 56, 65, 0.5)');
     style.setProperty('--card-color', '#00adb5');
  }
}

</script>
<template>
  <body class="login_page_body">
  <LoginBackgroundVideo>
    <LoginAcrylic>
      <LoginTopTable></LoginTopTable>
      <div class="LoginCard" ref="cardRef">
        <div class="loginCard-header">
          <H3 class="loginCard-header-title">BLOG</H3>
          <H6 class="loginCard-header-title-small">很高兴您的登录</H6>
        </div>
        <!-- 监听 typeChanged 事件 -->
        <LoginType ref="loginTypeRef" class="loginCard-change-button" @typeChanged="handleTypeChange"></LoginType>
        <LoginInput class="loginCard-body" v-if="type"></LoginInput>
        <RegisterInput class="loginCard-body" v-if="!type"></RegisterInput>
        <h3 class="loginCard-footer">很抱歉暂时只支持邮箱登陆</h3>
      </div>
    </LoginAcrylic>
  </LoginBackgroundVideo>
  </body>
</template>
<style scoped>
.LoginCard{
  --card-bg: rgba(0, 173, 181, 0.2);
  --card-color: #181616;

  font-size: 15px;
  background-color: var(--card-bg);
  color: var(--card-color);
  position: relative;
  top: 3vh;
  left: 15vh;
  width: 20vw;
  height: 70vh;
  border-radius: 15px;
  padding : 2em;
}
.loginCard-header{
  border-bottom: solid 2px;
}
.loginCard-header-title{
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 60px;
}
.loginCard-header-title-small{
  margin: 0;
  box-sizing: border-box;
  text-align: center;
}
.loginCard-change-button{
  display: block;
  margin: 0.5em 0 0 0;
}
.loginCard-body {
  margin: 3em 0 0 0 ;
}
.loginCard-footer{
  font-size: 15px;
  border-top: 1px solid;
  text-align: center;
}
</style>