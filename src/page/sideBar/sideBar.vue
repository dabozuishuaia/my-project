<template>
  <div class="sideBar">
    我是侧边栏
    <ul>
      <li>
        <router-link to="/box">首页</router-link>
      </li>
      <router-link tag="li" to="/herolist">
        <a>英雄列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.sideBar {
  width: 20%;
  height: 100%;
  float: left;
  background-color: aqua;
  ul {
    li {
      a {
        font-size: 28px;
        color: red;
        text-decoration: none;
      }
    }
  }
}
</style>
