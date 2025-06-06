<script setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
</script>

<template>
<div class="flex-box">
  <ul v-infinite-scroll="load"
      class="infinite-list home-auto-list"
      style="overflow: auto"
      :infinite-scroll-distance="200">
    <li v-for="i in count" :key="i" class="infinite-list-item">
      <div class="img-box"><img class="img-box-item" src="@/assets/HomePageItem2.png"/></div>
    </li>
  </ul>

</div>
</template>

<style scoped>
.img-box{
  display: flex;
  width: 100%;
  height: 100%
}
.img-box-item{
  margin: 1em 1em 0 0;
}
.flex-box{
  display: flex;
  flex-direction: column;
  width: 23vw;
  height: 90vh;
  margin: 0 1vw 0 0;
}
.infinite-list {
   height: 90vh;
   padding: 0;
   margin: 0;
   list-style: none;
 }
.infinite-list::-webkit-scrollbar{
  width: 0;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
  background: #303841;
  color: #00adb5;
}
</style>