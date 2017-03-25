<template>
  <div class="iu-row">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">

  import {isContain} from '../../utils/handle/collection.js'

  const classPrefix = 'isui-row';

  export default {
    name: 'Row',
    props: {
      type: {
        validator(value){
          return isContain(value, ['flex'])
        },
        align: {
          validator (value) {
            return isContain(value, ['top', 'middle', 'bottom']);
          }
        },
        justify: {
          validator (value) {
            return isContain(value, ['start', 'end', 'center', 'space-around', 'space-between']);
          }
        },
        gutter: {
          type: Number,
          default: 0
        },
        className: String
      }
    },
    computed: {
      classes () {
        return [
          {
            [`${classPrefix}`]: !this.type,
            [`${classPrefix}-${this.type}`]: !!this.type,
            [`${classPrefix}-${this.type}-${this.align}`]: !!this.align,
            [`${classPrefix}-${this.type}-${this.justify}`]: !!this.justify,
            [`${this.className}`]: !!this.className
          }
        ];
      },
      styles () {
        let style = {};
        if (this.gutter !== 0) {
          style = {
            marginLeft: this.gutter / -2 + 'px',
            marginRight: this.gutter / -2 + 'px'
          };
        }
        return style;
      }
    },
    methods: {
      updateGutter (val) {
        this.$children.forEach((child) => {
          if (val !== 0) {
            child.gutter = val;
          }
        });
      }
    },
    watch: {
      gutter (val) {
        this.updateGutter(val);
      }
    },
    mounted () {
      this.updateGutter(this.gutter);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .iu-row
    width 100%
</style>
