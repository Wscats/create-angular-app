//为全局上下文(window)打的补丁，提供了ES2015(ES6)的很多基础特性。 
//我们也可以把它换成提供了相同内核API的其它填充库。
//一旦所有的“主流浏览器”都实现了这些API，这个依赖就可以去掉了
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

/*if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}*/