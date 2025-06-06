<template>
<router-view></router-view>
</template>
<script>
import router from "@/router";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    router
  }
}
</script>

<style>
body{
  overflow: hidden;
}
</style>
