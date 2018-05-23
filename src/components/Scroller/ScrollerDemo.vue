<template>
  <div>
    <Scroller
      :refresh="refresh"
      :infinite="infinite"
      refreshColor="#4b8bf4"
      loadingColor="#ec4949">
      <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 === 0}">
        {{ item }}
      </div>
    </Scroller>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Scroller from '../../components/Scroller/Scroller'

  export default {
    data: () => ({
      items: []
    }),
    mounted () {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1;
      this.bottom = 20;
    },
    methods: {
      refresh (done) {
        setTimeout(() => {
          let start = this.top - 1;
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
          done()
        }, 1500)
      },
      infinite (done) {
        if (this.bottom >= 30) {
          setTimeout(() => {
            done(true)
          }, 1500);
          return;
        }
        setTimeout(() => {
          let start = this.bottom + 1;
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;
          done()
        }, 1500)
      }
    },
    components: {
      Scroller
    }
  }
</script>


<style lang="stylus" scoped>
  .row
    width: 100%;
    height: 100px;
    padding: 20px 0;
    font-size: 32px;
    line-height: 60px;
    text-align: center;
    color: #444;
    background-color: #fff;

  .grey-bg
    background-color: #eee;

</style>
