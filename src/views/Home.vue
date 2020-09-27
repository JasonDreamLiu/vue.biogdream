<template>
  <div class="home">
    <el-row type="flex" justify="space-around">
      <el-col class="cover" :span="12">
        测试标题
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
<style scoped>
@keyframes myFirst {
}

.cover {
  box-shadow: 0 2px 12px 0 rgba(124, 252, 0, 0.8);
  color: #8cc5ff;
  background: linear-gradient(-10deg, rgb(134, 252, 0), rgba(0, 253, 232, 0.6), rgba(0, 253, 232, 0.2));
  border-radius: 0 4px 4px 4px;
  padding: 20px;
  margin-top: 40px;
  position: fixed;
}

.cover::before {
  content: '';
  width: 30px;
  height: 30px;
  filter: blur(5px);
  transform: rotate(45deg);
  display: block;
  position: absolute;
  top: -15px;
  left: -16px;
  background: #000000dd;
  background: linear-gradient(-90deg, rgba(0, 253, 232, 0.6), rgba(0, 253, 232, 0.2), #000000ff, #00000080, #00000050);
  z-index: -1;
}
</style>
