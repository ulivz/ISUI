<template>
    <!-- A wrapper for all the blog posts -->
    <div class="posts">

        <!-- A single blog post -->
        <section v-for="post in postData" class="post">
            <header class="post-header">
                <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar"
                     :src="post.avatar">

                <h2 class="post-title">{{ post.title }}</h2>

                <p class="post-meta">
                    By <a href="#" class="post-author">{{ post.author }}</a> under
                    <tip :tipsArray="post.tipsArray"></tip>
                </p>
            </header>

            <div class="post-description">
                <p v-html="post.content">
                </p>
                <div v-if="post.photos" class="post-images pure-g">
                    <div v-for="photo in post.photos" class="pure-u-1 pure-u-md-1-2">
                        <a href="http://www.flickr.com/photos/uberlife/8915936174/">
                            <img alt="Photo of someone working poolside at a resort"
                                 class="pure-img-responsive"
                                 :src="photo.src">
                        </a>
                        <div class="post-image-meta">
                            <h3>{{ photo.desc }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import tip from './tip.vue'
    export default {
        props: {
            postData: Array
        },
        computed  : {
            randomData: function () {
                console.log(this)
                return Math.floor(Math.random() * 4)
            },
            tipsClass : function () {
                let random = Math.floor(Math.random() * 4)
                return this.tipsClassArray[random]
            }
        },
        mounted() {
            console.log(JSON.stringify(this.postData))
        },
        components: {
            tip
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
