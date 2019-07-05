<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 头部 -->
    <Header/>
    <!-- <div style="float: left;width:20%">2</div>
    <div style="float: left;">4</div> -->
    <!-- 侧边栏 -->
    <Sidebar/>
    <!-- 内容 -->
    <router-view />
  </div>
</template>

<script>
import Header from "@/page/header/header.vue";
import Sidebar from "@/page/sideBar/sideBar.vue";
export default {
  name: "App",
  components: {
    Header,
    Sidebar
  }
};
</script>

<style>
</style>
