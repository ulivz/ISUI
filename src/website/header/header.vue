<template>
    <div class="su-header">
        <div class="logo-wrapper">
            <img src="../../assets/logo.png" height="36" alt="">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
    @import "../../common/stylus/index.styl"
    .su-header
        color: #fff
        background: $white
        height 50px
        text-align center
        border-bottom 1px solid #e9e9e9
        transition all .2s ease
        boxShadow()
        .logo-wrapper
            display block
            & img
                margin 7px 0
</style>
