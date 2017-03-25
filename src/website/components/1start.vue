<template>
      <transition name="fade">
        <div class="start">
          123
        </div>
      </transition>
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
</style>
