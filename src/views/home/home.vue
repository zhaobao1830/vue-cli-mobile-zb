<template>
  <div class="home">
    <base-scroll class="home-container">
      <div class="home-content">
        <van-button type="primary" @click="goTest">主要按钮</van-button>
      </div>
    </base-scroll>
  </div>
</template>

<script>
  import BaseScroll from '@/components/base/scroll/base-scroll.vue'

  export default {
    name: 'home',
    components: {
      BaseScroll
    },
    methods: {
      goTest() {
        this.$router.push({
          path: '/test'
        })
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
