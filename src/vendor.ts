//Angular
//这个文件包含Angular所有提供商依赖
//DOM和浏览器相关的每样东西，特别是帮助往DOM中渲染的那部分。 
//这个包还包含bootstrapStatic方法，用来引导那些在产品构建时需要离线预编译模板的应用程序
import '@angular/platform-browser';

//为应用程序提供一些提供商和bootstrap方法，以便在客户端编译模板。
//不要用于离线编译。 我们使用这个包在开发期间引导应用，以及引导plunker中的范例
import '@angular/platform-browser-dynamic';

//存放核心代码，如变化监测机制，依赖注入机制，渲染，装饰器等
//框架中关键的运行期部件，每一个应用都需要它
//包括所有的元数据装饰器：Component、Directive，依赖注入系统，以及组件生命周期钩子
import '@angular/core';

//Angular的模板编译器
//它会理解模板，并且把模板转化成代码，以供应用程序运行和渲染
//开发人员通常不会直接跟这个编译器打交道，而是通过platform-browser-dynamic或离线模板编译器间接使用它
//import '@angular/compiler';

//提供的服务、管道和指令
import '@angular/common';
import '@angular/http';
import '@angular/router';

//RxJS
//一个为 可观察对象(Observable)规范 提供的填充库，
//该规范已经提交给了 TC39 委员会，以决定是否要在JavaScript语言中进行标准化
//开发人员应该能在兼容的版本中选择一个喜欢的rxjs版本，而不用等Angular升级
import 'rxjs';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

//WeUI
import 'weui';