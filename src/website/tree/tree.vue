<template>
    <div>
        <ul class="tree" v-for="tree in treeData">
            <router-link tag="li" :to="tree.name" >
                <span @click="fold(tree)">{{ tree.label }}</span>
            </router-link>
            <transition name="slide-fade">
                <tree class="subTree" v-show="tree.show" :treeData="tree.child"></tree>
            </transition>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue'
    export default {
        name: 'tree',
        props: {
            treeData: Array
        },
        methods: {
            fold(foldObject) {
                console.log('1')
                if (!foldObject.show) {
                    console.log('1')
                    Vue.set(foldObject, 'show', true)
                } else {
                    foldObject.show = false
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
    @import "../../common/stylus/index.styl"
    $indent = 20px
    $height = 42px
    .tree
        cursor pointer
        font-size 12px
        li
            display block
            height $height
            line-height $height
            &.router-link-active
                background #ebf5fd
                color: $default-red
                border-right 2px solid $default-red
            span
                display block
                padding-left $indent
            &:hover
                background #ebf5fd
                color: $default-red

    .subTree > ul > li
        padding-left $indent

    .subTree > ul > .subTree > ul > li
        padding-left $indent * 2

    .subTree > ul > .subTree > ul > .subTree > ul > li
        padding-left $indent * 3


    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateY(-10px);
        opacity: 0;
    }


</style>

