<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">冰梦殿</router-link>
    </div>
    <el-menu :default-active="$route.path" mode="horizontal" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/notes">学习笔记</el-menu-item>
      <el-menu-item index="/article">文章分享</el-menu-item>
      <el-menu-item index="/icemoo">梦境冰封</el-menu-item>
      <el-menu-item index="/my">联系站长</el-menu-item>
      <el-menu-item index="/allsel">全站搜索</el-menu-item>
    </el-menu>
    <router-view name="AllSel"/>
  </div>
</template>

<script>
export default {
  name: "RouterHeader"
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  /*justify-content: space-between;*/
  align-items: center;
}

.header .logo {
  font-size: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  width: 400px;
  margin-right: 40px;
}

.el-menu {
  flex-grow: 1;
  filter: invert(100%);
}
</style>