<template>
    <div>
      <div id="fullPage">
        <div class="section">123</div>
        <div class="section">123</div>
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
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['one', 'two', 'three', 'four'],
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        css3: true,
      },
    }),
    methods: {},
    mounted () {
      $('#fullPage').fullpage(this.options);
    }
  }
</script>

<style scoped lang="stylus">

</style>
