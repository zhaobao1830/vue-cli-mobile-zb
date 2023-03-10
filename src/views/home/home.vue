<template>
  <div class="home">
    <scroll-pull-up-down class="home-container">
      <div class="home-content">
        <van-button type="primary">主要按钮</van-button>
      </div>
    </scroll-pull-up-down>
  </div>
</template>

<script>
  import ScrollPullUpDown from '@/components/base/scroll/scroll-pull-up-down.vue'

  export default {
    name: 'home',
    components: {
      ScrollPullUpDown
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
