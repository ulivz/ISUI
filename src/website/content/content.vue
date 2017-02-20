<template>
    <div class="content-wrapper">
        <div class="sidebar"></div>
        <div class="detail"></div>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
    @import "../../common/stylus/common.styl"
    .content-wrapper
        display flex
        position absolute
        width 100%
        padding 15px
        box-sizing border-box
        z-index -1
        top 50px
        bottom 0px
        background $default-lignt
        .sidebar
            flex 0 0 100px
            width 100px
            border-radius 6px 0 0 6px
            border-right 7px solid $default-lignt
            background $base-white
            boxShadow()
        .detail
            flex 1
            background $base-white
            border-radius 0 6px 6px 0
            boxShadow()

</style>
