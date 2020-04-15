module.exports = {
  root: true,
  env: {
      node: true,
      //启用浏览器全局变量
      browser: true,
      //启用除了 modules 以外的所有 ECMAScript 6 特性
      es6: true,
      commonjs: true
  },
  //使用eslint推荐的规则作为基础配置，可以在rules中覆盖  用vue-cli需要安装vue/cli-plugin-eslint 不然无法通过eslint检查
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  //rules中的值0、1、2分别表示不开启检查、警告、错误
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      indent: [2, 2],
      quotes: [2, 'single'] //单引号
  },
  // parser指定解析器，默认的为espree。babel-eslint是一个Babel parser的包装器，这个包装器使得 Babel parser 可以和 ESLint 协调工作
  parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
  },
  overrides: [
      {
          files: [
              '**/__tests__/*.{j,t}s?(x)',
              '**/tests/unit/**/*.spec.{j,t}s?(x)'
          ],
          env: {
              jest: true
          }
      }
  ]
};
