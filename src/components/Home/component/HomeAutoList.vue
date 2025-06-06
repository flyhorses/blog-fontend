<template>
  <div class="list-box">
    <ul v-infinite-scroll="load"
        class="infinite-list home-auto-list"
        style="overflow: auto"
        :infinite-scroll-distance="200">
      <li v-for="i in count" :key="i" class="infinite-list-item">
        <div class="img-box">
            <div class="img-box-item">
              <img
                   src="@/assets/HomeAuto.png"
                   alt="1"/>
              <div class="img-box-item-block">测试文字</div>
            </div>
        </div>
        <div class="img-box">
          <div class="img-box-item">
            <img
                src="@/assets/HomeAuto.png"
                alt="2"/>
            <div class="img-box-item-block">测试文字</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
</script>

<style scoped>
.img-box{
  display: flex;
  width: 50%;
  height: 100%;
}
.img-box-item-block{
  position: absolute;
  top: 70%;
  width: 100%;
  height: 30%;
  background-color: rgba(0,0,0,0.6);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  text-align: center;
}
.img-box-item{
  position: relative;
  display: flex;
  margin: 1em auto 1em auto;
  transition: transform 0.3s;
}
.img-box-item:hover{
  margin: 1em auto 1em auto;
  transform: scale(1.1);
  box-shadow: 1px 1px 20px 1px #ffffff;
}
.img-box-item:hover .img-box-item-block{

  opacity: 1;
  visibility: visible;
}
.img-box-item-acr{
  position: absolute;
  width: 40%;
  height: 10%;
  background-color: rgba(0,0,0,0.6);
  z-index: 10;
}
.list-box {
  display: flex;
  margin: 0 5em;
}
.infinite-list {
  height: calc(58vh + 15px);
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
