<template>
  <div class="md-home">
    <div class="md-home-logo">
      <img src="../../../static/images/love.svg" alt="">
    </div>
    <div class="md-home-name" data-in-effect="fadeInLeftBig">
      <!--DATINY ZSY-->
      GIVE TO MY LITTLE QIN QIN
    </div>
    <div class="md-home-time">0%</div>
    <h1 class="md-home-copyright">Produced By DATINY - ZSY &times; MXQ</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted () {
    $('.md-home-name')
      .textillate()
      .on('end.tlt');
    this.timeCount(() => {
      this.$router.replace({
        name: 'HomePage.foreverLove'
      })
    });
  },
  methods: {
    timeCount(fn) {
      const duration = 2500;
      const tick = 100;
      const per = 100 / (duration / tick);

      let percent = 0;
      const time = setInterval(() => {
        if (percent < 100) {
          percent += per;
          $('.md-home-time').text(`${parseInt(percent)}%`)
        } else {
          clearInterval(time);
          fn()
        }
      }, tick)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @keyframes masked-animation
    0%
      background-position: 0 0;
    to
      background-position: -100% 0
.md-home
  position fixed
  absolute-pos()
  background color-bg-base
  .md-home-logo
    width 100px
    height 100px
    position absolute
    top 30%
    left 50%
    transform translateX(-50%)
    img
      width 100%
  .md-home-name
    position absolute
    width 100%
    top 45%
    left 0
    font-size font-heading-medium
    font-weight 300
    color color-text-minor
    text-align center
    span.word5
      .char1, .char2, .char3
        color color-text-base
    span.word6 .char1
      color color-text-base
    span.word7 .char1
      color color-text-base
    span.word8
      .char1, .char2, .char3
        color color-text-base
    span.word9 .char1
        color color-text-base
    span.word10 .char1
        color color-text-base
  .md-home-time
    position absolute
    width 100%
    top 50%
    left 0
    font-size font-minor-normal
    color color-text-minor
    text-align center
    background-image linear-gradient(left,#cddc39,#ff9800 25%,#cddc39 50%,#ff9800 75%,#cddc39)
    -webkit-text-fill-color transparent!important
    -webkit-background-clip text!important
    -webkit-background-size 200% 100%!important
    -webkit-animation masked-animation 1s infinite linear
    display inline-block
  .md-home-copyright
    position fixed
    left 0
    bottom 20px
    width 100%
    text-align center
    font-size font-minor-normal
    font-weight 300
    color color-text-caption
</style>
