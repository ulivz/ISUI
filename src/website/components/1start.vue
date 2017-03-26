<template>
      <!--<transition name="ease">-->
        <div class="start">
          <div class="block">123</div>
        </div>
      <!--</transition>-->
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'start'
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
      $row-prefix-cls()

</style>
