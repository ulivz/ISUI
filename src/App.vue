<template>
  <div id="layout" class="pure-g">
    <navigator :navigator="navigator"></navigator>
    <div class="content pure-u-1 pure-u-md-3-4">
      <div>
        <h1 class="content-subhead">ISUI</h1>
        <post v-if="showPost" :postData="postData"></post>

      </div>
    </div>
  </div>
</template>

<script>
  import navigator from './website/navigator.vue'
  import post from './website/post.vue'
  export default {
    name: 'app',
    data() {
      return {
        postData: [
          {
            avatar   : 'static/img/common/tilo-avatar.png',
            column   : 'News',
            title    : 'Where is the advantage of vuejs?',
            author   : 'toxichl',
            tipsArray: [
              {
                name: 'CSS',
                href: 'http:// www.baidu.com'
              },
              {
                name: 'PURE',
                href: '#'
              }],
            content  : `Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a
                        href="https://speakerdeck.com/tilomitra/pure-bliss">slides from the presentation</a>.
                    Although it looks pretty minimalist, we’ve been working on Pure for several months. After
                    many iterations, we have released Pure as a set of small, responsive, CSS modules that you
                    can use in every web project.`,
            photos: [
              {
                desc: 'CSSConf Photos',
                src: 'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg'
              },
              {
                desc: 'JSConf Photos',
                src: 'http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg'
              }
            ]
          },
          {
            avatar   : 'static/img/common/ericf-avatar.png',
            column   : 'News',
            title    : 'Everything You Need to Know About Grunt',
            author   : 'Eran You',
            tipsArray: [
              {
                name: 'JavaScript',
                href: 'http:// www.baidu.com'
              },
              {
                name: 'Node.js',
                href: '#'
              }],
            content  : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          },
          {
            avatar   : 'static/img/common/ericf-avatar.png',
            column   : 'News',
            title    : 'YUI 3.10.2 Released',
            author   : 'YUI',
            tipsArray: [
              {
                name: 'YUI',
                href: 'http:// www.baidu.com'
              },
              {
                name: 'Node.js',
                href: '#'
              }],
            content  : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          }
        ],
        navigator: [
          {
            title: 'Node.js'
          },
          {
            title: 'Vue.js'
          },
          {
            title: 'Component'
          }
        ],
        showPost: false
      }
    },
    components: {
      navigator,
      post
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
