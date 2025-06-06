<script setup>
import {ref} from "vue";
//背景视频组件（已实现）
const posterUrl = "@/assets/logo.png"
const isVideoLoad = ref(false)
const onVideoLoad = () => {
  isVideoLoad.value = true;
}
</script>

<template>
<div class="Blog-Login-component-LoginBackgroundVideo-class">
  <div class="Login-Background-Video-container">
    <video ref="video"
           autoplay
           loop muted
           playsinline
           :poster="posterUrl"
           @canplay="onVideoLoad"
           disablePictureInPicture
    >
      <source src="../../../assets/LoginVdeio01.mp4" type="video/mp4">
    </video>
    <slot></slot>
  </div>
</div>
</template>

<style scoped>
.Blog-Login-component-LoginBackgroundVideo-class-class{
  --Blog-Login-component-LoginBackgroundVideo-var-top: 0;
  --Blog-Login-component-LoginBackgroundVideo-var-left: 0;
  --Blog-Login-component-LoginBackgroundVideo-var-width: 100%;
  --Blog-Login-component-LoginBackgroundVideo-var-height: 100%;
}
video {
  width: var(--Blog-Login-component-LoginBackgroundVideo-var-width);
  height: var(--Blog-Login-component-LoginBackgroundVideo-var-height);
  object-fit: cover;
}
.Login-Background-Video-container {
  z-index: -1;
  top: var(--Blog-Login-component-LoginBackgroundVideo-var-top);
  left: var(--Blog-Login-component-LoginBackgroundVideo-var-left);
  width: var(--Blog-Login-component-LoginBackgroundVideo-var-width);
  height: var(--Blog-Login-component-LoginBackgroundVideo-var-height);
  position: fixed;
  overflow: hidden;
}
</style>