<template>
    <div class="su-header">
        <div class="logo-wrapper">
            <img src="../../assets/logo.png" alt="">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
    @import "../../styles/index.styl"
    @import "../pageConfig.styl"
    .su-header
        color: #fff
        background: $base-white
        height $header-height
        width 100%
        flex 0 0 $header-height
        position fixed
        left 0
        top 0
        text-align center
        box-shadow 0 0 6px #aaa
        z-index 999
        transition all .2s ease
        boxShadow()
        .logo-wrapper
            display block
            & img
                height $header-height * 0.8
                margin $header-height * 0.1 0
</style>
