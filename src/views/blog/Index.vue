<template>
  <el-container>
    <el-header>
      <RouterHeader/>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>

    <el-footer>
      <RouterFooter/>
    </el-footer>
  </el-container>
</template>

<script>
const RouterHeader = () => import(/* webpackChunkName: "routerHeader" */ '@/router/RouterHeader');
const RouterFooter = () => import(/* webpackChunkName: "routerFooter" */ '@/router/RouterFooter');
export default {
  name: "Index",
  components: {
    RouterHeader, RouterFooter
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  height: auto;
  width: auto;
}

</style>