<template>
  <div class="box">
    <router-link :to="{name : 'box11'}" active-class="active">点击我寻找box1</router-link>
    <router-link :to="{name: 'box22'}">点击我寻找box2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: 1
    }
  },
  created() {
   
  },
  beforeRouteEnter(to, from, next) {
    console.log('33333333333333333')
    console.log(to)
    console.log(from)
    console.log(next)
    console.log('33333333333333333')
    next(vm => {
      console.log('vm')
      console.log(vm.data)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('9999999999')
    console.log(this.$route.params.id)
    console.log(to)
    console.log(from)
    console.log(next)
    console.log('9999999999')
    next()
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  // background: #000;
  .active {
    color: red;
  }
}
</style>
