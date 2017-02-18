<template>
    <span>
        <a v-for="(tip, index) in tipsArray" class="post-category" :class="tipsClassArray[index]">
            {{ tip.name }}
        </a>
    </span>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            tipsArray: {
                type: Array
            }
        },
        data() {
            return {
                tipsClassArray: ['post-category-design',
                                 'post-category-pure',
                                 'post-category-yui',
                                 'post-category-js']
            }
        },
        mounted() {
            console.log(this.tipsArray)
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
