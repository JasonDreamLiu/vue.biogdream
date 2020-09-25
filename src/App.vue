<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
}

html, body, #app, .el-container {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
