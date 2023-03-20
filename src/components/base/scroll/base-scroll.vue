<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import ObserveDOM from '@better-scroll/observe-dom'

  export default {
    props: {
      click: {
        type: Boolean,
        default: true
      },
      probeType: {
        type: Number,
        default: 0
      },
      scrollX: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll () {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          ObserveDOM,
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX
        })
      }
    },
    destroyed() {
      this.scroll.destroy()
    }
  }
</script>

<style scoped lang="scss">

</style>
