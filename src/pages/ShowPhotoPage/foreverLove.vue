<template>
    <div>
      <div id="fullPage">
        <div class="section">123</div>
        <div class="section">
          <div class="slide" data-anchor="slide1"> 幻灯片 1 </div>
          <div class="slide" data-anchor="slide2"> 幻灯片 2 </div>
          <div class="slide" data-anchor="slide3"> 幻灯片 3 </div>
          <div class="slide" data-anchor="slide4"> 幻灯片 4 </div>
        </div>
        <div class="section">123</div>
        <div class="section">123</div>
      </div>
    </div>
</template>

<script>
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
    }
  }
</script>

<style scoped lang="stylus">

</style>
