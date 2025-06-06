<script setup>
 const imgList = [
     'HomePageItem1.png',
     'HomePageItem2.png',
     'HomePageItem3.png',
     'HomePageItem4.png'
 ]
</script>

<template>
  <div class="block text-center">
    <el-carousel  >
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="require(`@/assets/${item}`)"
             alt="HomePageItem"
             width="130%"
             height="auto"
             >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.block{
  margin: 0 5em;
}
.demonstration {
  color: var(--el-text-color-secondary);
}
.el-carousel{
  border: 1px solid #303841;
  box-shadow: 2px 1px 20px 2px #ffffff;
  height: 30vh;
}
img:hover{
  width: 100%;
  transition:  width 120ms;
}
.el-carousel__item {
  color: #00adb5;
  background-color: #303841;
  opacity: 0.55;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

</style>