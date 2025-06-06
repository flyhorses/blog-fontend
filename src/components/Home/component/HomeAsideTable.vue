<template>
    <div class="flex-box">
      <button @click="changeType" class="HomeAsideTable-button" :style="{width: buttonLonger}">
        <svg t="1748950608047"
             class="icon my-icon-style"
             viewBox="0 0 1024 1024"
             xmlns="http://www.w3.org/2000/svg"
             p-id="13830"
             :style="{transform: `rotate(${iconType})`}">
          <path d="M344.96 746.688L579.712 512 345.024 277.312l60.288-60.352L700.352 512l-295.04 295.04-60.288-60.352z" p-id="13831"></path>
        </svg>
      </button>
      <el-menu
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><Document /></el-icon>
          <template #title>测试一</template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Menu /></el-icon>
          <template #title>测试二</template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <template #title>测试三</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>测试四</template>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <template #title>测试五</template>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon><setting /></el-icon>
          <template #title>测试六</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><setting /></el-icon>
          <template #title>测试七</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><setting /></el-icon>
          <template #title>测试七</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><setting /></el-icon>
          <template #title>测试七</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><setting /></el-icon>
          <template #title>测试七</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><setting /></el-icon>
          <template #title>测试七</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><setting /></el-icon>
          <template #title>测试七</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><setting /></el-icon>
          <template #title>测试七</template>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  // eslint-disable-next-line no-unused-vars
  Document,
  Menu ,
  // eslint-disable-next-line no-unused-vars
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const buttonLonger = ref("calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding)*2)");
const iconType = ref("0");
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const changeType = () => {
  isCollapse.value = !isCollapse.value;
  if(isCollapse.value)
  {
    buttonLonger.value = "calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding)*2)";
    iconType.value = "0";
  }
  else {
    buttonLonger.value = "200px";
    iconType.value = "180deg"
  }
}
</script>

<style scoped>
.flex-box{
  position: relative;
  display: flex;
  flex-direction: column;
}
.my-icon-style{
  width: 40px;
  height: 40px;
  fill: #00adb5;
  transition: transform 0.3s ease-in-out;
}
.HomeAsideTable-button{
  color: #00adb5;
  background-color: #303841;
  font-size : var(--el-menu-item-font-size);
  width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding)*2);
  height: var(--el-menu-item-height);
  margin: 0 5em 0 1em ;
  border:0;
  transition: width 0.3s ease-in-out;
}
.HomeAsideTable-button:hover{
  background-color: #354545;
}
</style>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-sub-menu__title {
  color: #00adb5;
}
.el-menu {
  background-color: #303841;
  --el-menu-text-color: #ffffff;
  --el-menu-active-text-color: #00adb5;
  --el-menu-active-color: #00adb5;
  border: 0;
  margin:  0 0 0 1em;
}
.el-menu-item:hover{
  background-color: #354545;
  color: #00adb5;
}
.el-menu-item:focus{
  color: #00adb5;
}
</style>