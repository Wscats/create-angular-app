//Angular
//这个文件包含Angular所有提供商依赖
//DOM和浏览器相关的每样东西，特别是帮助往DOM中渲染的那部分。 
//这个包还包含bootstrapStatic方法，用来引导那些在产品构建时需要离线预编译模板的应用程序
import '@angular/platform-browser';
//为应用程序提供一些提供商和bootstrap方法，以便在客户端编译模板。
//不要用于离线编译。 我们使用这个包在开发期间引导应用，以及引导plunker中的范例
import '@angular/platform-browser-dynamic';
//存放核心代码，如变化监测机制，依赖注入机制，渲染，装饰器等。
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
 
//RxJS
import 'rxjs';
 
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

//WeUI
import 'weui';
