<script setup>

import HomeTopTable from "@/components/Home/component/HomeTopTable.vue";
import HomeAsideTable from "@/components/Home/component/HomeAsideTable.vue";
import HomeMarquee from "@/components/Home/component/HomeMarquee.vue";
import HomeAutoList from "@/components/Home/component/HomeAutoList.vue";
import HomeAsideList from "@/components/Home/component/HomeAsideList.vue";
</script>

<template>
    <HomeTopTable></HomeTopTable>
    <div class="flex-box">
      <HomeAsideTable></HomeAsideTable>
      <div class="flex-box list-box">
        <HomeMarquee></HomeMarquee>
        <HomeAutoList></HomeAutoList>
      </div>
        <HomeAsideList></HomeAsideList>
    </div>
</template>

<style scoped>
.flex-box{
  position: relative;
  display: flex;
}
.list-box{
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>