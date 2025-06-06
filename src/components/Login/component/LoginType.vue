<!-- 子组件 LoginType.vue -->
<script setup>
import { ref, defineEmits } from 'vue'
//登录与注册切换的按钮组件（已实现）

const loginClassType = ref(true);
const loginName = ref("注册")
//用来存储按钮移动数据
const registerLeft = ref("0em")

// 定义事件用来发现状态变换
const emit = defineEmits(['typeChanged']);

const transButton = () => {
  if(loginClassType.value) {
    loginName.value = "登录";
  } else {
    loginName.value = "注册";
  }
  loginClassType.value = !loginClassType.value;

  // 触发事件通知父组件
  emit('typeChanged', loginClassType.value);
}

const transLoginClass = (type) =>{
  if(type) {
    registerLeft.value="0em"
    return "login"
  } else {
    registerLeft.value="2em"
    return "register"
  }
}

// eslint-disable-next-line no-undef
defineExpose({
  loginClassType ,
  inheritAttrs : false
});
</script>

<template>
 <div class="Blog-Login-component-LoginType-class">
   <div class="button_border">
     <button @click="transButton" :class="transLoginClass(loginClassType)" :style="{left : registerLeft}">{{loginName}}</button>
   </div>
 </div>
</template>

<style scoped>
.Blog-Login-component-LoginType-class{
  --Blog-Login-component-LoginType-var-background-color: #303841;
  --Blog-Login-component-LoginType-var-color: #00adb5;
  --Blog-Login-component-LoginType-var-font-size: 10px;
  --Blog-Login-component-LoginType-var-transition-lazy-time: 1s;
}
.button_border{
  font-size: var(--Blog-Login-component-LoginType-var-font-size);
  background-image: linear-gradient(90deg,
                    var(--Blog-Login-component-LoginType-var-background-color) 20%,
                    var(--Blog-Login-component-LoginType-var-color) 80%);
  width: 6em;
  height: 4em;
  right: 0.2em;
  border-radius: 2em;
  box-sizing: border-box;
  border:  solid 1px;
  position: absolute;
}

.login,.register{
  font-size: var(--Blog-Login-component-LoginType-var-font-size);
  transition: left var(--Blog-Login-component-LoginType-var-transition-lazy-time),
              background var(--Blog-Login-component-LoginType-var-transition-lazy-time);
  width: 4em;
  height: 4em;
  border-radius: 2em;
  position: relative;
  left: 0;
  box-sizing: border-box;
  border: solid 1px;
}
.login{
  color: var(--Blog-Login-component-LoginType-var-color);
  background: var(--Blog-Login-component-LoginType-var-background-color);
}
.register{
  color: var(--Blog-Login-component-LoginType-var-background-color);
  background :var(--Blog-Login-component-LoginType-var-color);
}
</style>