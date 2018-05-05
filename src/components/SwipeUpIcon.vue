<template>
    <div class="swipe-up-icon-box">
      <div class="swipe-up-icon">
        <i class="icon iconfont icon-less"></i>
      </div>
      <div class="swipe-up-content">
        <p>❤ 向上滑动 ❤</p>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {}
}
</script>

<style scoped lang="stylus">
  @keyframes upDown
    0%
      bottom 0
    50%
      bottom 10px
    100%
      bottom 0
  .icon
    font-size 40px
    color #fff
  .swipe-up-content
    p
      margin 0
      font-size 30px
  .swipe-up-icon-box
    opacity .8
    width 100%
    text-align center
    animation upDown 1s ease-in-out infinite
</style>
