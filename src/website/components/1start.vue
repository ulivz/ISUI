<template>
      <!--<transition name="ease">-->
        <div class="start">
          <div class="block">123</div>
          <Row >
            <i-col span="12">1312321</i-col>
            <i-col span="12">1312321</i-col>
            <i-col span="12">1312321</i-col>
          </Row>
        </div>
      <!--</transition>-->
</template>

<script type="text/ecmascript-6">
    import Col from '../../components/grid/Col.vue'
    import Row from '../../components/grid/Row.vue'

    export default {
        name: 'start',
        components: {
          iCol: Col,
          Row
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../styles/index.styl"

  .start
    color $rate-star-color
    .block
      width 100px
      height 100px
      background $base-dark
</style>
