<script setup>
//背景视频前面的亚克力板效果（已实现）
</script>

<template>
<div class="Login-Acrylic-container">
  <slot></slot>
</div>
</template>

<style scoped>
.Login-Acrylic-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background-color: rgba(255,255,255,0.0004);
  z-index: 1;
}
</style>