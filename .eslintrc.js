// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 忽略掉对缩进的检查，采用IDE的格式化默认的缩进
    'indent': 0,
    // 忽略掉函数括号前的空格检查
    'space-before-function-paren': 0,

    'key-spacing': 0,

    'no-unexpected-multiline': 0,

    'no-sequences': 0,
    'semi': 0
  }
}
