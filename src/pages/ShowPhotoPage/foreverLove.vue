<template>
    <div>
      <div id="fullPage">
        <div class="section">123 <swipe-up-icon class="icon"/></div>
        <div class="section">
          <div class="slide" data-anchor="slide1"> 幻灯片 1 </div>
          <div class="slide" data-anchor="slide2"> 幻灯片 2 </div>
          <div class="slide" data-anchor="slide3"> 幻灯片 3 </div>
          <div class="slide" data-anchor="slide4"> 幻灯片 4 </div>
          <swipe-up-icon class="icon"/>
        </div>
        <div class="section">123 <swipe-up-icon class="icon"/></div>
        <div class="section">123 <swipe-up-icon class="icon"/></div>
      </div>
    </div>
</template>

<script>
  import swipeUpIcon from '../../components/SwipeUpIcon'
  export default {
    data: () => ({
      options: {
        sectionsColor: ['green','orange','gray','red'],
        css3: true,
        autoScrolling: true,
        continuousVertical: true,
        controlArrowColor: 'rgba(0,0,0,.2)'
      },
    }),
    methods: {},
    mounted () {
      // $('#fullPage').fullpage().destroy('all');
      $('#fullPage').fullpage(this.options);
    },
    components: {
      swipeUpIcon
    }
  }
</script>

<style scoped lang="stylus">
  .icon
    position absolute
    bottom 0
  .section
    position relative
</style>
