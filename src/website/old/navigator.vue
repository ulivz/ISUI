<template>
    <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
            <h1 class="brand-title">ISUI</h1>
            <h2 class="brand-tagline">A Vue UI component library</h2>
            <nav class="nav">
                <ul class="nav-list">
                    <li v-for="nav in navigator" class="nav-item">
                        <a class="pure-button" href="http://purecss.io">{{ nav.title }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            navigator: Array
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .nav-item
        display block
</style>
