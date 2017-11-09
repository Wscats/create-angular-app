//填充(Polyfills)
//填充包弥合了不同浏览器上的JavaScript实现方面的差异

//为全局上下文(window)打的补丁，提供了ES2015(ES6)的很多基础特性。
//我们也可以把它换成提供了相同内核API的其它填充库。
//一旦所有的“主流浏览器”都实现了这些API，这个依赖就可以去掉了
import 'core-js/es6';
import 'core-js/es7/reflect';

//一个为Zone规范提供的填充库，该规范已经提交给了TC39委员会，以决定是否要在JavaScript语言中进行标准化
//开发人员应该能在兼容的版本中选择一个喜欢的 zone.js 版本，而不用等Angular升级
require('zone.js/dist/zone');


/*if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}*/