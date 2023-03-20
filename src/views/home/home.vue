<template>
  <div class="home">
    <base-scroll class="home-container">
      <div class="home-content">
        <van-button type="primary" @click="register">注册</van-button>
      </div>
    </base-scroll>
  </div>
</template>

<script>
  import BaseScroll from '@/components/base/scroll/base-scroll.vue'
  import PersonModel from '@/core/models/person'

  export default {
    name: 'home',
    components: {
      BaseScroll
    },
    methods: {
      async register() {
        const res = await PersonModel.register({
          username: 'zb',
          password: 'x123456',
          confirmPassword: 'x123456'
        })
        console.log(res)
      }
    }
  }
</script>

<style scoped lang="scss">
  .home{
    .home-container{
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      background-color: #F6F6F6;
      touch-action: none;
      overflow: hidden;
      .home-content{
        height: 700px;
      }
    }
  }
</style>
