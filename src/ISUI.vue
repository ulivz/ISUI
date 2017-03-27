<template>
    <div class="isui">
        <su-header></su-header>
        <su-content></su-content>
    </div>
</template>

<script type="text/ecmascript-6">
    import header from 'website/header/header.vue'
    import content from 'website/content/content.vue'
    export default {
        components: {
            'su-header': header,
            'su-content': content
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .isui
      width 100%
      height 100%
</style>

