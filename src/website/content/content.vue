<template>
    <div class="content-wrapper">
        <div class="sidebar">
            <div class="h1" v-for="h1 in nav">
                <span>{{ h1.label }}</span>
                <div class="h2" v-for="h2 in h1.child" style="padding-left: 10px">
                    <span>{{ h2.label }}</span>
                    <div class="h3" v-for="h3 in h2.child" style="padding-left: 10px">
                        <span>{{ h3.label}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { NAV_METADATA } from '../../router/nav'
    export default {
        data() {
            return {
                nav: []
            }
        },
        mounted() {
            this.nav = NAV_METADATA
        }

    }
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
            padding 10px
            .h1
                font-size 18px
                .h2
                    font-size 14px
                    .h3
                        font-size 12px
        .detail
            flex 1
            background $base-white
            border-radius 0 6px 6px 0
            boxShadow()

</style>
